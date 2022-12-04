import React, { useEffect, useState } from "react";
import "./Home.css";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const Home = () => {
  const [moviesPublished, setMoviesPublished] = useState([]);

  //Getting movies from the API
  useEffect(() => {
    fetch(`http://localhost:8085/api/v1/movies?page=1&limit=10`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMoviesPublished(data.movies);
      })
      .catch((e) => alert(e.message));
  }, []);

  return (
    <div>
      <div className="upcoming-movies-header">
        <span>Upcoming Movies</span>
      </div>

      {/* Displaying movies in GRID */}
      <GridList cols={5} className="">
        {moviesPublished.map((movie) => (
          <GridListTile key={movie.id}>
            <img
              src={movie.poster_url}
              className="movie-poster"
              alt={movie.title}
            />
            <GridListTileBar title={movie.title} />
          </GridListTile>
        ))}
      </GridList>     
    </div>
  );
};

export default Home;
