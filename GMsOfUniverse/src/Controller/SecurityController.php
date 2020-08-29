<?php

namespace App\Controller;

use App\Entity\Image;
use App\Entity\User;
use App\Type\ImageType;
use Doctrine\ORM\EntityManagerInterface;
use JMS\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Utils\UploadedBase64File;


class SecurityController extends AbstractController
{
    /**
     * @Route("/security", name="security")
     */
    public function index()
    {
        return $this->render('security/index.html.twig', [
            'controller_name' => 'SecurityController',
        ]);
    }



    /**
     * @Route("/test", name="test", methods={"POST"})
     */
    public function test(Request $request)
    {
        $user = $this->getUser();

        return new JsonResponse(['value' =>$user->getUsername()], 200);
    }

    /**
     * @Route("/profile", name="profile", methods={"POST"})
     */
    public function profile(Request $request)
    {
        $user = $this->getUser();

       /* $name = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath().'/images/'.$user->getAvatar()->getImageName();



        $type = pathinfo($name, PATHINFO_EXTENSION);

        $idata = file_get_contents($name);

        $image = 'data:image/' . $type . ';base64,' . base64_encode($idata);*/
        $avatar = $user->getAvatar();
        if(isset($avatar))
        {
            $avatar = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath().'/images/'.$user->getAvatar()->getImageName();

        }
        else
        {
            $avatar = ' '.$user->getUsername()[0].' ';
        }

            $data = [
                'status' => 201,
                'data' => [ 'mail' => $user->getUsername(), 'avatar' =>  $avatar, 'roles' => $user->getRoles(), 'avatarAlt' =>  ' '.$user->getUsername()[0].' ']
            ];

            return new JsonResponse($data, 201);

       // return new JsonResponse(['value' =>json_last_error()], 200);
    }


    /**
     * @Route("/register", name="register", methods={"POST"})
    */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, EntityManagerInterface $em, ValidatorInterface $validator, SerializerInterface $serializer)
    {
        $values = json_decode($request->getContent());
        if(isset($values->_username,$values->_password)) {
       // $username =    $request->get('_username');
       // $password =    $request->get('_password');
       // if(isset($username,$password)){
            $user = new User();
            $user->setEmail($values->_username);
            $user->setPassword($passwordEncoder->encodePassword($user, $values->_password));
            $user->setRoles($user->getRoles());
            $errors = $validator->validate($user);
            if(count($errors)) {
                $errors = $serializer->serialize($errors, 'json');
                return new Response($errors, 500, [
                    'Content-Type' => 'application/json'
                ]);
            }
            $em->persist($user);
            $em->flush();

            $data = [
                'status' => 201,
                'message' => 'L\'utilisateur a été créé'
            ];

            return new JsonResponse($data, 201);
        }
        $data = [
            'status' => 500,
            'message' => 'Vous devez renseigner les clés username et password',
            'data' => $request->get('_username')
        ];
        return new JsonResponse(['value' =>json_last_error()], 200);
    }

    /**
     * @Route("/addAvatar", name="addAvatar", methods={"POST"})
     */
    public function addAvatar(Request $request)
    {
      /*  $values = json_decode($request->getContent());
        if(isset($values->_image)&&isset($values->_id))
        {
          /*
            $user = $this->getDoctrine()->getRepository(User::class)->find($values->_id);
            if(isset($user))
            {
                $user->setAvatarFile(base64_decode ($values->_image));
                return new JsonResponse(['value' =>'good'], 200);
            }
            return new JsonResponse(['value' =>'bad2'], 200);
            */
            //test
         /*   $data = $values->_image;
            if (preg_match('/^data:image\/(\w+);base64,/', $data, $type)) {
                $data = substr($data, strpos($data, ',') + 1);
                $type = strtolower($type[1]); // jpg, png, gif

                if (!in_array($type, [ 'jpg', 'jpeg', 'gif', 'png' ])) {
                    throw new \Exception('invalid image type');
                }

                $data = base64_decode($data);

                if ($data === false) {
                    throw new \Exception('base64_decode failed');
                }
                return new JsonResponse(['value' =>'good'], 200);
            } else {
                throw new \Exception('did not match data URI with image data');
            }

            file_put_contents("img.{$type}", $data);
            //return new JsonResponse(['value' =>'good'], 200);
        }

        return new JsonResponse(['value' =>'bad1'], 200);*/

         //vichuploader safe version

        $data = json_decode($request->getContent(), true);
        if($data === null
            || !is_array($data)
            || count($data) !== 1
            || !isset($data['image']['name'], $data['image']['value'])
            || count($data['image']) !== 2
        ) {
            return new JsonResponse(['value' =>'bad1'], 200);
        }

        $avatarFile = new UploadedBase64File($data['image']['value'], $data['image']['name']);
        $user = $this->getDoctrine()->getRepository(User::class)->find($this->getUser()->getId());
        $image = new Image();
        $form = $this->createForm(ImageType::class, $image, ['csrf_protection' => false]);
        $form->submit(['imageFile' => $avatarFile]);

        if(!($form->isSubmitted() && $form->isValid())) {
            return new JsonResponse(['valid' =>$form->isValid(), 'submit' =>$form->isSubmitted()], 200);
        }
        $user->setAvatar($image);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($image);
        $entityManager->persist($user);
        $entityManager->flush();


        // Persist, do thing you want to do and send json response
        return new JsonResponse(['value' =>'good'], 200);

    }
}
