import React, { useEffect, useState } from 'react';
import { Button, Rating, Spinner } from 'flowbite-react';


// torna l'elenco dei film dall'api e li filtra per rating e recenti
const Index = props => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderBy, setOrderBy] = useState('recent'); // default 'recent'
  const [genres, setGenres] = useState([]); // tutti i generi
  const [selectedGenre, setSelectedGenre] = useState(''); //valore del genere per filtro categoria


  const fetchMovies = () => {
    setLoading(true);

    const handleSubmit = (event) => {
      event.preventDefault();
    
      return fetch("/api/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ genre_id: selectedGenre }),
      })
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.movies);
        });
    };
    

    return fetch('/api/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies); // set dei movie
        setLoading(false);
      });


  };

  const fetchGenres = () => {
    setLoading(true);

    return fetch('/api/genres')
      .then(response => response.json())
      .then(data => {
        setGenres(data.genres); // set dei generi
        console.log(data.genres);
        setLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch(`/api/movies?genre_id=${selectedGenre}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies);
      });
  };
  
  
  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, []);


  // funzione di ordinamento
  const sortMovies = (a, b) => {
    if (orderBy === 'recent') {
      // ordina per data di uscita più recente
      return new Date(b.release_date) - new Date(a.release_date);
    } else if (orderBy === 'rating') {
      // ordina per valutazione, più alta prima
      return b.rating - a.rating;
    }
  };


  // ordina i film in base all'ordine corrente
  const sortedMovies = [...movies].sort(sortMovies);

  return (
    <Layout>
      <Heading />

      <div className="flex justify-center mb-8">
        <Button
          onClick={() => setOrderBy('recent')}
          variant={orderBy === 'recent' ? 'primary' : 'outline-primary'}
          className="mx-2"
        >
          Più recenti
        </Button>

        <Button
          onClick={() => setOrderBy('rating')}
          variant={orderBy === 'rating' ? 'primary' : 'outline-primary'}
          className="mx-2"
        >
          Per rating
        </Button>

        <div className='flex flex-wrap justify-center'>

          <form onSubmit={handleSubmit}>
            <select
              name="genre_id"
              value={selectedGenre}
              onChange={(event) => setSelectedGenre(event.target.value)}
            >
              <option value="">Tutti i generi</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.value}
                </option>
              ))}
            </select>
            <button
            type="submit"
            className={`ml-2 px-4 py-2 rounded-md text-white ${
              selectedGenre ? 'bg-green-500' : 'bg-gray-400'
            }`}
            disabled={!selectedGenre}
          >
            Filtra per genere
          </button>
          </form>
       
        </div>

      </div>

      <MovieList loading={loading}>
        {sortedMovies.map((item, key) => (
          <MovieItem key={key} {...item} />
        ))}
      </MovieList>
    </Layout>
  );
};


// torna alla view il layout per tutta l'applicazione
const Layout = props => {
    return (
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            {props.children}
          </div>
        </section>
    );
};


// torna alla view l'header con titolo e paragrafo
const Heading = props => {
    return (
        <div className="mx-auto max-w-screen-sm text-center ">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Movie Collection
          </h1>

          <p className="font-light text-gray-500 lg:mb-8 sm:text-xl dark:text-gray-400">
            Explore the whole collection of movies
          </p>
        </div>
    );
};


// nel caso in cui la pagina dovesse perdere del tempo a caricare mostra uno spinner
const MovieList = props => {
    if (props.loading) {
        return (
            <div className="text-center">
              <Spinner size="xl" />
            </div>
        );
    }

    return (
        <div className="grid gap-4 md:gap-y-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3">
          {props.children}
        </div>
    );
};


// torna alla view le card contenente i dati dinamici
const MovieItem = props => {
    return (
        <div className="flex flex-col w-full h-full rounded-lg shadow-md lg:max-w-sm">
          <div className="grow">
            <img
              className="object-cover w-full h-60 md:h-80"
              src={props.image}
              alt={props.title}
              loading="lazy"
            />
          </div>

          <div className="grow flex flex-col h-full p-3">
            <div className="grow mb-3 last:mb-0">
              {props.year || props.rating
                ? <div className="flex justify-between align-middle text-gray-900 text-xs font-medium mb-2">
                    <span>{props.year}</span>

                    {props.rating
                      ? <Rating>
                          <Rating.Star />

                          <span className="ml-0.5">
                            {props.rating}
                          </span>
                        </Rating>
                      : null
                    }
                  </div>
                : null
              }

              <h3 className="text-gray-900 text-lg leading-tight font-semibold mb-1">
                {props.title}
              </h3>

              <p className="text-gray-600 text-sm leading-normal mb-4 last:mb-0">
                {props.plot.substr(0, 80)}...
              </p>
            </div>

            {props.wikipedia_url
              ? <Button
                  color="light"
                  size="xs"
                  className="w-full"
                  onClick={() => window.open(props.wikipedia_url, '_blank')}
                >
                  More
                </Button>
              : null
            }
          </div>
        </div>
    );
};

export default Index;
