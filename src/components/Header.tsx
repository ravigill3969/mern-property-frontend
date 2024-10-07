import MobileNav from "./MobileNav";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <Nav />
      <span className="hidden md:block"></span>
      <span className="md:hidden">
        <MobileNav />
      </span>
    </>
  );
}

export default Header;
