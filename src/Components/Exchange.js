import React from "react";
import Button from "./Button";

function Exchange({
  h3,
  message,
  imageSrc,
  style,
  receiveOrRewuestStyle,
  exchaingeImg,
}) {
  return (
    <section className="exchange" style={style}>
      <div className="exchange-img" style={exchaingeImg}>
        <img style={receiveOrRewuestStyle} src={imageSrc} alt="exchange" />
      </div>

      <div className="exchange-text">
        <h3>{h3}</h3>
        <p>{message}</p>
        <Button Children="Explore now" />
      </div>
    </section>
  );
}

export default Exchange;
