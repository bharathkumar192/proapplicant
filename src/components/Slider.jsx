import PriceSlider from "./Price";
import "./Slider.scss";

const Slider = ({
  objDef,
  param,
  values,
  handleSliderChange,
  sendQuery,
  head,
  pop,
  setPop,
  n,
  rowParam,
  rows,
  existsParam,
  color,
  right,
  sortRow,
  normal,
}) => {
  return (
    <th rowSpan={rows ? rows : 1} style={{ padding: "0" }}>
      <div className="sortable">
        <div
          className="txt"
          style={{ fontSize: normal ? "0.75rem" : "0.625rem" }}
          onClick={() => {
            pop === n ? setPop(-1) : setPop(n);
          }}
        >
          {head}
        </div>

        <div className="sort">
          <i
            className="fa-solid fa-chevron-up"
            onClick={() => {
              sortRow(rowParam ? rowParam : param, true);
            }}
          ></i>
          <i
            className="fa-solid fa-chevron-down"
            onClick={() => {
              sortRow(rowParam ? rowParam : param, false);
            }}
          ></i>
        </div>
      </div>
      {pop === n ? (
        <div className={right ? "popup pop right" : "popup pop"}>
          <PriceSlider
            min={objDef[param][0]}
            max={objDef[param][1]}
            values={values[param]}
            handleChange={(e) => {
              handleSliderChange(e, `${param}`);
            }}
          ></PriceSlider>
          <button
            className="button"
            onClick={() => {
              sendQuery([`${param}`]);
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
          backgroundColor: existsParam(param) ? color : "transparent",
        }}
      ></div>
    </th>
  );
};

export default Slider;
