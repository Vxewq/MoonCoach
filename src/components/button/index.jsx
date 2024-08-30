import { button } from "@material-tailwind/react";
import "./style.scss";
import { Children } from "react";

export default function MyButton({ children }) {
  return (
    <>
      <button className="butt">{children} <i class="fa-solid fa-arrow-right"></i></button>
    </>
  );
}
