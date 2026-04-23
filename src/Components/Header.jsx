import { Link } from "react-router";
import logoDark from "../assets/logoblack.png";
import logoWhite from "../assets/logo.png";

export default function Header({ isHome }) {
  return (
    <header
      className={`
        w-full z-50 transition-all duration-300
        ${isHome ? "absolute top-0 left-0 bg-transparent" : "bg-white shadow"}
      `}
    >
      <div className=" flex justify-between items-center py-8.5 px-10">
        <Link to="/" className="h-5.5 w-45">
          <img
            src={isHome ? logoWhite : logoDark}
            alt="tour guide logo"
            className="h-full w-full"
          />
        </Link>

        <nav className="flex gap-7.5 text-[15px] leading-5.5 font-semibold items-center ">
          <Link to="/" className={isHome ? "text-white" : "text-dark-80"}>
            Home 
          </Link>
          <Link to="/about" className={isHome ? "text-white" : "text-dark-80"}>
            About Us
          </Link>
          <Link to="/packages" className={isHome ? "text-white" : "text-dark-80"}>
            Our Packages
          </Link>
          <Link to="/populardestinations" className={isHome ? "text-white" : "text-dark-80"}>
            Popular Destinations
          </Link>
          <Link to="/help" className={isHome ? "text-white" : "text-dark-80"}>
            Help
          </Link>
          <div>
            <button className="py-3.5 px-10.75 bg-amber-300 font-mulish font-extrabold text-[16px] rounded-[3px]">
              Sign in
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}