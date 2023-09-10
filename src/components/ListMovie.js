import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Card, Button } from "react-bootstrap";
import "./Card.css";

function ListMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/movies")
      .then((response) => response.json())
      .then((movies) => setMovies(movies));
  },[]);

  return (
    <>
      
        {movies.map((movie,index) => (
      

          <div className="card-wrapper col-md-3 col-sm-6" key={index}>
             <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={movie.Poster} />

              <Card.Footer>
                <Card.Title className="card-title">{movie.Title}</Card.Title>
              </Card.Footer>
             
            </Card>
          </div>
         
        ))}
     
    </>
  );
}

export default ListMovie;
