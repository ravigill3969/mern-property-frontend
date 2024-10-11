// import MobileNav from "./MobileNav";
import Nav from "./Nav";

function Header() {
  return (
    <div className="">
      <Nav />
      <span className="hidden md:block"></span>
      {/* <span className="md:hidden">
        <MobileNav />
      </span> */}
    </div>
  );
}

export default Header;
