import React from "react";
import { navigateToUrl } from "single-spa";

interface IpropsNavigate {
  path: string;
  children?: React.ReactNode;
}

export const Navigate: React.FC<IpropsNavigate> = ({
  path,
  children,
}) => {
  
function redirect(e: React.MouseEvent<HTMLButtonElement>) {
  navigateToUrl(e.currentTarget.name);
}

return <button name={path} onClick={redirect}>{children}</button>

}
