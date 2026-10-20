const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="search">
      <section className="flex bg-[#0F0D23] lg:w-3xl md:w-2xl text-5xl sm:w-xl rounded-lg items-center p-4 gap-2 my-10">
        <img src="./search.svg" alt="search icon" className="cursor-pointer" />
        <input
          type="text"
          placeholder="Search throuhh 300+ movies online"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#0F0D23] border-0 text-xl outline-0"
        />
      </section>
    </section>
  );
};

export default Search;
