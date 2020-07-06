import React from "react";
import bbq from "../images/bbq.png";
import css from "./bbq.less";

const BBQ = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <h3>"Grill-mingling" dagen før dagen!</h3>
        <h3 className={css.klokkeslett}>kl. 17:00 - 20:00</h3>
        Fredag 02.07 er alle gjester velkomne til bli-kjent-grilling på
        uteområdet til Frøyland Gard. Dette vil kunne bidra til en enda kjekkere
        lørdag med super stemning.
        <br />
        <br />
        Grillingen vil være avslappet og lite høytidelig. Ta med egen grillmat,
        drikke og et teppe. Hvis noen har noen kjekke spill, er det bare til å
        ta det med (f.eks kubbespill, badmington eller boccia).
      </div>

      <div className={css.right}>
        <h3 className={css.klokkeslett}>kl. 17:00 - 20:00</h3>
        <p>
          Det kreves ingen påmelding for å komme på grillingen, heller ingen
          kleskode, men håper så mange som mulig kommer!
        </p>
        <img src={bbq} alt="Grilling" className={css.image} />
      </div>
    </div>
  );
};

export default BBQ;
