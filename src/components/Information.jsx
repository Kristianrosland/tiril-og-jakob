import React from "react";
import church from "../images/church.png";
import css from "./information.less";
import classNames from "classnames";

const Program = ({ refProp }) => {
  return (
    <div className={css.container} ref={refProp}>
      <img src={church} alt="Kirke" className={css.image} />

      <div className={css.desktopOnly}>
        <Content />
      </div>

      <div className={classNames(css.mobileOnly, css.overlayText)}>
        <Content />
      </div>
    </div>
  );
};

const Content = () => (
  <div className={css.content}>
    <h3>Informasjon</h3>
    <div className={css.sted}>
      <div>Sted:</div>
      <a
        href="https://goo.gl/maps/f6UJRUshdJ8Zz7xw7"
        target="_blank"
        rel="noopener noreferrer"
      >
        Høyland Kirke
      </a>
      <a
        href="https://goo.gl/maps/9u1Z3rCY25kGrWqj8"
        target="_blank"
        rel="noopener noreferrer"
      >
        Frøyland Gard
      </a>
    </div>

    <div>Vi setter pris på om gaver kommer uten innpakningspapir.</div>

    <div>
      Det er god plass på Frøyland Gard. Biler kan stå, og må hentes før klokken
      11 på søndag.
    </div>
  </div>
);

export default Program;
