import { AutoComplete } from "primereact/autocomplete";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css";
import { useState, useEffect } from "react";

const HintInput = ({ hints, param, values, change, multiple }) => {
  const [hint, setHint] = useState(hints);
  useEffect(() => {
    document.getElementById(param).required = true;
  }, [hints]);

  const getHints = (e) => {
    setHint(
      hints.filter((el) => el.toLowerCase().startsWith(e.query.toLowerCase()))
    );
  };
  return hints.length > 0 ? (
    multiple ? (
      <AutoComplete
        inputId={param}
        aria-required
        forceSelection
        multiple
        suggestions={hint}
        value={values[param] || ""}
        completeMethod={getHints}
        className="input"
        onChange={(e) => change(param, e.value)}
      />
    ) : (
      <AutoComplete
        inputId={param}
        aria-required
        forceSelection
        suggestions={hint}
        value={values[param] || ""}
        completeMethod={getHints}
        className="input"
        onChange={(e) => change(param, e.value)}
      />
    )
  ) : (
    <input
      required
      id={param}
      type="text"
      value={values[param] || ""}
      onChange={(e) => {
        change(param, e.target.value);
      }}
    />
  );
};

export default HintInput;
