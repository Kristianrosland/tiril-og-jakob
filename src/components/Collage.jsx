import React from "react";
import collage1 from "../images/collage/collage1.png";
import collage2 from "../images/collage/collage2.png";
import collage3 from "../images/collage/collage3.png";
import collage4 from "../images/collage/collage4.png";
import collage5 from "../images/collage/collage5.png";
import css from "./collage.less";

const Collage = () => {
  return (
    <div className={css.container}>
      <div className={css.column}>
        <img src={collage1} alt="Bilde i collage" />
      </div>
      <div className={css.column}>
        <img src={collage2} alt="Bilde i collage" />
        <img src={collage3} alt="Bilde i collage" />
      </div>
      <div className={css.column}>
        <img src={collage4} alt="Bilde i collage" />
        <img src={collage5} alt="Bilde i collage" />
      </div>
      <div className={css.hashtag}>#tirilogjakob</div>
    </div>
  );
};

export default Collage;
