import React, { useRef } from "react";

import Toastmasters from "./components/Toastmasters";
import Countdown from "./components/Countdown";
import Program from "./components/Program";
import OmBrudeparet from "./components/OmBrudeparet";
import Collage from "./components/Collage";
import Information from "./components/Information";
import Header from "./components/Header";
import Gifts from "./components/Gifts";

import { FirebaseAuthProvider } from "@react-firebase/auth";
import config from "./firebase.config.js";
import firebase from "firebase/app";
import "firebase/auth";

import blomst from "./images/blomst.png";
import viGlederOss from "./images/vi-gleder-oss2.png";
import signatur from "./images/signatur.png";
import css from "./app.less";
import BBQ from "./components/BBQ";
import Attending from "./components/Attending";

import classNames from "classnames";

/*****************************/
/* HUSK Å ENDRE BEGGE STEDER */
/*****************************/
const menuItems = [
  { text: "Vår historie" },
  { text: "Program" },
  { text: "Tale?" },
  { text: "Kommer du?" },
  { text: "Gaveønsker" },
];

const App = () => {
  const toastmasterRef = useRef(null);
  const giftsRef = useRef(null);
  const programRef = useRef(null);
  const omBrudeparetRef = useRef(null);
  const rsvpRef = useRef(null);

  const scrollTo = (menuItem) => {
    let ref = null;
    if (menuItem === "Tale?") {
      ref = toastmasterRef;
    } else if (menuItem === "Program") {
      ref = programRef;
    } else if (menuItem === "Vår historie") {
      ref = omBrudeparetRef;
    } else if (menuItem === "Gaveønsker") {
      ref = giftsRef;
    } else if (menuItem === "Kommer du?") {
      ref = rsvpRef;
    }

    if (ref && ref.current && ref.current.offsetTop) {
      window.scrollTo(0, ref.current.offsetTop - 15);
    }
  };

  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <div className={css.app}>
        <Countdown />

        <div className={css.contentContainer}>
          <div className={css.headerImageContainer}>
            <img
              src={signatur}
              alt="Signatur"
              className={css.signatureHeaderImg}
            />
            {/*<div className={css.gifterSeg}>Gifter seg!</div>*/}
          </div>
          <p className={css.date}>03.07.2021</p>

          <div className={css.menuBar}>
            {menuItems.map((item) => (
              <span
                key={item.text}
                className={classNames(css.menuItem, {
                  [css.rsvpMenuItem]: item.text === "Kommer du?",
                })}
                onClick={() => scrollTo(item.text)}
              >
                {item.text}
              </span>
            ))}
          </div>

          <a className={css.picturesLink} 
            href="https://drive.google.com/drive/folders/16qMkFASmXq04Y0C6G4EEufNaKjxNGdLf"
            target="_blank" rel="noopener noreferrer"
          >
            Bilder fra dagen
          </a>

          <Header />

          <OmBrudeparet refProp={omBrudeparetRef} />

          <Program refProp={programRef} />

          <Toastmasters refProp={toastmasterRef} />

          <Collage />

          <Information />

          <img src={blomst} alt="Pynteblomst" className={css.pynteblomst} />

          <BBQ />

          <Attending refProp={rsvpRef} />

          <img src={blomst} alt="Pynteblomst" className={css.pynteblomst} />

          <Gifts refProp={giftsRef} />

          <div className={css.viGlederOssContainer}>
            <img src={viGlederOss} alt="Bilde av Tiril og Jakob" />
            <div className={css.viGlederOss}>Vi gleder oss ♡</div>
            <div className={css.questionsContainer}>
              {
                "Noen spørsmål? Ta kontakt med Tiril (959 37 513) eller Jakob (915 69 257)"
              }
            </div>
          </div>
        </div>
      </div>
    </FirebaseAuthProvider>
  );
};

export default App;
