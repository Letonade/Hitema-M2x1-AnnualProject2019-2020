<?php

namespace App\Repository;

use App\Entity\Game;
use App\Entity\Participant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Game|null find($id, $lockMode = null, $lockVersion = null)
 * @method Game|null findOneBy(array $criteria, array $orderBy = null)
 * @method Game[]    findAll()
 * @method Game[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GameRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Game::class);
    }

    // /**
    //  * @return Game[] Returns an array of Game objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Game
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
/*
    public function calendar($user_id)
    {
        $qb = $this->createQueryBuilder('g');
        $newDate = new \DateTime('now');
        $qb->from('participant', 'p')
            ->innerJoin('p.id_game','g')
            ->where(
                $qb->expr()->orX(
                    $qb->expr()->orX(
                        $qb->expr()->gte('g.date','date'),
                        $qb->expr()->andX(
                            $qb->expr()->eq('p.id_user','user_id'),
                            $qb->expr()->lt('g.date','date2')))),
                $qb->expr()->eq('g.proprietaire_id','user_id2')
            )
            ->setParameter('date', $newDate)
            ->setParameter('date2', $newDate)
            ->setParameter('user_id', $user_id)
            ->setParameter('user_id2', $user_id);
        return  $qb->getQuery()->getResult();


    }*/
}
