const Movie = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <article className="movie bg-[#0F0D23] w-2xs p-4 flex flex-col items-center justify-evenly text-xl rounded-2xl">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "./nomovie.png"
        }
        alt={title}
        className=" m-4 rounded-2xl w-lg h-60"
      />
      <p className="m-2">{title}</p>
      <article className="flex w-full gap-2">
        <img src="./Rating.png" alt="rating" className="" />
        <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
        <p className="text-gray-500 font-bold">&bull; {original_language}</p>
        <p className="text-gray-500 font-bold">
          &bull; {release_date ? release_date.split("-")[0] : "N/A"}
        </p>
      </article>
    </article>
  );
};

export default Movie;
