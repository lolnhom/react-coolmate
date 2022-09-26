import { menuItems } from "./menuItem";
import MenuItem from "./MenuItem";
import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="menus">
          {" "}
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
