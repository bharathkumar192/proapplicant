import "./Add.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = ({ value, change, param, head, min, max }) => {
  return (
    <div className="vertical">
      <p>{head}</p>
      <input
        min={min}
        max={max}
        required
        type="number"
        name=""
        value={value || ""}
        onChange={(e) => {
          change(param, parseInt(e.target.value * 10) / 10);
        }}
        placeholder="Score"
        id=""
      />
    </div>
  );
};

const Add = () => {
  let years = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023, 2024,
  ];
  const baseUrl = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const [values, setValues] = useState({
    intake: "summer",
    year: 2023,
    lang_type: "ielts",
    decision: "admitted",
  });
  const [step, setStep] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (step > max) {
      setMax(step);
    }
  }, [step, max]);

  const change = (param, val) => {
    setValues({ ...values, [param]: val });
  };
  console.log(values);

  return (
    <div>
      <p className="headi">Help Future Students With Your Data</p>
      <div className="steps">
        <div
          className={step !== 0 ? "step" : "step active"}
          onClick={() => {
            setStep(0);
          }}
        >
          <div className="number">1</div>
          <p className="desc">Basic Information</p>
        </div>
        <div
          className={step !== 1 ? "step" : "step active"}
          onClick={() => {
            if (max >= 1) {
              setStep(1);
            }
          }}
        >
          <div className="number">2</div>
          <p className="desc">Test Scores</p>
        </div>
        <div
          className={step !== 2 ? "step" : "step active"}
          onClick={() => {
            if (max >= 2) {
              setStep(2);
            }
          }}
        >
          <div className="number">3</div>
          <p className="desc">Additional Information</p>
        </div>
        <div className={step !== 3 ? "step" : "step active"}>
          <div className="number">4</div>
          <p className="desc">University Results</p>
        </div>
      </div>
      <form
        className="form-add"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (step !== 3) {
            setStep(step + 1);
          } else {
            let val = { ...values };
            val["gre_tot"] = val["gre_ver"] + val["gre_qua"] + val["gre_awa"];
            val["eng_tot"] =
              (val["eng_spe"] +
                val["eng_lis"] +
                val["eng_rea"] +
                val["eng_wri"]) /
              4;
            fetch(`${baseUrl}/new`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ query: val }),
            });
            alert("Thank You");
            navigate("/");
          }
        }}
      >
        {step === 0 ? (
          <>
            <div className="line">
              <p>
                <i class="fa-solid fa-book"></i>Target Major
              </p>
              <input
                required
                value={values.course || ""}
                onChange={(e) => {
                  change("course", e.target.value);
                }}
                type="text"
                name="course"
                placeholder="Eg: Computer Science"
              />
            </div>
            <div className="line">
              <p>
                <i class="fa-solid fa-school"></i>Final University
              </p>
              <input
                required
                value={values.uni || ""}
                onChange={(e) => {
                  change("uni", e.target.value);
                }}
                type="text"
                name="uni"
                placeholder="Eg: Stanford University"
              />
            </div>
            <div className="line">
              <p>
                <i class="fa-solid fa-calendar-days"></i>Intake
              </p>
              <div className="select">
                <select
                  name="intake"
                  value={values.intake || "fall"}
                  onChange={(e) => {
                    change("intake", e.target.value);
                  }}
                  id=""
                >
                  <option value="fall">fall</option>
                  <option value="summer">summer</option>
                  <option value="spring">spring</option>
                  <option value="winter">winter</option>
                </select>
                <select
                  name="year"
                  value={values.year || 2023}
                  onChange={(e) => {
                    change("year", e.target.value);
                  }}
                  id=""
                >
                  {years.map((year) => {
                    return <option value={year}>{year}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="hr"></div>
            <div className="line">
              <p>
                <i class="fa-solid fa-school"></i>College
              </p>
              <input
                required
                value={values.clg || ""}
                onChange={(e) => {
                  change("clg", e.target.value);
                }}
                type="text"
                name="clg"
                placeholder="Eg: BITS Pilani"
              />
            </div>
            <div className="line">
              <p>
                <i class="fa-solid fa-book"></i>College Major
              </p>
              <input
                required
                value={values.major || ""}
                onChange={(e) => {
                  change("major", e.target.value);
                }}
                type="text"
                name="major"
                placeholder="Eg: Computer Science"
              />
            </div>
            <div className="line">
              <p>
                <i class="fa-solid fa-marker"></i>Undergrad CGPA
              </p>
              <input
                required
                value={values.cgpa || ""}
                onChange={(e) => {
                  change("cgpa", parseInt(e.target.value * 10) / 10);
                }}
                type="number"
                step={0.1}
                name="major"
                placeholder="Eg: 7.4"
              />
            </div>
          </>
        ) : (
          ""
        )}
        {step === 1 ? (
          <>
            <div className="line">
              <p>
                <i class="fa-solid fa-globe"></i>GRE Score
              </p>
              <div className="inputs">
                <Input
                  head={"Verbal"}
                  param={"gre_ver"}
                  value={values.gre_ver}
                  change={change}
                  min={130}
                  max={170}
                />
                <Input
                  head={"Quants"}
                  param={"gre_qua"}
                  value={values.gre_qua}
                  change={change}
                  min={130}
                  max={170}
                />
                <Input
                  head={"AWA"}
                  param={"gre_awa"}
                  min={1}
                  max={6}
                  value={values.gre_awa}
                  change={change}
                />
              </div>
            </div>
            <div className="line">
              <p>
                <i class="fa-solid fa-language"></i>English
              </p>
              <div
                className="row"
                onChange={(e) => {
                  change("lang_type", e.target.value);
                }}
              >
                <div className="radio">
                  <input
                    required
                    type="radio"
                    value="ielts"
                    name="ielts"
                    id="ielts"
                  />
                  <label htmlFor="ielts">Ielts</label>
                </div>
                <div className="radio">
                  <input
                    required
                    type="radio"
                    value="toefl"
                    name="ielts"
                    id="toefl"
                  />
                  <label htmlFor="toefl">Toefl</label>
                </div>
              </div>
            </div>
            <div className="line" style={{ justifyContent: "flex-end" }}>
              <div className="inputs">
                <Input
                  head={"Reading"}
                  value={values.eng_rea}
                  param={"eng_rea"}
                  change={change}
                />
                <Input
                  head={"Speaking"}
                  value={values.eng_spe}
                  param={"eng_spe"}
                  change={change}
                />
                <Input
                  head={"Listening"}
                  value={values.eng_lis}
                  param={"eng_lis"}
                  change={change}
                />
                <Input
                  head={"Writing"}
                  value={values.eng_wri}
                  param={"eng_wri"}
                  change={change}
                />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {step === 2 ? (
          <>
            <div className="line">
              <p>
                <i class="fa-solid fa-briefcase"></i>Relevant Work Experience
              </p>
              <input
                required
                value={values.work_exp || ""}
                onChange={(e) => {
                  change("work_exp", parseInt(e.target.value));
                }}
                type="number"
                name="work_exp"
                placeholder="In Months"
              />
            </div>
            <div className="line">
              <p>
                <i class="fa-solid fa-newspaper"></i>Technical Papers Published
              </p>
              <input
                required
                value={values.papers || ""}
                onChange={(e) => {
                  change("papers", parseInt(e.target.value));
                }}
                type="number"
                name="papers"
                placeholder="Eg : 6"
              />
            </div>
          </>
        ) : (
          ""
        )}
        {step === 3 ? (
          <>
            <div className="line">
              <p>Status</p>
              <div
                className="row"
                onChange={(e) => {
                  change("decision", e.target.value);
                }}
              >
                <div className="radio">
                  <input
                    required
                    type="radio"
                    value="admitted"
                    name="decision"
                    id="admitted"
                  />
                  <label htmlFor="admitted">Admitted</label>
                </div>
                <div className="radio">
                  <input
                    required
                    type="radio"
                    value="rejected"
                    name="decision"
                    id="rejected"
                  />
                  <label htmlFor="rejected">Rejected</label>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="buttons">
          {step !== 0 ? (
            <button
              onClick={() => {
                setStep(step - 1);
              }}
            >
              Prev
            </button>
          ) : (
            ""
          )}
          <button type="submit">{step !== 3 ? "Next" : "Finish"}</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
