import { Link } from "react-router-dom";
import s from "./BackLink.module.css";
import { RiArrowGoBackFill } from "react-icons/ri";

const BackLink = ({ to, children }) => {
  return (
    <Link className={s.button} to={to}>
      <RiArrowGoBackFill /> {children}
    </Link>
  );
};

export default BackLink;