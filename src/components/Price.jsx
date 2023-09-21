import Slider from "react-slider";
import "./Price.scss";

const PriceSlider = ({ values, handleChange, min, max }) => {
  return (
    <div>
      <Slider
        className="slider"
        value={values}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>{values[0]}</p>
        </div>
        <div>
          <p>{values[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
