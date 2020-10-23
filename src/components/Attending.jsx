import React, { useState } from "react";
import css from "./attending.less";
import classNames from "classnames";
import ClipLoader from "react-spinners/ClipLoader";

const cloudFunctionUrl =
  "https://us-central1-tiril-og-jakob.cloudfunctions.net/fghjklkjhgf";

const Attending = ({ refProp }) => {
  const [name, setName] = useState("");
  const [attending, isAttending] = useState(undefined);
  const [allergies, setAllergies] = useState("");
  const [funFact, setFunfact] = useState("");
  const [submitState, setSubmitState] = useState("NOT_STARTED");

  const onSubmit = async () => {
    setSubmitState("SUBMITTING");

    fetch(cloudFunctionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              name: name,
              attendance: attending ? "KOMMER" : "KOMMER IKKE",
              allergies: allergies,
              funfact: funFact,
            },
          },
        ],
      }),
    })
      .then(() => {
        setName("");
        setAllergies("");
        setFunfact("");
        isAttending(undefined);

        setSubmitState("SUCCESS");
      })
      .catch(() => {
        setSubmitState("ERROR");
      });
  };

  const formFilled =
    name.length > 0 && (attending === true || attending === false);

  return (
    <div className={css.container} ref={refProp}>
      <div className={css.header}>Kommer du?</div>
      <div className={css.description}>
        Vi håper du / dere har anledning til å være med å feire den store dagen
        med oss! Vennligst send inn et skjema per person.
      </div>
      <div className={css.svarfrist}>
        Svarfrist er <span>1. mars 2021</span>
      </div>

      <input
        className={css.input}
        placeholder="Fornavn & etternavn"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>
        <GuestCheckboxWithLabel
          label={<label>JEG KOMMER</label>}
          checked={attending}
          onChange={() => isAttending(true)}
        />
        <GuestCheckboxWithLabel
          label={<label>JEG KOMMER IKKE</label>}
          checked={attending === false}
          onChange={() => isAttending(false)}
        />
      </div>

      <input
        className={css.input}
        placeholder="Skriv inn evt. allergier eller matpreferanser"
        value={allergies}
        onChange={(e) => setAllergies(e.target.value)}
      />
      <input
        className={css.input}
        placeholder="Skriv inn en “fun fact” om deg selv!* (valgfritt)"
        value={funFact}
        onChange={(e) => setFunfact(e.target.value)}
      />

      <div className={css.buttonContainer}>
        <button
          className={css.button}
          disabled={!formFilled}
          onClick={onSubmit}
        >
          SEND SVAR
        </button>
        <div className={css.spinnerContainer}>
          <ClipLoader
            color={"#b88e8d"}
            size={35}
            loading={submitState === "SUBMITTING"}
          />
        </div>
      </div>

      {submitState === "SUCCESS" && (
        <div className={css.feedback}> Takk for ditt svar! </div>
      )}
      {submitState === "ERROR" && (
        <div className={css.error}>
          Noe gikk galt! Last siden på nytt og prøv igjen.
        </div>
      )}

      <div className={css.description}>
        * En «fun fact» er noe om deg som kanskje ikke alle vet. Har du drukket
        kaffe med en kjendis? Hoppet 20 ganger i fallskjerm? Startet eget firma
        eller gjort noe annet spennende?
      </div>
    </div>
  );
};

const GuestCheckboxWithLabel = ({ label, checked, onChange, style }) => (
  <div
    key={label}
    className={css.attendingCheckboxAndLabel}
    onClick={() => onChange(label)}
    style={style}
  >
    <div
      className={classNames(css.attendingCheckbox, {
        [css.checked]: checked,
      })}
    />
    {label}
  </div>
);

export default Attending;
