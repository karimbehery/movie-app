const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="search">
      <section className="flex bg-[#0F0D23] w-2xs sm:text-6xl sm:w-xl rounded-lg items-center p-4 gap-2 m-10">
        <img src="/search.svg" alt="search icon" className="cursor-pointer" />
        <input
          type="text"
          placeholder="Search throuh 300+ movies online"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full outline-0 text-xs sm:text-2xl "
        />
      </section>
    </section>
  );
};

export default Search;
