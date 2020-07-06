import React from "react";
import toastmaster from "../images/toastmaster.png";
import classNames from "classnames";
import css from "./toastmasters.less";

const Toastmasters = ({ refProp }) => {
  return (
    <div className={css.container} ref={refProp}>
      <div className={css.toastmasterInfo}>
        <h3>The toastmaster</h3>
        <div className={css.description}>
          Har du lyst å holde tale, vise frem et bilde, arrangerer en gøy lek
          eller bidra med annen underholdning? Da er Benjamin your guy to call.
          <br /> <br />
          Vi ønsker helst at taler ikke varer lengre enn 5 minutter.
        </div>
        <div className={classNames(css.contactInfo, css.desktopOnly)}>
          <ContactInfo />
        </div>
      </div>
      <img src={toastmaster} alt="Bilde av toastmaster" />
      <div className={classNames(css.contactInfo, css.mobileOnly)}>
        <ContactInfo />
      </div>
    </div>
  );
};

const ContactInfo = () => (
  <>
    Telefon: <br />
    <a href="tel:+4795799842">957 99 842</a>
    <br /> <br />
    Facebook: <br />
    <a
      href="https://www.facebook.com/benjamin.jakobsen.10"
      target="_blank"
      rel="noopener noreferrer"
    >
      Benjamin Jakobsen
    </a>
    <br /> <br />
    Email: <br />
    <a href="mailto:toastmastertirilogjakob@gmail.com">
      toastmastertirilogjakob@gmail.com
    </a>
    <br /> <br />
  </>
);

export default Toastmasters;
