import "./index.scss";
import { useState, useEffect } from "react";
import undrawImg from "../../assets/images/infographic1.png";
import HintInput from "components/HintInput";
import { useNavigate, Link } from "react-router-dom";
const tickets = require.context("../../assets/images/ticket");
const ticketList = tickets.keys().map((image) => tickets(image));
const infos = require.context("../../assets/images/info");
const infoList = tickets.keys().map((image) => infos(image));
const ratings = require.context("../../assets/images/rating");
const ratingList = tickets.keys().map((image) => ratings(image));
const hats = require.context("../../assets/images/hat");
const hatList = tickets.keys().map((image) => hats(image));
const unis = require.context("../../assets/images/uni");
const uniList = tickets.keys().map((image) => unis(image));

const Input = ({ value, change, param, head, min, max }) => {
  return (
    <div className="vertical">
      <p>{head}</p>
      <div className="parent">
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
        <p className="outOf">/ {max}</p>
      </div>
    </div>
  );
};

const AddAdmit = () => {
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

  console.log(options);

  let years = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023, 2024,
  ];
  const baseUrl = process.env.REACT_APP_API_URL;
  const [results, setResults] = useState([{ name: "", status: true }]);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    intake: "summer",
    year: 2023,
    lang_type: "ielts",
    decision: "admitted",
  });
  const [step, setStep] = useState(1);
  const [max, setMax] = useState(1);

  useEffect(() => {
    if (step > max) {
      setMax(step);
    }
  }, [step, max]);

  const change = (param, val) => {
    setValues({ ...values, [param]: val });
  };
  console.log(values);
  console.log(values.lang_type);

  const changeStep = (i) => {
    if (i <= max) {
      setStep(i);
    }
  };

  return (
    <>
      <div id="addForm">
        <Link to={"/"} className="goBack">
          <i className="fa-solid fa-arrow-left"></i>
          <span>Return Home</span>
        </Link>
        <div className="header">
          <div className="content">
            <p className="title">
              Unveil Your Academic Odyssey, help future aspirants
            </p>
            <p className="desc">
              To help us reduce data bias and maintain quality, please submit
              all your application results once you have received decisions from
              all universities. 15K+ students have contributed their data to PRO
              APPLICANT. Your data is invaluable to future applicants
            </p>
          </div>
          <img src={undrawImg} alt="" />
        </div>
        <div className="divider"></div>
        <div className="add">
          <div className="left">
            <div className="categories t">
              <Category
                onClick={changeStep}
                stepNo={1}
                stepDesc="Basic Information"
              />
              <Category
                stepNo={2}
                onClick={changeStep}
                stepDesc="Undergrad Information"
              />
              <Category
                stepNo={3}
                onClick={changeStep}
                stepDesc="Test Scores"
              />
              <Category
                stepNo={4}
                onClick={changeStep}
                stepDesc="Additional Information"
              />
              <Category
                stepNo={5}
                onClick={changeStep}
                stepDesc="University Information"
              />
            </div>
            <div className="categories">
              <IconBg stepNo={1} maxStep={step} icon={ticketList} />
              <IconBg stepNo={2} maxStep={step} icon={hatList} />
              <IconBg stepNo={3} maxStep={step} icon={ratingList} />
              <IconBg stepNo={4} maxStep={step} icon={infoList} />
              <IconBg stepNo={5} maxStep={step} icon={uniList} />
            </div>
          </div>
          <div className="formArea">
            <div className="preForm">
              <p className="stepIndicator">Step {step} / 5</p>
              <p className="title">Your Journey Starts here!</p>
              <p className="subtitle">Your Journey Starts Here</p>
              <div className="divider"></div>
            </div>
            <form
              className="form-add"
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                if (step !== 5) {
                  setStep(step + 1);
                } else {
                  let val = { ...values };
                  val["gre_tot"] =
                    val["gre_ver"] + val["gre_qua"] + val["gre_awa"];
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
                    body: JSON.stringify({ query: val, results: results }),
                  });
                  alert("Thank You");
                  navigate("/");
                }
              }}
            >
              {step === 1 ? (
                <>
                  <div className="line">
                    <p>Target Major</p>
                    <HintInput
                      hints={options.course || []}
                      param={"course"}
                      change={change}
                      values={values}
                    />
                  </div>
                  <div className="line">
                    <p>Program</p>
                    <select style={{ width: "666px" }} name="" id="">
                      <option value="MS">MS</option>
                      <option value="MBA">MBA</option>
                      <option value="PHD">PHD</option>
                      <option value="Mtech">Mtech</option>
                    </select>
                  </div>
                  <div className="line">
                    <p>Final University</p>
                    <HintInput
                      hints={options.uni || []}
                      param={"uni"}
                      change={change}
                      values={values}
                    />
                  </div>
                  <div className="line">
                    <p>Intake</p>
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
                </>
              ) : (
                ""
              )}
              {step === 2 ? (
                <>
                  <div className="line">
                    <p>College</p>
                    <HintInput
                      hints={options.clg || []}
                      param={"clg"}
                      change={change}
                      values={values}
                    />
                  </div>
                  <div className="line">
                    <p>College Major</p>
                    <HintInput
                      hints={options.major || []}
                      param={"major"}
                      change={change}
                      values={values}
                    />
                  </div>
                  <div className="line">
                    <div className="inputs">
                      <div className="vertical">
                        <p>Undergrad CGPA</p>
                        <input
                          required
                          value={values.cgpa || ""}
                          onChange={(e) => {
                            change("cgpa", parseInt(e.target.value * 10) / 10);
                          }}
                          type="number"
                          step={0.1}
                          max={99}
                          name="major"
                          placeholder="Eg: 7.4"
                        />
                      </div>
                      <div className="vertical">
                        <p>Scale</p>
                        <div
                          className={
                            values.cgpa
                              ? values.cgpa <= 4
                                ? "scale purple"
                                : values.cgpa <= 10
                                ? "scale orange"
                                : "scale blue"
                              : "scale white"
                          }
                        >
                          {values.cgpa
                            ? values.cgpa <= 4
                              ? "4"
                              : values.cgpa <= 10
                              ? "10"
                              : "100"
                            : "Scale"}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {step === 3 ? (
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
                      <div
                        className={
                          values.lang_type === "ielts"
                            ? "engRadio ielts_active"
                            : "engRadio"
                        }
                        onClick={() => {
                          change("lang_type", "ielts");
                        }}
                      >
                        <div className="circle"></div>
                        <p>Ielts</p>
                      </div>
                      <div
                        className={
                          values.lang_type === "toefl"
                            ? "engRadio ielts_active"
                            : "engRadio"
                        }
                        onClick={() => {
                          change("lang_type", "toefl");
                        }}
                      >
                        <div className="circle"></div>
                        <p>Toefl</p>
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
                        max={values.lang_type === "ielts" ? 9 : 30}
                        min={0}
                      />
                      <Input
                        head={"Speaking"}
                        value={values.eng_spe}
                        param={"eng_spe"}
                        change={change}
                        max={values.lang_type === "ielts" ? 9 : 30}
                        min={0}
                      />
                      <Input
                        head={"Listening"}
                        value={values.eng_lis}
                        param={"eng_lis"}
                        change={change}
                        max={values.lang_type === "ielts" ? 9 : 30}
                        min={0}
                      />
                      <Input
                        head={"Writing"}
                        value={values.eng_wri}
                        param={"eng_wri"}
                        change={change}
                        max={values.lang_type === "ielts" ? 9 : 30}
                        min={0}
                      />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {step === 4 ? (
                <>
                  <div className="line">
                    <p>
                      <i class="fa-solid fa-briefcase"></i>Relevant Work
                      Experience
                    </p>
                    <input
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
                      <i class="fa-solid fa-newspaper"></i>Technical Papers
                      Published
                    </p>
                    <input
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
              {step === 5 ? (
                <>
                  <div className="line">
                    <p>Status</p>
                    {results.map((res, i) => {
                      return (
                        <div className="addUnis">
                          <input
                            placeholder="University Name"
                            type="text"
                            value={res.name}
                            onChange={(e) => {
                              setResults(
                                results.map((el, ind) => {
                                  if (ind === i) {
                                    el.name = e.target.value;
                                  }
                                  return el;
                                })
                              );
                            }}
                          />
                          <select
                            name="status"
                            id=""
                            value={res.status}
                            onChange={(e) => {
                              setResults(
                                results.map((el, ind) => {
                                  if (ind === i) {
                                    el.status = e.target.value;
                                  }
                                  return el;
                                })
                              );
                            }}
                          >
                            <option value={true}>Admitted</option>
                            <option value={false}>Rejected</option>
                          </select>
                          <div
                            className="del"
                            onClick={() => {
                              setResults(
                                results.filter((el, ind) => {
                                  if (ind === i) {
                                    return false;
                                  } else {
                                    return true;
                                  }
                                })
                              );
                            }}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </div>
                        </div>
                      );
                    })}
                    <div
                      className="addBtn"
                      onClick={() => {
                        setResults([...results, { name: "", status: false }]);
                      }}
                    >
                      +Add University
                    </div>
                    {/* <div
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
                    </div> */}
                  </div>
                </>
              ) : (
                ""
              )}
              <div className="buttons">
                {step !== 1 ? (
                  <>
                    <p
                      className="prevBtn"
                      onClick={() => {
                        setStep(step - 1);
                      }}
                    >
                      <span>
                        <i className="fa-solid fa-chevron-left"></i>
                      </span>
                      Previous
                    </p>
                  </>
                ) : (
                  ""
                )}
                <button type="submit">{step !== 5 ? "Next" : "Finish"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const Category = ({ stepNo, stepDesc, onClick }) => {
  return (
    <div
      className="category"
      onClick={() => {
        onClick(stepNo);
      }}
    >
      <div className="text">
        <p className="step">Step {stepNo}</p>
        <p className="step_desc">{stepDesc}</p>
      </div>
    </div>
  );
};

const IconBg = ({ stepNo, icon, maxStep }) => {
  let state = 0;
  const bgColors = ["#D4D3D9", "#FFEFAE", "#329F5B"];
  const iconColors = ["#464141", "#C39F03", "#fff"];
  if (stepNo === maxStep) {
    state = 1;
  } else if (stepNo > maxStep) {
    state = 0;
  } else {
    state = 2;
  }
  return (
    <>
      <div
        className="connect"
        style={{
          backgroundColor: bgColors[state],
          display: stepNo === 1 ? "none" : "block",
        }}
      ></div>
      <div
        className="icon"
        style={{ backgroundColor: bgColors[state], color: iconColors[state] }}
      >
        <img style={{ height: "1rem" }} src={icon[state]} alt="" />
      </div>
    </>
  );
};

export default AddAdmit;
