<?php

namespace App\Repository;

use App\Entity\Post;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Post|null find($id, $lockMode = null, $lockVersion = null)
 * @method Post|null findOneBy(array $criteria, array $orderBy = null)
 * @method Post[]    findAll()
 * @method Post[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Post::class);
    }

    // /**
    //  * @return Post[] Returns an array of Post objects
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
    public function findOneBySomeField($value): ?Post
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function slider()
    {
        $qb = $this->createQueryBuilder('p');
        $newDate = new \DateTime('now');
        $qb->where('p.sponsored = 1')
           ->andWhere($qb->expr()->lt('p.date',':now'))
           ->setParameter('now', $newDate)
           ->setMaxResults(3);
        return $qb->getQuery()->getResult();

    }

    public function posts_spo()
    {
        $qb = $this->createQueryBuilder('p');
        $newDate = new \DateTime('now');
        $qb->where('p.sponsored = 1')
            ->andWhere($qb->expr()->lt('p.date',':now'))
            ->setParameter('now', $newDate);
        return $qb->getQuery()->getResult();

    }

    public function posts()
    {
        $qb = $this->createQueryBuilder('p');
        $newDate = new \DateTime('now');
        $qb->where($qb->expr()->lt('p.date',':now'))
            ->setParameter('now', $newDate);
        return $qb->getQuery()->getResult();

    }

}
