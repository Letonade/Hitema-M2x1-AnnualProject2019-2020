<?php


namespace App\Controller;


use App\Entity\Game;
use App\Entity\Image;
use App\Entity\Post;
use App\Entity\Type;
use App\Type\ImageType;
use App\Utils\UploadedBase64File;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PostController extends AbstractController
{
    /**
     * @Route("/post/create_post", name="createPost", methods={"POST"})
     */
    public function createPost(Request $request)
    {
        $user = $this->getUser();
        $values = json_decode($request->getContent());


        if(isset($values->type_id,$values->name,$values->content,$values->annonce,$values->date->date,$values->sponsored, $values->img->name, $values->img->value))
        {
            $post = new Post();

            $post->setName($values->name);
            if(isset($values->message))
            {
                $post->setContent(["content" => $values->content,"message" =>$values->message,"annonce" =>$values->annonce]);
            }
            else{
                $post->setContent(["content" => $values->content,"message" =>null,"annonce" =>$values->annonce]);
            }
            $post->setSponsored($values->sponsored);
            $post->setDate(new \DateTime($values->date->date));
            $post->setUserId($user);
            $post->setType($this->getDoctrine()->getRepository(Type::class)->find($values->type_id));

            $avatarFile = new UploadedBase64File($values->img->value, $values->img->name);
            $image = new Image();
            $form = $this->createForm(ImageType::class, $image, ['csrf_protection' => false]);
            $form->submit(['imageFile' => $avatarFile]);

            if(!($form->isSubmitted() && $form->isValid())) {
                return new JsonResponse(['valid' =>$form->isValid(), 'submit' =>$form->isSubmitted()], 200);
            }

            $post->setImage($image);


            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($image);
            $entityManager->persist($post);
            $entityManager->flush();


            return new JsonResponse(['value' =>'create_post'], 200);
        }

        return new JsonResponse(['value' => 'bad json. You are a bad boy, bad json bad boy'], 500);
    }

    /**
     * @Route("/post/modify_post", name="modifyPost", methods={"POST"})
     */
    public function modifyPost(Request $request)
    {
        $user = $this->getUser();
        $values = json_decode($request->getContent());


        if(isset($values->id, $values->type_id,$values->name,$values->content,$values->annonce,$values->date->date,$values->sponsored))
        {
            $post = $this->getDoctrine()->getRepository(Post::class)->find($values->id);

            $post->setName($values->name);
            if(isset($values->message))
            {
                $post->setContent(["content" => $values->content,"message" =>$values->message,"annonce" =>$values->annonce]);
            }
            else{
                $post->setContent(["content" => $values->content,"message" =>null,"annonce" =>$values->annonce]);
            }

            $post->setSponsored($values->sponsored);
            $post->setDate(new \DateTime($values->date->date));
            $post->setUserId($user);
            $post->setType($this->getDoctrine()->getRepository(Type::class)->find($values->type_id));




            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($post);
            $entityManager->flush();


            return new JsonResponse(['value' =>'modify_post'], 200);
        }

        return new JsonResponse(['value' => 'bad json. You are a bad boy, bad json bad boy'], 500);
    }

    /**
     * @Route("/post/modify_post_img", name="modifyPostImg", methods={"POST"})
     */
    public function modifyPostImg(Request $request)
    {
        $user = $this->getUser();
        $values = json_decode($request->getContent());


        if(isset($values->id, $values->img->name, $values->img->value))
        {
            $post = $this->getDoctrine()->getRepository(Post::class)->find($values->id);



            $avatarFile = new UploadedBase64File($values->img->value, $values->img->name);
            $image = new Image();
            $form = $this->createForm(ImageType::class, $image, ['csrf_protection' => false]);
            $form->submit(['imageFile' => $avatarFile]);

            if(!($form->isSubmitted() && $form->isValid())) {
                return new JsonResponse(['valid' =>$form->isValid(), 'submit' =>$form->isSubmitted()], 200);
            }

            $post->setImage($image);


            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($image);
            $entityManager->persist($post);
            $entityManager->flush();


            return new JsonResponse(['value' =>'modify_post_img'], 200);
        }

        return new JsonResponse(['value' => 'bad json. You are a bad boy, bad json bad boy'], 500);
    }

    /**
     * @Route("/post/get_slider", name="getSlider", methods={"GET"})
     */
    public function getSlider(Request $request)
    {


        $posts = $this->getDoctrine()->getRepository(Post::class)->slider();
        $datas = array();
        foreach ($posts as $post)
        {
            $content =$post->getContent();

            $data = array();
            $data['post']['id'] = $post->getId();
            $data['post']['name'] = $post->getName();
            $data['post']['date'] = $post->getDate();
            $data['post']['type_id'] = $post->getType()->getId();
            if(isset($content['message']))
            {
                $data['post']['h3'] = $content['annonce'];
                $data['post']['h2'] = null;
                $data['post']['p'] = $content['message'];
            }
            else{
                $data['post']['h3'] = null;
                $data['post']['h2'] = $content['annonce'];
                $data['post']['p'] = null;
            }

          //  $data['post']['annonce'] = $content['annonce'];
            $data['post']['sponsored'] = ($post->getSponsored())?1:0;
            $data['post']['img'] = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath() . '/images/' . $post->getImage()->getImageName();
            $data['other_post_info']['owner'] = $post->getUserId()->getUsername();
            $datas[] = $data;
        }


        return new JsonResponse($datas, 200);
    }

    /**
     * @Route("/post/get_historique", name="getHistorique", methods={"GET"})
     */
    public function getHistorique(Request $request)
    {
        $user = $this->getUser();

        $posts = $this->getDoctrine()->getRepository(Post::class)->posts();
        $datas = array();
        foreach ($posts as $post)
        {
            $content =$post->getContent();

            $data = array();
            $data['post']['id'] = $post->getId();
            $data['post']['name'] = $post->getName();
            $data['post']['date'] = $post->getDate();
            $data['post']['type_id'] = $post->getType()->getId();
            $data['post']['content'] = $content['content'];
            if(isset($content['message']))
            {
                $data['post']['message'] = $content['message'];
            }
            else{
                $data['post']['message'] = null;
            }
            $data['post']['annonce'] = $content['annonce'];
            $data['post']['sponsored'] = ($post->getSponsored())?1:0;
            $data['post']['img'] = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath() . '/images/' . $post->getImage()->getImageName();
            $data['other_post_info']['owner'] = $post->getUserId()->getUsername();
            $datas[] = $data;
        }


        return new JsonResponse($datas, 200);
    }

    /**
     * @Route("/post/get_sponso", name="getSponso", methods={"GET"})
     */
    public function getSponso(Request $request)
    {
        $user = $this->getUser();

        $posts = $this->getDoctrine()->getRepository(Post::class)->posts_spo();
        $datas = array();
        foreach ($posts as $post)
        {
            $content =$post->getContent();

            $data = array();
            $data['post']['id'] = $post->getId();
            $data['post']['name'] = $post->getName();
            $data['post']['date'] = $post->getDate();
            $data['post']['type_id'] = $post->getType()->getId();
            $data['post']['content'] = $content['content'];
            if(isset($content['message']))
            {
                $data['post']['message'] = $content['message'];
            }
            else{
                $data['post']['message'] = null;
            }
            $data['post']['annonce'] = $content['annonce'];
            $data['post']['sponsored'] = ($post->getSponsored())?1:0;
            $data['post']['img'] = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath() . '/images/' . $post->getImage()->getImageName();
            $data['other_post_info']['owner'] = $post->getUserId()->getUsername();
            $datas[] = $data;
        }


        return new JsonResponse($datas, 200);
    }


    /**
     * @Route("/post/get_post", name="getPost", methods={"POST"})
     */
    public function getPost(Request $request)
    {

        $values = json_decode($request->getContent());


        if(isset($values->id))
        {
            $post = $this->getDoctrine()->getRepository(Post::class)->find($values->id);
            $content =$post->getContent();

            $data = array();
            $data['post']['id'] = $post->getId();
            $data['post']['name'] = $post->getName();
            $data['post']['date'] = $post->getDate();
            $data['post']['type_id'] = $post->getType()->getId();
            $data['post']['content'] = $content['content'];
            if(isset($content['message']))
            {
                $data['post']['message'] = $content['message'];
            }
            else{
                $data['post']['message'] = null;
            }
            $data['post']['annonce'] = $content['annonce'];
            $data['post']['sponsored'] = $post->getSponsored();
            $data['post']['img'] = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath() . '/images/' . $post->getImage()->getImageName();
            $data['other_post_info']['owner'] = $post->getUserId()->getUsername();


            return new JsonResponse($data, 200);
        }

        return new JsonResponse(['value' => 'bad json. You are a bad boy, bad json bad boy'], 500);
    }

}