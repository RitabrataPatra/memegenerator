import React from "react";
import { MainNav } from "./MainNav";
import { Search } from "./Search";
import { UserNav } from "./UserNav";
import { ModeToggle } from "./Theme";

const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <UserNav />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ModeToggle/>
        </div>
      </div>
    </div>
  );
};

export default Header;
