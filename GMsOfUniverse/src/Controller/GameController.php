<?php


namespace App\Controller;


use App\Entity\Campagne;
use App\Entity\Game;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class GameController extends AbstractController
{

    /**
     * @Route("/game/get_Calendar", name="getCalendar", methods={"POST"})
     */
    public function getCalendar(Request $request)
    {
        $user = $this->getUser();

        return new JsonResponse(['value' =>'create_post'], 200);
    }

    /**
     * @Route("/game/create_campagne", name="createCampagne", methods={"POST"})
     */
    public function createCampagne(Request $request)
    {
        $user = $this->getUser();

        $values = json_decode($request->getContent());
        if(isset($values->name)) {

            $campagne = new Campagne();
            $campagne->setName($values->name);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($campagne);
            $entityManager->flush();


            return new JsonResponse(['value' => 'create_campagne'], 200);


        }


        return new JsonResponse(['value' => 'bad json. You are a bad boy, bad json bad boy'], 500);

    }

    /**
     * @Route("/game/create_game", name="createGame", methods={"POST"})
     */
    public function createGame(Request $request)
    {
        $user = $this->getUser();



        return new JsonResponse(['value' =>'create_post'], 200);
    }

    /**
     * @Route("/game/participe", name="participe", methods={"POST"})
     */
    public function participe(Request $request)
    {
        $user = $this->getUser();

        return new JsonResponse(['value' =>'create_post'], 200);
    }

    /**
     * @Route("/game/no_participe", name="noParticipe", methods={"POST"})
     */
    public function noParticipe(Request $request)
    {
        $user = $this->getUser();

        return new JsonResponse(['value' =>'create_post'], 200);
    }



}