<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;

class MoviesController extends AbstractController
{
    #[Route('/api/movies')]
    public function list(Connection $db, Request $request): Response
    {
        // inilializzo il genere id
        $genre_id = $request->query->get('genre_id');

        if (!empty($genre_id)) {

            // se è settato il genere id mostra solo i film di quel genere
            $rows = $db->createQueryBuilder()
                ->select("movies.*")
                ->from("movies")
                ->join("movies", "movies_genres", "mg", "movies.id = mg.movie_id")
                ->where("mg.genre_id = :genre_id")
                ->setParameters(["genre_id" => $genre_id])
                ->executeQuery()
                ->fetchAllAssociative();

        } else {

            // se non è settato nessun genere mostra tutti i film
            $rows = $db->createQueryBuilder()
            ->select("m.*")
            ->from("movies", "m")
            ->orderBy("m.release_date", "DESC")
            ->setMaxResults(50)
            ->executeQuery()
            ->fetchAllAssociative();


        }

       
        return $this->json([
            "movies" => $rows
        ]);
    }
}
