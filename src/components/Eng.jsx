import PriceSlider from "./Price";

const EngInput = ({
  pop,
  setPop,
  values,
  type,
  head,
  n,
  existsParam,
  color,
  sendQuery,
  handleSliderChange,
  objDef,
}) => {
  const toefl = `toefl_${type}`;
  const ielts = `ielts_${type}`;
  console.log(objDef[ielts]);
  return (
    <th>
      {" "}
      <div className="sortable">
        <div
          className="txt"
          style={{ fontSize: "0.625rem" }}
          onClick={() => {
            pop === n ? setPop(-1) : setPop(n);
          }}
        >
          {head}
        </div>
      </div>
      {pop === n ? (
        <div className="popup pop">
          {values.lang_type[0] ? (
            <PriceSlider
              min={objDef[ielts][0]}
              max={objDef[ielts][1]}
              values={values[ielts]}
              handleChange={(e) => {
                handleSliderChange(e, ielts);
              }}
            />
          ) : (
            ""
          )}
          {values.lang_type[1] ? (
            <PriceSlider
              min={objDef[toefl][0]}
              max={objDef[toefl][1]}
              values={values[toefl]}
              handleChange={(e) => {
                handleSliderChange(e, toefl);
              }}
            />
          ) : (
            ""
          )}
          <button
            className="button"
            onClick={() => {
              if (!values.lang_type[0]) {
                sendQuery([toefl]);
              } else if (!values.lang_type[1]) {
                sendQuery([ielts]);
              } else {
                sendQuery([ielts, toefl]);
              }
              setPop(-1);
            }}
          >
            Apply
          </button>
        </div>
      ) : (
        ""
      )}
      <div
        className="applied"
        style={{
          backgroundColor:
            existsParam(toefl) || existsParam(ielts) ? color : "transparent",
        }}
      ></div>
    </th>
  );
};

export default EngInput;
