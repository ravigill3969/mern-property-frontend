import { Pencil, PlusIcon, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Logo from "./ui/Logo";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center ">
      <div>
        <Logo />
      </div>

      <div
        className={`relative flex items-center ${
          location.pathname === "/login" || location.pathname === "/register"
            ? "hidden"
            : ""
        }`}
      >
        <Input
          placeholder="Search with city name ..."
          className="pl-4 pr-10  focus:border-green-600 focus:ring-2 "
        />
        <span className="absolute right-2 text-gray-400">
          <Search />
        </span>
      </div>

      <div>
        <ul className="flex gap-5 items-center">
          <Link to={"/add-listing"}>
            <Button className="bg-green-500 hover:bg-green-600">
              Add <PlusIcon size={18} />
            </Button>
          </Link>
          <Button className="bg-green-500 hover:bg-green-600">
            Listings <Pencil size={18} className="ml-2 " />{" "}
          </Button>
          <Link to={"/login"}>
            <Button className="bg-blue-500 hover:bg-blue-600">Log in</Button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
