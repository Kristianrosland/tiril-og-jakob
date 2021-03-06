import React from "react";
import css from "./gifts.less";
import hardanger from "../images/hardanger.png";
import rosendahl from "../images/rosendahl.png";

const kitchn = "https://www.kitchn.no/onskeliste/111394";
const jernia =
  "https://jernia.no/wishlist/e9c93fb2-b820-4bc2-8313-da560dc50066";

const Gifts = ({ refProp }) => {
  return (
    <div className={css.container} ref={refProp}>
      <h3>Gaveønsker</h3>
      <Section
        header="Bidrag til bryllupsreise"
        text={
          <>
            <div>
              Vi planglegger vår bryllupsreise og vi tar gjerne i mot støtte til
              den!
            </div>
            <div>
              Bidrag kan settes inn på konton 1224.27.56353 (Jakob Skretting
              Jansen)
            </div>
          </>
        }
      />
      <Section
        header="Ønskeliste fra Kitchn"
        text={
          <>
            <div>
              Vi ønsker oss i hovedsak deler fra Grand Cru-sereien til
              Rosendahl.
            </div>
            <span>Liste over ønskene fra Kitch´n finner dere</span>
            <a href={kitchn} target="_blank" rel="noopener noreferrer">
              her.
            </a>
          </>
        }
        img={rosendahl}
      />
      <Section
        header="Ønskeliste fra Jernia"
        text={
          <>
            <div>Vi ønsker oss bestikket Fjord fra Hardanger bestikk.</div>
            <span>Liste over ønskene fra Jernia finner dere</span>
            <a href={jernia} target="_blank" rel="noopener noreferrer">
              her.
            </a>
          </>
        }
        img={hardanger}
      />
    </div>
  );
};

const Section = ({ header, text, img }) => (
  <>
    <div className={css.header}>{header}</div>
    <div className={css.textAndImage}>
      <div className={css.text}>{text}</div>
      {img && (
        <img
          className={css.hideOnSmallScreen}
          src={img}
          alt="Ønskelistebilde"
        />
      )}
    </div>
  </>
);

export default Gifts;
