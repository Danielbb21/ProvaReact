import React from "react";
import { VscArrowRight } from "react-icons/vsc";
import { useAppDispatch } from "../../store/store-hooks";
import { logOut } from "../../store/UserSlice";
import {
  NavbarWrapper,
  NavHome,
  NavLine,
  NavLinks,
  NavLogo,
  NavLogoWrapper,
  NavOptions,
} from "./style";

interface NavProps {
  hasHome: boolean;
  id: string;
  hasNav?: boolean;
}

const Navbar: React.FC<NavProps> = (props) => {
  const dispatch = useAppDispatch();
  const removeUserTokenHandler = () => {
    console.log("aquiiii");
    dispatch(logOut());
    return;
  };
  return (
    <NavLine>
      <NavbarWrapper>
        <NavLogoWrapper>
          <NavLogo>
            TGL<div></div>
          </NavLogo>
          {props.hasHome && <NavHome to={`/my-bets/${props.id}`}>Home</NavHome>}
        </NavLogoWrapper>
        <NavOptions>
          {!props.hasNav && (
            <NavLinks to={`/account/${props.id}`}>Account</NavLinks>
          )}
          <NavLinks to="/" onClick={removeUserTokenHandler}>
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
