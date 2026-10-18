import rating from "../assets/Rating.png";

const Movie = ({ movie }) => {
  return (
    <article
      className="movie bg-[#0F0D23] w-2xs p-4 flex flex-col items-center justify-evenly text-xl rounded-2xl"
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className=" m-4 rounded-2xl w-3xs h-60"
      />
      <p className="m-2">{movie.Title}</p>
      <p>
        <img src={rating} alt="rating" className="inline" /> 4.6 &bull;Action
        &bull;Movie
      </p>
    </article>
  );
};

export default Movie;
