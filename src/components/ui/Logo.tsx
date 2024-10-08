import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"} className="text-2xl font-bold bg-gradient-to-r from-green-600 via-black to-green-400 text-transparent bg-clip-text">
      Togthr<span className="">2</span>sale
    </Link>
  );
}

export default Logo;
