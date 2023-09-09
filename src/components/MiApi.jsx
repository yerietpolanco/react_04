import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function MiApi({ filter }) {
  // se configura el estado para las peliculas que llegan de la api
  const [movies, setMovies] = useState([]); 
  // se configura el estado para las peliculas filtradas
  const [filteredMovies, setFilteredMovies] = useState([]);

  // contraseña de la api de themoviedb
  const api = "19cc8a65858f916d51433bca91f3bcd4";

  // se utiliza useEffect con un array vacío para que se ejecute una sola vez
  useEffect(() => {
    // se llama a la función que hace el pedido a la api
    getMovies();
  }, []); 

  // llama a la api de peliculas y guarda los resultados
  const getMovies = () => {
    axios
      .get("https://api.themoviedb.org/3/discover/movie?api_key=" + api)
      .then((response) => {
        // se guarda el resultado de la api en el estado de las peliculas
        setMovies(response.data.results);
        // se guarda tambien en el estado de las peliculas filtradas
        setFilteredMovies(response.data.results.sort((a, b) => a.title.localeCompare(b.title)));
      });
  };

  // se utiliza useEffect para que detecte los cambios en el filtro del buscador para filtrar las peliculas
  useEffect(() => {
    if (filter) {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => a.title.localeCompare(b.title));

      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  }, [filter]);

  return (
    <>
      <div className="d-flex gap-3 flex-wrap justify-content-center movies-container">
        {filteredMovies &&
          filteredMovies.map((movie) => (
            <Card key={movie.id} className="movie-card">
              <Card.Img
                variant="top"
                src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.release_date}</Card.Text>
                <Button
                  variant="primary"
                  target="_blank"
                  href={"https://www.themoviedb.org/movie/" + movie.id}
                >
                  Ir al detalle
                </Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
}

// adult	false
// backdrop_path	"/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg"
// genre_ids	[ 28, 878, 27 ]
// 0	28
// 1	878
// 2	27
// id	615656
// original_language	"en"
// original_title	"Meg 2: The Trench"
// overview	"An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival."
// popularity	3949.944
// poster_path	"/drCySAAAvegq1vQRGRqPKN9f00w.jpg"
// release_date	"2023-08-02"
// title	"Meg 2: The Trench"
// video	false
// vote_average	7
// vote_count	1497
