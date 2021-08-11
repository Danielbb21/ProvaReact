import React from "react";
import { LogoCircle, LogoTitle, LogoWrapper, LotoWord } from "./style";

const Logo: React.FC = () => {
  return (
    <LogoWrapper>
      <LogoTitle>
        <h1>The Greatest APP</h1>
      </LogoTitle>
      <LogoCircle>
        <span>for</span>
      </LogoCircle>
      <LotoWord>
        <h1>Lottery</h1>
      </LotoWord>
    </LogoWrapper>
  );
};

export default Logo;
