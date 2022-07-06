import { useSelector } from "react-redux";
import "./contactLink.scss";

export const ContactLink = (props) => {
  const theme = useSelector((state) => state.theme.defaultTheme);

  return (
    <a
      href={props.href}
      className="contactCardContainer p-3"
      style={{ border: `1px solid ${theme.lightGrey}`, backgroundColor: theme.type === "light" ? "white" : theme.lightGrey }}
    >
      {props.icon}
      <span className="contactWayName" style={{ color: props.color }}>
        {props.name}
      </span>
    </a>
  );
};
