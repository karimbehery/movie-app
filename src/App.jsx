import "./App.css";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import Movie from "./Components/Movie";
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
    const fetchMovies = async (query = '') => {
      setIsLoading(true);
      try {
        const endpoint = query
          ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
          : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

        const response = await fetch(endpoint, API_OPTIONS);

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();
        console.log(data.results)

        setMovieList(data.results || []);
      } catch (error) {
        console.error(`Error fetching movies: ${error}`);
        setErrorMessage("Error fetching movies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="p-20 w-full">
        <h2 className="text-5xl">Popular</h2>

        <h2 className="my-10 text-5xl">All Movies</h2>
        <section className="all-movies">
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            errorMessage
          ) : (
            <ul className="flex flex-wrap gap-3 my-4 mx-auto justify-evenly">
              {movieList.map((movie) => (
                <Movie key={movie.id} movie={movie} />
              ))}
                </ul>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
