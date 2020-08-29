<?php

namespace App\Repository;

use App\Entity\Participant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Participant|null find($id, $lockMode = null, $lockVersion = null)
 * @method Participant|null findOneBy(array $criteria, array $orderBy = null)
 * @method Participant[]    findAll()
 * @method Participant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ParticipantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Participant::class);
    }

    // /**
    //  * @return Participant[] Returns an array of Participant objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Participant
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function getGameParticipant($id)
    {
        $qb = $this->createQueryBuilder('p');
        $qb->select('Count (p.id_user) as NombreDInscrit')->where('p.id_game = :id')->setParameter('id', $id);
        return $qb->getQuery()->getResult()[0]['NombreDInscrit'];
    }

    public function getGameParticipation($id_game,$id_user, $date)
    {
        $qb = $this->createQueryBuilder('p');
        $qb->where('p.id_game = :id_game')->andWhere('p.id_user = :id_user')->setParameter('id_game', $id_game)->setParameter('id_user', $id_user);
        $result =  $qb->getQuery()->getOneOrNullResult();
        $data = array();
        if(isset($result)) {
            if ($result->getStatus() == 1) {
                $data['inscrit'] = 1;
            } else {
                $data['inscrit'] = 0;
            }

        }
        else{

            $data['inscrit'] = 0;
        }
        $newDate = new \DateTime('now');
        if($date>$newDate)
        {
            $data['passés'] = 0;
        }
        else
        {
            $data['passés'] = 1;
        }

        return $data;
    }


    public function getParticipantId($id_game)
    {
        $qb = $this->createQueryBuilder('p');
        $qb->where('p.id_game = :id_game')->setParameter('id_game', $id_game);
        $result =  $qb->getQuery()->getResult();


        return $result;
    }
}
