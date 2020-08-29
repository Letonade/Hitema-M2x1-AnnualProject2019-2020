<?php


namespace App\Controller;


use App\Entity\Campagne;
use App\Entity\Game;
use App\Entity\Participant;
use App\Entity\Type;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class GameController extends AbstractController
{

    /**
     * @Route("/game/get_Calendar", name="getCalendar", methods={"GET"})
     */
    public function getCalendar(Request $request)
    {
        $user = $this->getUser();

         $games = $this->getDoctrine()->getRepository(Game::class)->findAll();
         $datas =array();
         foreach ($games as $game)
         {
             $data =array();
             $description_data = $game->getDescription();
             //id
             $id = $game->getId();
             $data['id'] = $id;
             // avatarImg
             $avatar = $game->getProprietaire()->getAvatar();
             if(isset($avatar))
             {
                    $avatar = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath().'/images/'.$game->getProprietaire()->getAvatar()->getImageName();

             }
            else
            {
                $avatar = ' '.$game->getProprietaire()->getUsername()[0].' ';
             }
             $data['avatarImg'] = $avatar;
             //avatarAlt
             $data['avatarAlt'] = ' '.$game->getProprietaire()->getUsername()[0].' ';
            //title
             $data['title'] = $game->getName();
            //mj
             $data['mj'] = $game->getProprietaire()->getUsername();
            //description
             $data['description'] = $description_data["description"];
            //maxJoueur
             $data['maxJoueur'] = $description_data["maxJoueur"];
            //nombreInscrit

             $data['nombreInscrit'] = $this->getDoctrine()->getRepository(Participant::class)->getGameParticipant($id);
            //categorieDeJoueur
             $data['categorieDeJoueur'] = $description_data["categorieDeJoueur"];
            //univers
             $data['univers'] = $game->getType()->getName();
            //langue
             $data['langue'] = $description_data["langue"];
            //matureContent
             $data['matureContent'] = $description_data["matureContent"];
            //region
             $data['region'] = $description_data["region"];
            //date
             $data['date'] = $game->getDate();
            //actualUser
             $data['actualUser'] = $this->getDoctrine()->getRepository(Participant::class)->getGameParticipation($id, $user->getId(), $game->getDate());

             //[
             //inscrit : 1

             //passés : 1
            //]

             $datas[] = $data;
         }


        return new JsonResponse($datas, 201);

    }


    /**
     * @Route("/game/get_Calendar_anon", name="getCalendarAnon", methods={"GET"})
     */
    public function getCalendarAnon(Request $request)
    {


        $games = $this->getDoctrine()->getRepository(Game::class)->findAll();
        $datas =array();
        foreach ($games as $game)
        {
            $data =array();
            $description_data = $game->getDescription();
            //id
            $id = $game->getId();
            $data['id'] = $id;
            // avatarImg
            $avatar = $game->getProprietaire()->getAvatar();
            if(isset($avatar))
            {
                $avatar = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath().'/images/'.$game->getProprietaire()->getAvatar()->getImageName();

            }
            else
            {
                $avatar = ' '.$game->getProprietaire()->getUsername()[0].' ';
            }
            $data['avatarImg'] = $avatar;
            //avatarAlt
            $data['avatarAlt'] = ' '.$game->getProprietaire()->getUsername()[0].' ';
            //title
            $data['title'] = $game->getName();
            //mj
            $data['mj'] = $game->getProprietaire()->getUsername();
            //description
            $data['description'] = $description_data["description"];
            //maxJoueur
            $data['maxJoueur'] = $description_data["maxJoueur"];
            //nombreInscrit

            $data['nombreInscrit'] = $this->getDoctrine()->getRepository(Participant::class)->getGameParticipant($id);
            //categorieDeJoueur
            $data['categorieDeJoueur'] = $description_data["categorieDeJoueur"];
            //univers
            $data['univers'] = $game->getType()->getName();
            //langue
            $data['langue'] = $description_data["langue"];
            //matureContent
            $data['matureContent'] = $description_data["matureContent"];
            //region
            $data['region'] = $description_data["region"];
            //date
            $data['date'] = $game->getDate();



            $datas[] = $data;
        }


        return new JsonResponse($datas, 201);

    }

    /**
     * @Route("/game/get_Types", name="getTypes", methods={"GET"})
     */
    public function getTypes(Request $request)
    {
        $user = $this->getUser();

        $types = $this->getDoctrine()->getRepository(Type::class)->findAll();
        $datas =array();
        foreach ($types as $type)
        {
            $data =array();
            $data['id'] = $type->getId();
            $data['name'] = $type->getName();
            $datas[] = $data;
        }


        return new JsonResponse($datas, 201);

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


            return new JsonResponse(['value' => 'create_campagne', 'id' => $campagne->getId()], 200);


        }


        return new JsonResponse(['value' => 'bad json. You are a bad boy, bad json bad boy'], 500);

    }

    /**
     * @Route("/game/create_game", name="createGame", methods={"POST"})
     */
    public function createGame(Request $request)
    {
        $user = $this->getUser();

        $values = json_decode($request->getContent());

        if(isset($values->type_id,$values->campagne_id,$values->name,$values->date,$values->description->description,$values->description->maxJoueur,$values->description->categorieDeJoueur,$values->description->langue,$values->description->matureContent,$values->description->region)) {

            $game = new Game();
            $game->setName($values->name);
            $game->setCampagneId($this->getDoctrine()->getRepository(Campagne::class)->find($values->campagne_id));
            $game->setDate(new \DateTime($values->date));
            $game->setType($this->getDoctrine()->getRepository(Type::class)->find($values->type_id));
            $game->setDescription([
                'description' => $values->description->description,
                'categorieDeJoueur'=>$values->description->categorieDeJoueur,
                'langue'=>$values->description->langue,
                'matureContent'=>$values->description->matureContent,
                'region'=>$values->description->region,
                'maxJoueur'=>$values->description->maxJoueur]);
            $game->setProprietaire($user);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($game);
            $entityManager->flush();


            return new JsonResponse(['value' => 'create_game'], 200);


        }


        return new JsonResponse(['value' => 'bad json. You are a bad boy, bad json bad boy'], 500);
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