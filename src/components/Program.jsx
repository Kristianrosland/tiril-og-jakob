import React, { useState, useEffect } from "react";
import selfie from "../images/selfie.png";
import css from "./program.less";

import * as firebase from "firebase/app";
require("firebase/firestore");

const Program = ({ refProp }) => {
  const [events, setEvents] = useState({});

  useEffect(() => {
    firebase
      .firestore()
      .collection("tiril_program")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          setEvents((oldEvents) => ({ ...oldEvents, [doc.id]: doc.data() }));
        });
      });
  }, []);

  const sortedEvents =
    Object.keys(events).length > 0
      ? Object.entries(events)
          .sort(([_id1, e1], [_id2, e2]) =>
            e1.index < e2.index ? -1 : e1.index === e2.index ? 0 : 1
          )
          .map(([_id, e]) => e)
      : [];

  return (
    <div className={css.container} ref={refProp}>
      <img src={selfie} alt="Selfie" className={css.desktopImage} />

      <div className={css.eventList}>
        <h3>Program</h3>
        {sortedEvents.map((e) => (
          <div key={e.title} className={css.event}>
            {e.time ? `${e.time} -` : ""} {e.title}
          </div>
        ))}
      </div>

      <img src={selfie} alt="Selfie" className={css.mobileImage} />
    </div>
  );
};

export default Program;
