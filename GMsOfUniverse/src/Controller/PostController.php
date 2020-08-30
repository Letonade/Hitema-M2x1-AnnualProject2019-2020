<?php


namespace App\Controller;


use App\Entity\Post;
use App\Entity\Type;
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


        if(isset($values->type_id,$values->name,$values->content,$values->date->date,$values->sponsored))
        {
            $post = new Post();

            $post->setName($values->name);
            $post->setContent($values->content);
            $post->setSponsored($values->sponsored);
            $post->setDate(new \DateTime($values->date));
            $post->setUserId($user);
            $post->setType($this->getDoctrine()->getRepository(Type::class)->find($values->type_id));


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

        return new JsonResponse(['value' =>'create_post'], 200);
    }

    /**
     * @Route("/post/get_slider", name="getSlider", methods={"GET"})
     */
    public function getSlider(Request $request)
    {
        $user = $this->getUser();

        return new JsonResponse(['value' =>'create_post'], 200);
    }

    /**
     * @Route("/post/get_historique", name="getHistorique", methods={"GET"})
     */
    public function getHistorique(Request $request)
    {
        $user = $this->getUser();

        return new JsonResponse(['value' =>'create_post'], 200);
    }


    /**
     * @Route("/post/get_post", name="getPost", methods={"GET"})
     */
    public function getPost(Request $request)
    {
        $user = $this->getUser();

        return new JsonResponse(['value' =>'create_post'], 200);
    }

}