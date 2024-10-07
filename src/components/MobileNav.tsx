import { Input } from "./ui/input";
import Logo from "./ui/Logo";

function MobileNav() {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <Input placeholder="search..." />
      </div>
    </div>
  );
}

export default MobileNav;
