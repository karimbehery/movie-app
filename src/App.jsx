import "./App.css";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
// import Movie from "./Components/Movie";
import Spinner from "./Components/Spinner";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

        const response = await fetch(endpoint, API_OPTIONS);

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        setMovieList(data.results || []);
      } catch (error) {
        console.error(`Error fetching movies: ${error}`);
        setErrorMessage("Error fetching movies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="p-20 w-full">
        <h2 className="text-5xl">Popular</h2>
        <section className="movies flex flex-wrap gap-3 my-4 mx-auto justify-evenly">
          {/* {movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))} */}
        </section>

        <section className="all-movies">
          <h2 className="my-10 text-5xl">All Movies</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
              errorMessage 
          ) : (
            <ul>
              {movieList.map((movie) => (
                <p className="text-white" key={movie.id}>
                  {movie.title}
                </p>
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
