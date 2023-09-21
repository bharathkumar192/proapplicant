import "./PopUp.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css";
import { AutoComplete } from "primereact/autocomplete";
import { useState } from "react";
const PopUp = ({
  up,
  val,
  change,
  param,
  setPop,
  sendQuery,
  placeholder,
  multiple,
  hints,
}) => {
  const [hint, setHint] = useState(hints);
  const getHints = (e) => {
    setHint(
      hints.filter((el) => el.toLowerCase().startsWith(e.query.toLowerCase()))
    );
  };
  return up ? (
    <div className="popup pop">
      {/* <input
          className="input-with-hint"
          type="text"
          placeholder={placeholder}
          id="intake"
          autoComplete="off"
          value={val[param] || ""}
          onChange={(e) => {
            change(param, e.target.value);
          }}
        /> */}
      {multiple ? (
        <AutoComplete
          multiple
          forceSelection
          suggestions={hint}
          value={val[param] || ""}
          completeMethod={getHints}
          className="input"
          onChange={(e) => change(param, e.value)}
        />
      ) : (
        <AutoComplete
          forceSelection
          suggestions={hint}
          value={val[param] || ""}
          completeMethod={getHints}
          className="input"
          onChange={(e) => change(param, e.value)}
        />
      )}

      <button
        className="button"
        onClick={() => {
          sendQuery([param]);
          setPop(-1);
        }}
      >
        Apply
      </button>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
