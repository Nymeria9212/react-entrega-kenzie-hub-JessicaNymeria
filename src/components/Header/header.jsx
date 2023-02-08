import { Children } from "react";
import logoKenzie from "../../assets/Logo.svg";
import { HeaderStyle } from "./headerStyle";

export function Header({ Children }) {
  return (
    <HeaderStyle>
      <img src={logoKenzie} alt="" />
      {Children}
    </HeaderStyle>
  );
}
