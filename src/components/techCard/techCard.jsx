import React from "react";
import "./techCard.scss";
import { useSelector } from "react-redux";

export const TechCard = (props) => {
  const theme = useSelector((state) => state.theme.defaultTheme);

  return (
    <div className="techCardContainer p-3" style={{ border: `1px solid ${theme.lightGrey}` }}>
      {props.icon}
      <span className="techName" style={{ color: props.color }}>
        {props.name}
      </span>
    </div>
  );
};
