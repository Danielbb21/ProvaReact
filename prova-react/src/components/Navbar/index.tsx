import React from "react";
import { VscArrowRight } from "react-icons/vsc";
import {
  NavbarWrapper,
  NavHome,
  NavLine,
  NavLinks,
  NavLogo,
  NavLogoWrapper,
  NavOptions,
} from "./style";

interface NavProps{
  hasHome: boolean;
  id: string;
  hasNav?: boolean;
}

const Navbar: React.FC<NavProps>  = (props) => {
  
  return (
    <NavLine>
      <NavbarWrapper>
        <NavLogoWrapper>
          <NavLogo>TGL</NavLogo>
          {props.hasHome && <NavHome to = {`/my-bets/${props.id}`}>Home</NavHome>}
        </NavLogoWrapper>
        <NavOptions>
          {!props.hasNav &&  <NavLinks to={`/account/${props.id}`}>Account</NavLinks>}
          <NavLinks to="/">
            {" "}
            <span>Sair</span>
            <VscArrowRight />
          </NavLinks>
        </NavOptions>
      </NavbarWrapper>
    </NavLine>
  );
};

export default Navbar;
