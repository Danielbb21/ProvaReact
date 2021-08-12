import React from "react";
import { VscArrowRight } from "react-icons/vsc";
import { NavbarWrapper, NavLine, NavLinks, NavLogo, NavOptions } from "./style";

const Navbar: React.FC = () => {
  return (
    <NavLine>
      <NavbarWrapper>
        <NavLogo>TGL</NavLogo>
        <NavOptions>
          <NavLinks to="/">Account</NavLinks>
          <NavLinks to="/"> <span>Sair</span>
          <VscArrowRight/>
          </NavLinks>
        </NavOptions>
      </NavbarWrapper>
    </NavLine>
  );
};

export default Navbar;
