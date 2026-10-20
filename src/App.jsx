import "./App.css";

import { useState, useEffect } from "react";
import { useDebounce } from "react-use";

import Header from "./components/Header";
import Movie from "./components/Movie";
import Spinner from "./components/Spinner";
import { fetchMovies } from "./services/api";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  useEffect(() => {
    const getMovies = async (query = "") => {
      setIsLoading(true);
      try {
        const result = await fetchMovies(query);

        setMovieList(result);
      } catch (error) {
        console.error(`Error fetching movies: ${error}`);
        setErrorMessage("Error fetching movies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    getMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="w-full">
        <h2 className="my-10 text-5xl">All Movies</h2>
        <section className="all-movies">
          {movieList.length < 1 ? (
            <p className="text-red-500 text-6xl">No Movies Found</p>
          ) : isLoading ? (
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
