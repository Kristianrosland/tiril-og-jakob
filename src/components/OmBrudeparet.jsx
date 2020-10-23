import React from "react";
import slottsparken from "../images/slottspark.png";
import css from "./om-brudeparet.less";

const OmBrudeparet = ({ refProp }) => {
  return (
    <div ref={refProp} className={css.container}>
      <div className={css.leftSide}>
        <TextContent />
      </div>

      <img src={slottsparken} alt="Tiril og Jakob" className={css.image} />

      <div className={css.overlay}>
        <TextContent />
      </div>
    </div>
  );
};

const TextContent = () => {
  return (
    <>
      <h3>Vår historie</h3>
      Sommeren 2013 møttes Tiril og Jakob på speed-date da de begge deltok på
      sin første sommerleir med AUF. Over 5 dager ble de godt kjent, men hadde
      ikke noe særlig kontakt i tiden etterpå.
      <br />
      <br />
      <div className={css.extraSpacing} />
      Det var først i begynnelsen av 2015 da begge var nysingle at Tiril
      plutselig en dag fikk en melding fra Jakob om at han var på vei til
      Sandnes for helgen og ønsket å møtes. Dette var starten en blomstrende
      forelskelse.
      <br />
      <br />
      <div className={css.extraSpacing} />
      Nesten 5 år senere gikk Jakob ned på kne på Fløien 21. desember 2019. Nå
      begynner et nytt kapittel i historien deres og dette vil de gjerne
      invitere dere til å ta en del i!
    </>
  );
};

export default OmBrudeparet;
