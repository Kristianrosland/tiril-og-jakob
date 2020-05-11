import React from "react";
import headerImage from "../images/header.png";
import css from "./header.less";

const Header = () => {
  return (
    <div className={css.container}>
      <img src={headerImage} alt="Bilde av Tiril og Jakob" />
      <div className={css.rightBox}>
        Nøyaktig 8 år etter vårt aller første møte, gir vi hverandre vårt “ja” ♡
        <span>#tirilogjakob</span>
      </div>
    </div>
  );
};

export default Header;
