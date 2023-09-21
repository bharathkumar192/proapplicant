import "./index.scss";
import HintInput from "components/HintInput";
import { useEffect, useState } from "react";
import ticket from "../../assets/images/ticket/white.png";
import hat from "../../assets/images/hat/white.png";
import rating from "../../assets/images/rating/white.png";

const SmartFilters = ({
  values,
  setValues,
  change,
  setModal,
  sendQuery,
  rangeCg,
}) => {
  const baseUrl = process.env.REACT_APP_API_URL;
  console.log(values);
  const [options, setOptions] = useState({});
  useEffect(() => {
    const getData = async () => {
      const hints = await fetch(`${baseUrl}/hints`)
        .then((data) => data.json())
        .then((data) => data);
      setOptions(hints);
    };
    getData();
  });
  let years = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023, 2024,
  ];
  const intakeTypes = ["fall", "summer", "winter", "spring"];
  return (
    <div className="bg">
      <div className="smart-filters">
        <div className="left">
          <div className="category">
            <p>Basic Information</p>
            <img src={ticket} alt="" />
          </div>
          <div className="category">
            <p>Undergrad Information</p>
            <img src={hat} alt="" />
          </div>
          <div className="category">
            <p>Test Scores</p>
            <img src={rating} alt="" />
          </div>
        </div>
        <form
          className="form-s"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            let queryParams = [];
            const params = [
              "uni",
              "course",
              "major",
              "clg",
              "cgpa",
              "verbal",
              "quants",
              "awareness",
              "year",
              "intake",
            ];
            if (values.lang_type[0]) {
              params.push("ielts_tot");
            } else {
              params.push("toefl_tot");
            }
            params.map((key) => {
              if (values[key]) {
                queryParams.push(key);
              }
            });
            console.log(queryParams);
            sendQuery(queryParams);
            setModal(false);
          }}
        >
          <div className="">
            <p
              className="close"
              onClick={() => {
                setModal(false);
              }}
            >
              x
            </p>
            <div className="line">
              <div className={values.course ? "active-check check" : "check"}>
                <i class="fa-solid fa-check"></i>
              </div>
              <p>Target Major</p>
              <HintInput
                values={values}
                param={"course"}
                hints={options.course || []}
                change={change}
              />
            </div>
            <div className="line">
              <div className={values.uni ? "active-check check" : "check"}>
                <i class="fa-solid fa-check"></i>
              </div>
              <p>Target University</p>
              <HintInput
                values={values}
                param={"uni"}
                hints={options.uni || []}
                change={change}
              />
            </div>
            <div className="line">
              <div className="check">
                <i class="fa-solid fa-check"></i>
              </div>
              <p>Term</p>
              <div className="seasons">
                {intakeTypes.map((season, i) => {
                  return (
                    <div
                      onClick={() => {
                        let intakes = values.intake;
                        intakes[i] = !intakes[i];
                        setValues({ ...values, intake: intakes });
                      }}
                      className={
                        values.intake[i] ? `active ${season}` : `${season}`
                      }
                    >
                      {season}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="line">
              <div className={values.year ? "active-check check" : "check"}>
                <i class="fa-solid fa-check"></i>
              </div>
              <p>Year</p>
              <select
                name="year"
                value={values.year || 2023}
                onChange={(e) => {
                  change("year", [e.target.value, e.target.value]);
                }}
                id=""
              >
                {years.map((year) => {
                  return <option value={year}>{year}</option>;
                })}
              </select>
            </div>
            <div className="divider"></div>
            <div className="line">
              <div className={values.major ? "active-check check" : "check"}>
                <i class="fa-solid fa-check"></i>
              </div>
              <p>undergrad Major</p>
              <HintInput
                values={values}
                param={"major"}
                hints={options.major || []}
                change={change}
              />
            </div>
            <div className="line">
              <div className={values.cgpa[0] ? "active-check check" : "check"}>
                <i class="fa-solid fa-check"></i>
              </div>
              <p>Undergrad Cgpa</p>
              <input
                style={{ width: "10rem" }}
                type="number"
                placeholder="Eg: 7"
                value={values.cgpa[0] || ""}
                onChange={(e) => {
                  let val = e.target.value;
                  let scale = 0;
                  if (val > 4 && val <= 10) {
                    scale = 1;
                  } else if (val > 10) {
                    scale = 2;
                  }
                  setValues({
                    ...values,
                    ["scale"]: scale,
                    ["cgpa"]: [val, rangeCg[scale][1]],
                  });
                }}
              />
              <div
                className={
                  values.cgpa[0] <= 4
                    ? "scale purple"
                    : values.cgpa[0] <= 10
                    ? "scale orange"
                    : "scale blue"
                }
              >
                {values.cgpa[0] <= 4
                  ? "4"
                  : values.cgpa[0] <= 10
                  ? "10"
                  : "100"}
              </div>
            </div>
            <div className="divider"></div>
            <div className="line">
              <div
                className={values.verbal[0] ? "active-check check" : "check"}
              >
                <i class="fa-solid fa-check"></i>
              </div>
              <p>GRE</p>
              <div className="line" style={{ margin: "0" }}>
                <div className="vertical">
                  <p>Verbal</p>
                  <input
                    type="number"
                    value={values.verbal[0] + 10}
                    onChange={(e) => {
                      let val = parseInt(e.target.value);
                      change("verbal", [val - 10, val + 10]);
                    }}
                    id=""
                  />
                </div>
                <div className="vertical">
                  <p>Quant</p>
                  <input
                    type="number"
                    value={values.quants[0] + 10}
                    onChange={(e) => {
                      let val = parseInt(e.target.value);
                      change("quants", [val - 10, val + 10]);
                    }}
                    id=""
                  />
                </div>
                <div className="vertical">
                  <p>Awa</p>
                  <input
                    type="number"
                    max={6}
                    min={1}
                    value={values.awareness[0] + 1}
                    onChange={(e) => {
                      let val = parseInt(e.target.value);
                      change("awareness", [val - 1, val + 1]);
                    }}
                    id=""
                  />
                </div>
              </div>
            </div>
            <div className="line">
              <div
                className={values.ielts_tot[0] ? "active-check check" : "check"}
              >
                <i class="fa-solid fa-check"></i>
              </div>
              <p>English</p>
              <div className="column">
                <div
                  className={
                    values.lang_type[0] ? "engRadio ielts_active" : "engRadio"
                  }
                  onClick={() => {
                    setValues({
                      ...values,
                      lang_type: [!values.lang_type[0], values.lang_type[1]],
                    });
                  }}
                >
                  <div className="circle"></div>
                  <p>Ielts</p>
                </div>
                <div
                  className={
                    values.lang_type[1] ? "engRadio toefl_active" : "engRadio"
                  }
                  onClick={() => {
                    setValues({
                      ...values,
                      lang_type: [values.lang_type[0], !values.lang_type[1]],
                    });
                  }}
                >
                  <div className="circle"></div>
                  <p>Toefl</p>
                </div>
              </div>
              <div className="column">
                {values.lang_type[0] ? (
                  <>
                    <input
                      className="short"
                      type="number"
                      placeholder="Ielts"
                      min={1}
                      max={9}
                      value={1}
                      onChange={(e) => {
                        setValues({
                          ...values,
                          ielts_tot: [e.target.value - 1, e.target.value + 1],
                        });
                      }}
                      name=""
                      id=""
                    />
                  </>
                ) : (
                  ""
                )}
                {values.lang_type[1] ? (
                  <>
                    <input
                      className="short"
                      type="number"
                      placeholder="Toefl"
                      min={10}
                      max={120}
                      value={12}
                      onChange={(e) => {
                        setValues({
                          ...values,
                          toefl_tot: [e.target.value - 12, e.target.value + 12],
                        });
                      }}
                      name=""
                      id=""
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="line">
              <button className="smart-action" type="submit">
                Apply Filters
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SmartFilters;
