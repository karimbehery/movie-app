import logo from "../assets/logo.png";
import hero from "../assets/hero-img.png";
import Search from "./Search";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="flex flex-col items-center w-full mx-auto text-center">
      <img src={logo} alt="logo" className="logo w-30 my-10" />
      <img src={hero} alt="hero" className="hero" />
      <h1 className="text-3xl w-2xs sm:text-6xl sm:w-3xl">
        Find <span className="text-[#B9A3F4] font-bold">Movies</span> You Will
        Love Without The Hustle
      </h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
  );
};

export default Header;
