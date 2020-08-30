<?php


namespace App\Controller;


use App\Entity\Campagne;
use App\Entity\Game;
use App\Entity\Image;
use App\Entity\Participant;
use App\Entity\Type;
use App\Entity\User;
use App\Type\ImageType;
use App\Utils\UploadedBase64File;
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

         $games = $this->getDoctrine()->getRepository(Participant::class)->calendar($user->getId());
         $datas =array();
         if(isset($games)) {
             foreach ($games as $gamen) {
                 $game = $gamen->getIdGame();
                 $data = array();
                 $description_data = $game->getDescription();
                 //id
                 $id = $game->getId();
                 $data['id'] = $id;
                 // avatarImg
                 $avatar = $game->getProprietaire()->getAvatar();
                 if (isset($avatar)) {
                     $avatar = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath() . '/images/' . $game->getProprietaire()->getAvatar()->getImageName();

                 } else {
                     $avatar = ' ' . $game->getProprietaire()->getUsername()[0] . ' ';
                 }
                 $data['avatarImg'] = $avatar;
                 //avatarAlt
                 $data['avatarAlt'] = ' ' . $game->getProprietaire()->getUsername()[0] . ' ';
                 //title
                 $data['title'] = $game->getName();
                 //mj
                 $data['mj'] = $game->getProprietaire()->getUsername();
                 //description
                 $data['description'] = $description_data["description"];
                 //maxJoueur
                 $data['maxJoueur'] = $description_data["maxJoueur"];
                 //nombreInscrit

                 $data['nombreInscrit'] = ((int)$this->getDoctrine()->getRepository(Participant::class)->getGameParticipant($id)) ;
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
         }

        return new JsonResponse($datas, 201);

    }


    /**
     * @Route("/game/get_Calendar_anon", name="getCalendarAnon", methods={"GET"})
     */
    public function getCalendarAnon(Request $request)
    {


        $games = $this->getDoctrine()->getRepository(Game::class)->calendaranon();
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

            $data['nombreInscrit'] = ((int) $this->getDoctrine()->getRepository(Participant::class)->getGameParticipant($id));
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
     * @Route("/game/get_game", name="getGame", methods={"POST"})
     */
    public function getGame(Request $request)
    {
        $values = json_decode($request->getContent());
        if(isset($values->game_id)) {

            $game = $this->getDoctrine()->getRepository(Game::class)->find($values->game_id);
            $data = array();
            $description_data = $game->getDescription();
            //id
            $id = $game->getId();
            $data['game']['id'] = $id;
            // avatarImg
            $avatar = $game->getProprietaire()->getAvatar();
            if (isset($avatar)) {
                $avatar = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath() . '/images/' . $game->getProprietaire()->getAvatar()->getImageName();

            } else {
                $avatar = ' ' . $game->getProprietaire()->getUsername()[0] . ' ';
            }

            $data['OtherGameInfo']['avatarImg'] = $avatar;
            //avatarAlt
            $data['OtherGameInfo']['avatarAlt'] = ' ' . $game->getProprietaire()->getUsername()[0] . ' ';
            //campagne_id
            $data['game']['campagne_id'] = $game->getCampagneId()->getId();
            //gameImg
            $gameImg = $game->getImage();
            if (isset($gameImg)) {
                $gameImg = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath() . '/images/' . $game->getImage()->getImageName();

            } else {
                $gameImg = ' ';
            }
            $data['OtherGameInfo']['gameImg'] = $gameImg;
            //title
            $data['game']['title'] = $game->getName();
            //mj
            $data['OtherGameInfo']['mj'] = $game->getProprietaire()->getUsername();
            //description
            $data['game']['description']['description'] = $description_data["description"];
            //maxJoueur
            $data['game']['description']['maxJoueur'] = $description_data["maxJoueur"];
            //nombreInscrit

            $data['OtherGameInfo']['nombreInscrit'] = ((int)$this->getDoctrine()->getRepository(Participant::class)->getGameParticipant($id)) + 1;
            //categorieDeJoueur
            $data['game']['description']['categorieDeJoueur'] = $description_data["categorieDeJoueur"];
            //univers
            $data['game']['type_id'] = $game->getType()->getId();
            //langue
            $data['game']['description']['langue'] = $description_data["langue"];
            //matureContent
            $data['game']['description']['matureContent'] = $description_data["matureContent"];
            //region
            $data['game']['description']['region'] = $description_data["region"];
            //date
            $data['game']['date'] = $game->getDate();


            return new JsonResponse($data, 201);
        }
        return new JsonResponse(['value' => 'bad json. You are a bad boy, bad json bad boy'], 500);

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
     * @Route("/game/get_Participants", name="getParticipants", methods={"Post"})
     */
    public function getParticipants(Request $request)
    {

        $values = json_decode($request->getContent());
        if(isset($values->id)) {
            $participants = $this->getDoctrine()->getRepository(Participant::class)->getParticipantId($values->id);
            $datas = array();
            foreach ($participants as $participant) {
                $data = array();

                $avatar = $participant->getIdUser()->getAvatar();
                if (isset($avatar)) {
                    $avatar = $request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath() . '/images/' . $participant->getIdUser()->getAvatar()->getImageName();

                } else {
                    $avatar = ' ' . $participant->getIdUser()->getUsername()[0] . ' ';
                }
                $data['avatarImg'] = $avatar;
                $data['avatarAlt'] = ' ' . $participant->getIdUser()->getUsername()[0] . ' ';

                $data['name'] = $participant->getIdUser()->getUsername();
                $datas[] = $data;
            }


            return new JsonResponse($datas, 201);
        }

        return new JsonResponse(['value' => 'bad json. You are a bad boy, bad json bad boy'], 500);

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

        if(isset($values->type_id,$values->campagne_id,$values->title,$values->date->date,$values->description->description,$values->description->maxJoueur,$values->description->categorieDeJoueur,$values->description->langue,$values->description->matureContent,$values->description->region)) {

            $game = new Game();
            $game->setName($values->title);
            $game->setCampagneId($this->getDoctrine()->getRepository(Campagne::class)->find($values->campagne_id));
            $game->setDate(new \DateTime($values->date->date));
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
     * @Route("/game/modify_game", name="modifyGame", methods={"POST"})
     */
    public function modifyGame(Request $request)
    {
        $user = $this->getUser();

        $values = json_decode($request->getContent());

        if(isset($values->id,$values->type_id,$values->campagne_id,$values->name,$values->date->date,$values->description->description,$values->description->maxJoueur,$values->description->categorieDeJoueur,$values->description->langue,$values->description->matureContent,$values->description->region)) {

            $game = $this->getDoctrine()->getRepository(Game::class)->find($values->id);
            $game->setName($values->name);
            $game->setCampagneId($this->getDoctrine()->getRepository(Campagne::class)->find($values->campagne_id));
            $game->setDate(new \DateTime($values->date->date));
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


            return new JsonResponse(['value' => 'modify_game'], 200);


        }


        return new JsonResponse(['value' => 'bad json. You are a bad boy, bad json bad boy'], 500);
    }


    /**
     * @Route("/game/add_img", name="addImg", methods={"POST"})
     */
    public function addImg(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if($data === null
            || !is_array($data)
            || count($data) !== 2
            || !isset($data['image'], $data['game_id'])
            || !isset($data['image']['name'],$data['game_id'], $data['image']['value'])
        ) {
            return new JsonResponse(['value' =>'bad1'], 200);
        }

        $avatarFile = new UploadedBase64File($data['image']['value'], $data['image']['name']);
        $game = $this->getDoctrine()->getRepository(Game::class)->find($data['game_id']);
        $image = new Image();
        $form = $this->createForm(ImageType::class, $image, ['csrf_protection' => false]);
        $form->submit(['imageFile' => $avatarFile]);

        if(!($form->isSubmitted() && $form->isValid())) {
            return new JsonResponse(['valid' =>$form->isValid(), 'submit' =>$form->isSubmitted()], 200);
        }
        $game->setImage($image);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($image);
        $entityManager->persist($game);
        $entityManager->flush();


        // Persist, do thing you want to do and send json response
        return new JsonResponse(['value' =>'good'], 200);

    }


    /**
     * @Route("/game/participe", name="participe", methods={"POST"})
     */
    public function participe(Request $request)
    {
        $user = $this->getUser();
        $values = json_decode($request->getContent());
        if(isset($values->id)) {
            $participant = new Participant();
            $participant->setStatus(1);
            $participant->setIdGame($this->getDoctrine()->getRepository(Game::class)->find($values->id));
            $participant->setIdUser($user);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($participant);
            $entityManager->flush();


            return new JsonResponse(['value' =>'participate'], 200);
        }


        return new JsonResponse(['value' => 'bad json. You are a bad boy, bad json bad boy'], 500);
    }

    /**
     * @Route("/game/no_participe", name="noParticipe", methods={"POST"})
     */
    public function noParticipe(Request $request)
    {
        $user = $this->getUser();
        $values = json_decode($request->getContent());
        if(isset($values->id)) {

            $participants = $this->getDoctrine()->getRepository(Participant::class)->getParticipateByGameAndUser($values->id, $user->getId());

            foreach ($participants as $participant)
            {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($participant);
                $entityManager->flush();
            }

            return new JsonResponse(['value' =>'delete_post'], 200);
        }


        return new JsonResponse(['value' => 'bad json. You are a bad boy, bad json bad boy'], 500);
    }



}