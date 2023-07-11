import React from "react";
import Button from "../Button";
import "./Main.css";

export default function Home() {
  const homeText = {
    maintext: "We are building the future banking just for you.",
    secondarytext:
      "Transfer business money easily through finance app without any hassle. This app can help you control",
  };

  return (
    <div className="home">
      <section className="l-section">
        <h3>{homeText.maintext}</h3>
        <h4>{homeText.secondarytext}</h4>
        <Button Children="Check our features" className={"navDownloadButton"} />
      </section>

      <section className="r-section">
        <img src="./images/home.png" alt="home" />
        <img src="./images/home.png" alt="home" />
        {/* <img src="./images/atm.png" alt="home" /> */}
        {/* <img className="img-2" src="./images/feature.png" alt="home" /> */}
      </section>
    </div>
  );
}
