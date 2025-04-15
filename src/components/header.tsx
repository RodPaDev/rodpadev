import { HeaderNav } from "./header-nav";
import { ModeToggle } from "./mode-toggle";

function Header() {
  return (
    <header className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex justify-center w-full mb-3 md:hidden">
        <ModeToggle />
      </div>
      <HeaderNav />
      <div className="hidden md:block">
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
