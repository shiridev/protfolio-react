import { useSelector } from "react-redux";
import "./techCard.scss";

export const TechCard = (props) => {
  const theme = useSelector((state) => state.theme.defaultTheme);

  return (
    <div
      className="techCardContainer p-3"
      style={{ border: `1px solid ${theme.lightGrey}`, backgroundColor: theme.type === "light" ? "white" : theme.lightGrey }}
    >
      {props.icon}
      <span className="techName" style={{ color: props.color }}>
        {props.name}
      </span>
    </div>
  );
};
