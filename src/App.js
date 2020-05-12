import React, { useRef } from "react";

import Toastmasters from "./components/Toastmasters";
import Countdown from "./components/Countdown";
import Program from "./components/Program";
import OmBrudeparet from "./components/OmBrudeparet";
import Collage from "./components/Collage";
import Information from "./components/Information";
import Header from "./components/Header";
import AdminApp from "./admin/AdminApp";

import { FirebaseAuthProvider } from "@react-firebase/auth";
import config from "./firebase.config.js";
import firebase from "firebase/app";
import "firebase/auth";

import blomst from "./images/blomst.png";
import viGlederOss from "./images/vi-gleder-oss.png";
import signatur from "./images/signatur.png";
import css from "./app.less";

/*****************************/
/* HUSK Å ENDRE BEGGE STEDER */
/*****************************/
const menuItems = [
  { text: "Vår historie" },
  { text: "Program" },
  { text: "Tale?" },
  { text: "Kommer du?" },
  { text: "Gaveønsker" },
  { text: "FAQ" },
];

const App = () => {
  const rsvpRef = useRef(null);
  const toastmasterRef = useRef(null);
  const giftsRef = useRef(null);
  const programRef = useRef(null);
  const omBrudeparetRef = useRef(null);
  const faqRef = useRef(null);

  const scrollTo = (menuItem) => {
    let ref = null;
    if (menuItem === "Kommer du?") {
      ref = rsvpRef;
    } else if (menuItem === "Tale?") {
      ref = toastmasterRef;
    } else if (menuItem === "Program") {
      ref = programRef;
    } else if (menuItem === "Vår historie") {
      ref = omBrudeparetRef;
    } else if (menuItem === "Gaveønsker") {
      ref = giftsRef;
    } else if (menuItem === "FAQ") {
      ref = faqRef;
    }

    if (ref && ref.current && ref.current.offsetTop) {
      window.scrollTo(0, ref.current.offsetTop - 15);
    }
  };

  const showAdmin = window.location.href.includes("admin");

  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      {showAdmin ? (
        <AdminApp />
      ) : (
        <div className={css.app}>
          <Countdown />

          <div className={css.contentContainer}>
            <div className={css.headerImageContainer}>
              <img
                src={signatur}
                alt="Signatur"
                className={css.signatureHeaderImg}
              />
              <div className={css.gifterSeg}>Gifter seg!</div>
            </div>
            <p className={css.date}>03.07.2021</p>

            <div className={css.menuBar}>
              {menuItems.map((item) => (
                <span
                  key={item.text}
                  className={css.menuItem}
                  onClick={() => scrollTo(item.text)}
                >
                  {item.text}
                </span>
              ))}
            </div>

            <Header />

            <OmBrudeparet refProp={omBrudeparetRef} />

            <Program refProp={programRef} />

            <Toastmasters refProp={toastmasterRef} />

            <Collage />

            <Information />

            <img src={blomst} alt="Pynteblomst" className={css.pynteblomst} />

            <div className={css.viGlederOssContainer}>
              <img src={viGlederOss} alt="Bilde av Tiril og Jakob" />
              <div>Vi gleder oss ♡</div>
            </div>
          </div>
        </div>
      )}
    </FirebaseAuthProvider>
  );
};

export default App;
