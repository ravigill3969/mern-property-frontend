import { Pencil, PlusIcon, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Logo from "./ui/Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/zustand/store";
import { logoutHandler } from "@/api/userApi";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchContext } from "@/context/SearchContext";
import { useState } from "react";

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { destination, saveSearchValues } = useSearchContext();

  const [value, setValue] = useState("");

  saveSearchValues(value);

  const queryClient = useQueryClient();

  const isLoggedIn = useAuth().isLoggedIn;

  const logOutHandler = async () => {
    await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
    logoutHandler();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center bg-slate-50 rounded-lg p-5">
      <div>
        <Logo />
      </div>

      <div
        className={` flex items-center ${
          location.pathname === "/login" || location.pathname === "/register"
            ? "hidden"
            : ""
        }`}
      >
        <Input
          placeholder="Search with country, city, state ..."
          className="pl-4 pr-10 border-black border-2 focus:border-green-600 focus:ring-2"
          value={destination}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <span className="bg-gray-200 shadow-2xl p-2 rounded-lg">
          <Search
            onClick={() => {
              navigate("/");
            }}
          />
        </span>
      </div>

      <div>
        <ul className="flex gap-5 items-center">
          <Link to={"/add-listing"}>
            <Button className="bg-green-500 hover:bg-green-600">
              Add <PlusIcon size={18} />
            </Button>
          </Link>
          <Link to={"/my-listing"}>
            <Button className="bg-green-500 hover:bg-green-600">
              Listings <Pencil size={18} className="ml-2 " />{" "}
            </Button>
          </Link>
          {isLoggedIn ? (
            <Button
              className="bg-blue-500 hover:bg-blue-600"
              onClick={logOutHandler}
            >
              Log Out
            </Button>
          ) : (
            <Link to="/login">
              <Button className="bg-blue-500 hover:bg-blue-600">Log In</Button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
