<?php


namespace App\Controller;

use App\Entity\Game;
use App\Entity\User;
use App\Utils\UploadedBase64File;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class StatistiqueController extends AbstractController
{
  
    /**
     * @Route("/stat/get_game", name="get_game", methods={"POST"})
     */
    public function game(Request $request)
    {
        $values = json_decode($request->getContent());
        $game = $this->getDoctrine()->getRepository(Game::class)->findAll();
        return new JsonResponse(['value' => 'get_game'], 200);
    }
    /**
     * @Route("/stat/get_user", name="get_user", methods={"POST"})
     */
    public function users(Request $request)
    {
        $values = json_decode($request->getContent());
        $users = $this->getDoctrine()->getRepository(User::class)->findAll();
        return new JsonResponse(['value' => 'get_user'], 200);
    }




}






?>