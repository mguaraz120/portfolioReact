import React from "react";

import CardInfo from "./CardInfo";
function Card(props) {
  return (
    <div className="d-inline-block g-card" onClick={(e) => props.click(props.project)}>
      <img
        className="g-card-image"
        src={props.project.image}
        alt={props.project.image}
      />
      {props.project.selected && (
        <CardInfo
          name={props.project.name}
          description={props.project.description}
          link={props.project.link}
        />
      )}
    </div>
  );
}

export default Card;
