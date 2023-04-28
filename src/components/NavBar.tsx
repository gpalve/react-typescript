import React from "react";

interface Props {
  cartCount: number;
}
const NavBar = ({ cartCount }: Props) => {
  return (
    <div>
      NavBar Item Count <span className="text-danger">{cartCount}</span>
    </div>
  );
};

export default NavBar;
