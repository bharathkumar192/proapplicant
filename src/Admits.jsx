import "./Admits.scss";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import PopUp from "./components/PopUp";
import PriceSlider from "./components/Price";
import Slider from "./components/Slider";
import EngInput from "./components/Eng";
import Graph from "components/Graph";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import PieChart from "components/PieChart";
import SmartFilters from "components/smartFilters";
import tool_1 from "../src/assets/images/tool_1.png";
import tool_2 from "../src/assets/images/tool_2.png";
import tool_3 from "../src/assets/images/tool_3.png";

import info_tool_1 from "../src/assets/images/draw_tool_1.png";
import info_tool_2 from "../src/assets/images/draw_tool_2.png";
import info_tool_3 from "../src/assets/images/draw_tool_3.png";

// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Ring } from "@uiball/loaders";

function App() {
  const images = [tool_1, tool_2, tool_3];
  const drawImages = [info_tool_1, info_tool_2, info_tool_3];
  const toolColors = ["#ff5d52", "#71a1ff", "#37d42a"];

  const years = [2006, 2024];
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPg, SetLastPg] = useState(1);
  const [modal, setModal] = useState(false);
  const [load, setLoad] = useState(false);
  const [tool, setTool] = useState(-1);
  const [options, setOptions] = useState({});
  const [socials, setSocials] = useState(false);
  const cookies = new Cookies();
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_API_URL;
  console.log(process.env);
  console.log(baseUrl);
  const colors = {
    uni: "#958CF1",
    course: "#A78396",
    decision: "#FFB682",
    intake: "#FD2674",
    year: "#FD2674",
    verbal: "#C990DD",
    quants: "#A5ED8C",
    awareness: "#FEFFBE",
    gre_total: "#E8BABA",
    rea: "#E8AA42",
    spe: "#9986BC",
    lis: "#FE98BD",
    wri: "#C5BF39",
    tot: "#BF5562",
    clg: "#FEEC02",
    major: "#F8941A",
    cgpa: "#D88AB5",
    work_exp: "#3C943C",
    papers: "#DF184F",
  };

  const filterBgColors = {
    uni: "#CEC9F8",
    course: "#E6DBE1",
    decision: "#FFE7D6",
    intake: "#FFD7E5",
    year: "#FFD7E5",
    verbal: "#E8D0F1",
    quants: "#D5F7CA",
    awareness: "#FFFFD6",
    gre_total: "#F0D1D1 ",
    rea: "#FBEFDB",
    spe: "#E9E5F1",
    lis: "#FEC2D8",
    wri: "#F2F0CF",
    tot: "#F4E1E4",
    clg: "#FCF59D",
    major: "#FCD29C",
    cgpa: "#FAF0F5",
    work_exp: "#FAE3EA",
    papers: "#E2F3E2",
  };

  const filterTextColors = {
    uni: "#1D0DCE",
    course: "#845C72",
    decision: "#FE710B",
    intake: "#FD2674",
    year: "#FD2674",
    verbal: "#A343C7",
    quants: "#47C31D",
    awareness: "#B2B202",
    gre_total: "#C85656 ",
    rea: "#DC9518",
    spe: "#5C4785",
    lis: "#FB0E65",
    wri: "#B0AA30",
    tot: "#B34253",
    clg: "#A69C0B",
    major: "#CD7808",
    cgpa: "#B83D7A",
    work_exp: "#A32B4B",
    papers: "#3C903C",
  };

  console.log(rows);
  const pages = [];
  for (let i = page; i <= lastPg; i++) {
    pages.push(
      <div
        className={i === page ? "selected" : ""}
        onClick={() => {
          setPage(i);
        }}
      >
        {i}
      </div>
    );
  }

  const engTypes = ["ielts", "toefl"];
  const rangeCg = [
    [0, 4],
    [4, 10],
    [10, 100],
  ];

  const [objDef, setObjDef] = useState({
    intake: [true, true, true, true],
    year: years,
    decision: [true, true],
    verbal: [130, 170],
    quants: [130, 170],
    awareness: [0, 6],
    gre_total: [260, 340],
    ielts_tot: [1, 9],
    toefl_tot: [10, 120],
    lang_type: [true, true],
    work_exp: [0, 100],
    papers: [0, 10],
    ielts_lis: [0, 9],
    toefl_lis: [10, 30],
    ielts_wri: [0, 9],
    toefl_wri: [10, 30],
    ielts_spe: [0, 9],
    toefl_spe: [10, 30],
    ielts_rea: [0, 9],
    toefl_rea: [10, 30],
    scale: 1,
    cgpa: rangeCg[1],
  });
  const [values, setValues] = useState({
    intake: [true, true, true, true],
    year: years,
    decision: [true, true],
    verbal: [130, 170],
    quants: [130, 170],
    awareness: [0, 6],
    gre_total: [260, 340],
    ielts_tot: [1, 9],
    toefl_tot: [10, 120],
    lang_type: [true, true],
    work_exp: [0, 100],
    papers: [0, 10],
    ielts_lis: [0, 9],
    toefl_lis: [10, 30],
    ielts_wri: [0, 9],
    toefl_wri: [10, 30],
    ielts_spe: [0, 9],
    toefl_spe: [10, 30],
    ielts_rea: [0, 9],
    toefl_rea: [10, 30],
    scale: 1,
    cgpa: rangeCg[1],
  });
  console.log(values);
  const [appliedFilters, setAppliedFilters] = useState({});
  const [pop, setPop] = useState(-1);
  const [pro, setPro] = useState(false);
  const no_of_rows = 10;
  const start = (page - 1) * 10;
  const end = page * 10 - 1;

  const handleSliderChange = (arr, param) => {
    setValues((values) => {
      let c = { ...values };
      c[param][0] = arr[0];
      c[param][1] = arr[1];
      return c;
    });
  };

  const Colors = ["#FFE8D1", "#68C3D4", "#ED6A5A", "#F92A82"];
  const intakeTypes = ["fall", "summer", "winter", "spring"];
  const decisionTypes = ["admitted", "rejected", "finalize"];
  const decisions = ["admitted", "rejected"];

  const [mail, setMail] = useState("");

  useEffect(() => {
    const userData = cookies.get("userMail");
    const getData = async () => {
      const response = await fetch(`${baseUrl}/students`)
        .then((data) => data.json())
        .then((data) => data);
      setRows(response);
      const p = await fetch(`${baseUrl}/pro/${userData}`)
        .then((data) => data.json())
        .then((data) => data);
      if (!p) {
        let d = new Date();
        setValues({ ...values, year: [2004, d.getFullYear() - 2] });
        setObjDef({ ...objDef, year: [2004, d.getFullYear() - 2] });
      }

      if (p.error) {
        alert(p.error);
      } else {
        setPro(p.pro);
      }
      const hints = await fetch(`${baseUrl}/hints`)
        .then((data) => data.json())
        .then((data) => data);
      setOptions(hints);
    };

    if (userData !== undefined) {
      setMail(userData);
      getData();
    } else {
      navigate("/signup");
    }
  }, []);

  console.log(options);

  useEffect(() => {
    SetLastPg(
      page + 4 > Math.ceil(rows.length / no_of_rows)
        ? Math.ceil(rows.length / no_of_rows)
        : page + 4
    );
  }, [page, rows, no_of_rows]);

  useEffect(() => {
    SetLastPg(
      page + 4 > Math.ceil(rows.length / no_of_rows)
        ? Math.ceil(rows.length / no_of_rows)
        : page + 4
    );
    setLoad(true);
  }, [rows]);

  useEffect(() => {
    setLoad(false);
    console.log(appliedFilters);
    let intakeFilter = [];
    let decisionString = ["admitted", "finalize", "rejected"];
    if (appliedFilters.intake) {
      for (var i = 0; i < intakeTypes.length; i++) {
        if (appliedFilters.intake[i]) {
          intakeFilter.push(intakeTypes[i]);
        }
      }
    } else {
      intakeFilter = [...intakeTypes];
    }

    if (appliedFilters.decision) {
      if (!appliedFilters.decision[0]) {
        decisionString.splice(0, 2);
      } else if (!appliedFilters.decision[1]) {
        decisionString.splice(2, 1);
      }
    }
    console.log(decisionString);
    console.log(intakeFilter);

    let tempEng = [...engTypes];
    if (!values.lang_type[0]) {
      tempEng.splice(0, 1);
    }
    if (!values.lang_type[1]) {
      tempEng.splice(1, 1);
    }

    console.log(tempEng);
    fetch(`${baseUrl}/query`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: {
          uni: {
            $regex: appliedFilters.uni || "",
            $options: "i",
          },
          course: {
            $regex: appliedFilters.course || "",
            $options: "i",
          },
          clg: {
            $regex: appliedFilters.clg || "",
            $options: "i",
            $ne: "n/a",
          },
          major: appliedFilters.major
            ? {
                $in: appliedFilters.major,
              }
            : { $regex: "", $options: "i" },
          intake: {
            $in: intakeFilter,
          },
          gre_ver: {
            $gte: values.verbal[0],
            $lte: values.verbal[1],
          },
          gre_qua: {
            $gte: values.quants[0],
            $lte: values.quants[1],
          },
          gre_awa: {
            $gte: values.awareness[0],
            $lte: values.awareness[1],
          },
          gre_tot: {
            $gte: values.gre_total[0],
            $lte: values.gre_total[1],
          },
          year: {
            $gte: values.year[0],
            $lte: values.year[1],
          },
          decision: {
            $in: decisionString,
          },
          $and: [
            {
              $or: [
                {
                  eng_tot: {
                    $gte: values.ielts_tot[0],
                    $lte: values.ielts_tot[1],
                  },
                },
                {
                  eng_tot: {
                    $gte: values.toefl_tot[0],
                    $lte: values.toefl_tot[1],
                  },
                },
              ],
            },
            {
              $or: [{ approved: { $exists: false } }, { approved: true }],
            },
            {
              $or: [
                {
                  eng_rea: {
                    $gte: values.ielts_rea[0],
                    $lte: values.ielts_rea[1],
                  },
                },
                {
                  eng_rea: {
                    $gte: values.toefl_rea[0],
                    $lte: values.toefl_rea[1],
                  },
                },
              ],
            },
            {
              $or: [
                {
                  eng_lis: {
                    $gte: values.ielts_lis[0],
                    $lte: values.ielts_lis[1],
                  },
                },
                {
                  eng_lis: {
                    $gte: values.toefl_lis[0],
                    $lte: values.toefl_lis[1],
                  },
                },
              ],
            },
            {
              $or: [
                {
                  eng_spe: {
                    $gte: values.ielts_spe[0],
                    $lte: values.ielts_spe[1],
                  },
                },
                {
                  eng_spe: {
                    $gte: values.toefl_spe[0],
                    $lte: values.toefl_spe[1],
                  },
                },
              ],
            },
            {
              $or: [
                {
                  eng_wri: {
                    $gte: values.ielts_wri[0],
                    $lte: values.ielts_wri[1],
                  },
                },
                {
                  eng_wri: {
                    $gte: values.toefl_wri[0],
                    $lte: values.toefl_wri[1],
                  },
                },
              ],
            },
          ],
          lang_type: { $in: tempEng },
          work_exp: {
            $gte: values.work_exp[0],
            $lte: values.work_exp[1],
          },
          papers: {
            $gte: values.papers[0],
            $lte: values.papers[1],
          },
          cgpa: {
            $gte: values.cgpa[0],
            $lte: values.cgpa[1],
          },
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setRows(res);
        setPage(1);
      });
  }, [appliedFilters]);

  const sendQuery = (params) => {
    setPop(-1);
    setAppliedFilters((appliedFilters) => {
      let c = { ...appliedFilters };
      params.forEach((param) => {
        if (param === "intake") {
          let falseIntake = [false, false, false, false];
          let trueIntake = [true, true, true, true];
          if (values[param] === falseIntake) {
            c[param] = trueIntake;
            setValues({ ...values, intake: trueIntake });
          }
        } else {
          c[param] = values[param];
        }
      });
      return c;
    });
  };

  const existsParam = (param) => {
    return appliedFilters.hasOwnProperty(param);
  };

  const delParam = (param) => {
    setAppliedFilters((appliedFilters) => {
      const c = { ...appliedFilters };
      delete c[param];
      return c;
    });
    setValues((values) => {
      const c = { ...values };
      if (
        param === "major" ||
        param === "course" ||
        param === "clg" ||
        param === "uni"
      ) {
        delete c[param];
      } else {
        if (param === "entrance") {
          c["lang_type"] = [true, true];
        } else {
          if (param.split("_")[0] === "ielts") {
            if (c.lang_type[1] === false) {
              c.lang_type = [true, true];
            } else {
              c.lang_type[0] = false;
            }
          } else if (param.split("_")[0] === "toefl") {
            if (c.lang_type[0] === false) {
              c.lang_type = [true, true];
            } else {
              c.lang_type[1] = false;
            }
          }
          c[param] = objDef[param];
        }
      }
      return c;
    });
  };

  const change = (param, val) => {
    setValues({ ...values, [param]: val });
  };

  const sortRow = (param, ascending) => {
    if (ascending) {
      let temp = rows.sort((a, b) => parseInt(a[param]) - parseInt(b[param]));
      setRows([...temp]);
    } else {
      setRows([
        ...rows.sort((a, b) => parseInt(b[param]) - parseInt(a[param])),
      ]);
    }
  };

  return (
    <div className="App">
      <Nav pro={pro} email={mail} active={true} />
      <div className="intro">
        <p className="head">
          Instant access to{" "}
          <span className="green"> 400,000+ admits & rejects!</span>
        </p>
        <p style={{ fontWeight: "600" }}>
          Fall 2023 results now available on Pro Access
        </p>
        <p className="tip">
          <i className="fa-solid fa-lightbulb"></i>
          Pro Tip: Click on a column header or value to filter and search
          through the data
        </p>
        <p className="tip">
          <i className="fa-solid fa-lightbulb"></i>
          <a
            href="https://proapplicant.mojo.page/admits-and-rejects-premium-membership"
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            Get Pro
          </a>
          for access to 2021-2023 results
        </p>
        <div className="action-btns">
          <button className="secondary-btn">
            <Link to={"/tools"}>Explore Services</Link>
          </button>
          <button
            className="primary-btn"
            onClick={() => {
              setSocials(!socials);
            }}
          >
            View Socials
          </button>
        </div>
      </div>
      {modal ? (
        <SmartFilters
          change={change}
          values={values}
          setValues={setValues}
          setModal={setModal}
          sendQuery={sendQuery}
          rangeCg={rangeCg}
        />
      ) : (
        ""
      )}
      {socials ? (
        <>
          <div className="social-section">
            <a href="https://www.instagram.com/proapplicant/">
              <i className="fa-brands fa-instagram fa-2x"></i>
            </a>
            <a href="https://chat.whatsapp.com/JsXe6diTuL1JcVzkqiC4uR">
              <i className="fa-brands fa-whatsapp fa-2x"></i>
            </a>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="filterSection">
        <button
          className="smart"
          onClick={() => {
            setModal(true);
            setValues({ ...values, intake: [false, false, false, false] });
          }}
        >
          Smart Filters
        </button>
        <div className="filters">
          {Object.keys(appliedFilters).map((key, i) => {
            let initial = key.split("_");
            let initial_key =
              initial[0] === "ielts" || initial[0] === "toefl"
                ? initial[1]
                : key;
            return (
              <div
                style={{
                  backgroundColor: filterBgColors[initial_key],
                }}
              >
                <p style={{ color: filterTextColors[initial_key] }}>
                  <span className="centerSpan" style={{ fontWeight: "600" }}>
                    {key}{" "}
                  </span>
                  | {}
                  {!Array.isArray(appliedFilters[key])
                    ? values[key]
                    : appliedFilters[key].map((intake, i) => {
                        if (key === "intake") {
                          if (intake) {
                            return `${intakeTypes[i]} `;
                          } else {
                            return "";
                          }
                        } else {
                          return `${intake} `;
                        }
                      })}
                </p>
                <p
                  className="x-btn"
                  onClick={() => {
                    delParam(key);
                  }}
                >
                  x
                </p>
              </div>
            );
          })}
        </div>
        <div className="side-btns ">
          <button
            className="clear-filter"
            onClick={() => {
              setAppliedFilters({});
              setValues(objDef);
            }}
          >
            Clear Filters
          </button>
          <Link to={"/contribute"}>
            <button className="add-data">
              <div className="icon">+</div>Add Data
            </button>
          </Link>
        </div>
      </div>

      {load ? (
        <div className="roundTable">
          <table
            className="admits"
            style={{
              borderSpacing: 1,
              borderCollapse: "inherit",
              width: "fit-content",
            }}
          >
            <thead>
              <tr>
                <th rowSpan={2} style={{ width: "10.7rem" }}>
                  <span
                    className="centerSpan"
                    onClick={() => {
                      pop !== 2 ? setPop(2) : setPop(-1);
                    }}
                  >
                    University
                    <i
                      className="fa-solid fa-filter"
                      style={{ margin: "0 0 0 1rem" }}
                    ></i>
                  </span>
                  <PopUp
                    hints={options.uni}
                    up={pop === 2 ? true : false}
                    param={"uni"}
                    val={values}
                    sendQuery={sendQuery}
                    setPop={setPop}
                    change={change}
                    placeholder={"University Name"}
                  />
                  <div
                    className="applied"
                    style={{
                      backgroundColor: existsParam("uni")
                        ? colors["uni"]
                        : "transparent",
                    }}
                  ></div>
                </th>
                <th rowSpan={2} style={{ width: "7.825rem" }}>
                  <span
                    className="centerSpan"
                    onClick={() => {
                      pop !== 3 ? setPop(3) : setPop(-1);
                    }}
                  >
                    Course
                  </span>
                  <PopUp
                    hints={options.course}
                    up={pop === 3 ? true : false}
                    param={"course"}
                    val={values}
                    sendQuery={sendQuery}
                    setPop={setPop}
                    change={change}
                    placeholder={"Course Name"}
                  />
                  <div
                    className="applied"
                    style={{
                      backgroundColor: existsParam("course")
                        ? colors["course"]
                        : "transparent",
                    }}
                  ></div>
                </th>
                <th rowSpan={2} style={{ width: "7.3rem" }}>
                  <span
                    className="centerSpan"
                    onClick={() => {
                      pop !== 1 ? setPop(1) : setPop(-1);
                    }}
                  >
                    Decision
                  </span>
                  {pop === 1 ? (
                    <div className="popup pop">
                      {decisions.map((decision, i) => (
                        <div className="line">
                          <input
                            className="check input"
                            type="checkbox"
                            name=""
                            checked={
                              values.decision ? values.decision[i] : true
                            }
                            id={decision}
                            onChange={(e) => {
                              let c = { ...values };
                              c.decision[i] = e.target.checked;
                              setValues(c);
                            }}
                          />
                          <label htmlFor={`${decision}`}>{decision}</label>
                        </div>
                      ))}
                      <button
                        className="button"
                        onClick={() => {
                          sendQuery(["decision"]);
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
                      backgroundColor: existsParam("decision")
                        ? colors["decision"]
                        : "transparent",
                    }}
                  ></div>
                </th>
                <th rowSpan={2} style={{ width: "5.375rem" }}>
                  <span
                    className="centerSpan"
                    onClick={() => {
                      pop === 0 ? setPop(-1) : setPop(0);
                    }}
                  >
                    Intake
                  </span>{" "}
                  {pop === 0 ? (
                    <div className="popup pop">
                      {intakeTypes.map((type, i) => {
                        return (
                          <div className="line">
                            <input
                              className="check input"
                              type="checkbox"
                              checked={values.intake[i]}
                              id={`${type}`}
                              onChange={(e) => {
                                let intakes = values.intake;
                                intakes[i] = !intakes[i];
                                setValues({ ...values, intake: intakes });
                              }}
                            />
                            <label htmlFor={`${type}`}>{type}</label>
                          </div>
                        );
                      })}
                      <PriceSlider
                        values={[
                          values.year[0] || 2006,
                          values.year[1] || 2024,
                        ]}
                        handleChange={(change) => {
                          setValues((values) => {
                            let c = { ...values };
                            c.year[0] = change[0];
                            c.year[1] = change[1];
                            return c;
                          });
                        }}
                        min={objDef.year[0]}
                        max={objDef.year[1]}
                      />
                      <button
                        className="button"
                        onClick={() => {
                          sendQuery(["intake", "year"]);
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
                      backgroundColor: existsParam("intake")
                        ? colors["intake"]
                        : "transparent",
                    }}
                  ></div>
                </th>

                <th colSpan={4}>GRE</th>
                <th colSpan={5}>
                  {" "}
                  <span
                    className="centerSpan"
                    onClick={() => {
                      pop === 10 ? setPop(-1) : setPop(10);
                    }}
                  >
                    IELTS/TOEFL
                  </span>
                  {pop === 10 ? (
                    <div className="popup pop">
                      {engTypes.map((type, i) => {
                        return (
                          <div className="line">
                            <input
                              className="check input"
                              type="checkbox"
                              checked={values.lang_type[i]}
                              id={`${type}`}
                              onChange={(e) => {
                                let lang_types = values.lang_type;
                                lang_types[i] = !lang_types[i];
                                setValues({ ...values, lang_type: lang_types });
                              }}
                            />
                            <label htmlFor={`${type}`}>{type}</label>
                          </div>
                        );
                      })}
                      <button
                        className="button"
                        onClick={() => {
                          let tempEng = [...engTypes];
                          if (!values.lang_type[0]) {
                            tempEng.splice(0, 1);
                          }
                          if (!values.lang_type[1]) {
                            tempEng.splice(1, 1);
                          }
                          setAppliedFilters({
                            ...appliedFilters,
                            ["entrance"]: tempEng,
                          });
                          setPop(-1);
                        }}
                      >
                        Apply
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </th>
                <th rowSpan={2} style={{ width: "10rem" }}>
                  <span
                    className="centerSpan"
                    onClick={() => {
                      pop !== 4 ? setPop(4) : setPop(-1);
                    }}
                  >
                    College
                  </span>
                  <PopUp
                    hints={options.clg}
                    up={pop === 4 ? true : false}
                    param={"clg"}
                    val={values}
                    sendQuery={sendQuery}
                    setPop={setPop}
                    change={change}
                    placeholder={"College Name"}
                  />
                  <div
                    className="applied"
                    style={{
                      backgroundColor: existsParam("clg")
                        ? colors["clg"]
                        : "transparent",
                    }}
                  ></div>
                </th>
                <th rowSpan={2} style={{ width: "6.5rem" }}>
                  <span
                    className="centerSpan"
                    onClick={() => {
                      pop !== 5 ? setPop(5) : setPop(-1);
                    }}
                  >
                    Major
                  </span>
                  <PopUp
                    multiple={true}
                    hints={options.major}
                    up={pop === 5 ? true : false}
                    param={"major"}
                    val={values}
                    sendQuery={sendQuery}
                    setPop={setPop}
                    change={change}
                    placeholder={"Major"}
                  />
                  <div
                    className="applied"
                    style={{
                      backgroundColor: existsParam("major")
                        ? colors["major"]
                        : "transparent",
                    }}
                  ></div>
                </th>
                <th rowSpan={2}>
                  <div className="sortable">
                    <p
                      onClick={() => {
                        pop === 19 ? setPop(-1) : setPop(19);
                      }}
                    >
                      CGPA
                    </p>

                    <div className="sort">
                      <i
                        className="fa-solid fa-chevron-up"
                        onClick={() => {
                          sortRow("cgpa", true);
                        }}
                      ></i>
                      <i
                        className="fa-solid fa-chevron-down"
                        onClick={() => {
                          sortRow("cgpa", false);
                        }}
                      ></i>
                    </div>
                  </div>
                  {pop === 19 ? (
                    <div className="popup pop right">
                      <PriceSlider
                        values={values.cgpa}
                        handleChange={(e) => {
                          handleSliderChange(e, "cgpa");
                        }}
                        min={rangeCg[values.scale][0]}
                        max={rangeCg[values.scale][1]}
                      />
                      <select
                        name="cg-scale"
                        id=""
                        onChange={(e) => {
                          console.log(e.target.value);
                          setValues({
                            ...values,
                            ["scale"]: e.target.value,
                            ["cgpa"]: rangeCg[e.target.value],
                          });
                        }}
                        value={values.scale}
                      >
                        <option value={0}>4 Scale</option>
                        <option value={1}>10 Scale</option>
                        <option value={2}>100 Scale</option>
                      </select>
                      <button
                        className="button"
                        onClick={() => {
                          sendQuery(["cgpa"]);
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
                      backgroundColor: existsParam("cgpa")
                        ? colors["cgpa"]
                        : "transparent",
                    }}
                  ></div>
                </th>
                <Slider
                  handleSliderChange={handleSliderChange}
                  objDef={objDef}
                  values={values}
                  param={"work_exp"}
                  sendQuery={sendQuery}
                  pop={pop}
                  setPop={setPop}
                  existsParam={existsParam}
                  color={colors.work_exp}
                  head={"Work Ex"}
                  n={11}
                  rows={2}
                  normal={true}
                  sortRow={sortRow}
                  right={true}
                />
                <Slider
                  handleSliderChange={handleSliderChange}
                  objDef={objDef}
                  values={values}
                  param={"papers"}
                  normal={true}
                  existsParam={existsParam}
                  color={colors.papers}
                  sendQuery={sendQuery}
                  pop={pop}
                  sortRow={sortRow}
                  setPop={setPop}
                  head={"Papers"}
                  n={18}
                  rows={2}
                  right={true}
                />
              </tr>
              <tr>
                <Slider
                  handleSliderChange={handleSliderChange}
                  objDef={objDef}
                  values={values}
                  param={"verbal"}
                  sendQuery={sendQuery}
                  head={"V"}
                  pop={pop}
                  rowParam={"gre_ver"}
                  sortRow={sortRow}
                  setPop={setPop}
                  n={6}
                  existsParam={existsParam}
                  color={colors.verbal}
                />
                <Slider
                  handleSliderChange={handleSliderChange}
                  objDef={objDef}
                  values={values}
                  rowParam={"gre_qua"}
                  param={"quants"}
                  sendQuery={sendQuery}
                  pop={pop}
                  sortRow={sortRow}
                  setPop={setPop}
                  head={"Q"}
                  n={7}
                  existsParam={existsParam}
                  color={colors.quants}
                />
                <Slider
                  handleSliderChange={handleSliderChange}
                  objDef={objDef}
                  values={values}
                  rowParam={"gre_awa"}
                  param={"awareness"}
                  sendQuery={sendQuery}
                  sortRow={sortRow}
                  pop={pop}
                  setPop={setPop}
                  head={"AWA"}
                  existsParam={existsParam}
                  color={colors.awareness}
                  n={8}
                />
                <Slider
                  handleSliderChange={handleSliderChange}
                  objDef={objDef}
                  values={values}
                  rowParam={"gre_tot"}
                  param={"gre_total"}
                  sortRow={sortRow}
                  sendQuery={sendQuery}
                  pop={pop}
                  setPop={setPop}
                  head={"TOTAL"}
                  existsParam={existsParam}
                  color={colors.gre_total}
                  n={9}
                />
                <th>
                  <div className="sortable">
                    <p style={{ fontSize: "0.625rem" }}>{"R"}</p>
                  </div>
                </th>
                <th>
                  <div className="sortable">
                    <p style={{ fontSize: "0.625rem" }}>{"S"}</p>
                  </div>
                </th>
                <th>
                  <div className="sortable">
                    <p style={{ fontSize: "0.625rem" }}>{"L"}</p>
                  </div>
                </th>
                <th>
                  <div className="sortable">
                    <p style={{ fontSize: "0.625rem" }}>{"W"}</p>
                  </div>
                </th>
                <EngInput
                  head={"TOTAL"}
                  n={13}
                  pop={pop}
                  setPop={setPop}
                  handleSliderChange={handleSliderChange}
                  type={"tot"}
                  values={values}
                  objDef={objDef}
                  existsParam={existsParam}
                  color={colors.tot}
                  sendQuery={sendQuery}
                />
              </tr>
            </thead>
            <tbody>
              {rows.length > 0 ? (
                <>
                  {rows.map((row, i) => {
                    if (i >= start && i <= end) {
                      return (
                        <tr
                          className={
                            row.decision === "rejected"
                              ? "table-row reject-row"
                              : "table-row admit-row"
                          }
                        >
                          <td
                            className="click"
                            style={{ width: "10.7rem" }}
                            onClick={() => {
                              setAppliedFilters({
                                ...appliedFilters,
                                ["uni"]: row.uni,
                              });
                              setValues({ ...values, ["uni"]: row.uni });
                            }}
                          >
                            {row.uni}
                          </td>
                          <td
                            style={{ width: "7.625rem" }}
                            className="click"
                            onClick={() => {
                              setAppliedFilters({
                                ...appliedFilters,
                                ["course"]: row.course,
                              });
                              setValues({ ...values, ["course"]: row.course });
                            }}
                          >
                            {row.course}
                          </td>
                          <td
                            className="click"
                            onClick={() => {
                              setAppliedFilters({
                                ...appliedFilters,
                                ["decision"]:
                                  row.decision !== "rejected"
                                    ? [true, false]
                                    : [false, true],
                              });
                              setValues({
                                ...values,
                                ["decision"]:
                                  row.decision !== "rejected"
                                    ? [true, false]
                                    : [false, true],
                              });
                            }}
                          >
                            <div
                              className={
                                row.decision === "rejected"
                                  ? "status reject"
                                  : "status accept"
                              }
                            >
                              {row.decision}
                            </div>
                          </td>
                          <td>
                            {row.intake} {row.year}
                          </td>
                          <td colSpan={4}>
                            <div className="gre">
                              <div
                                style={{
                                  backgroundColor: "#C990DD",
                                  borderRadius: "1rem 0 0 1rem",
                                }}
                              >
                                {row.gre_ver}
                              </div>
                              <div style={{ backgroundColor: "#A5ED8C" }}>
                                {row.gre_qua}
                              </div>
                              <div style={{ backgroundColor: "#FEFFBE" }}>
                                {row.gre_awa}
                              </div>
                              <div
                                style={{
                                  backgroundColor: "#BBFDFD",
                                  borderRadius: " 0 1rem 1rem 0",
                                }}
                              >
                                {row.gre_tot}
                              </div>
                            </div>
                          </td>
                          <td colSpan={5}>
                            <div className="eng">
                              <Graph param={row.eng_rea} color={"#E8AA42"} />
                              <Graph param={row.eng_spe} color={"#9986BC"} />
                              <Graph param={row.eng_lis} color={"#FE98BD"} />
                              <Graph param={row.eng_wri} color={"#C5BF39"} />
                              <div style={{ width: "0.5rem" }}></div>
                              <PieChart
                                percentage={
                                  row.eng_tot > 9
                                    ? row.eng_tot / 1.2
                                    : (row.eng_tot / 9) * 100
                                }
                                text={row.eng_tot}
                                colour={row.eng_tot > 9 ? "#4EFF5F" : "#4E8AFF"}
                              />
                            </div>
                          </td>
                          <td
                            style={{ width: "10rem" }}
                            className="click"
                            onClick={() => {
                              setAppliedFilters({
                                ...appliedFilters,
                                ["clg"]: row.clg,
                              });
                              setValues({ ...values, ["clg"]: row.clg });
                            }}
                          >
                            {row.clg}
                          </td>
                          <td
                            style={{ width: "6.5rem" }}
                            className="click"
                            onClick={() => {
                              setAppliedFilters({
                                ...appliedFilters,
                                ["major"]: row.major,
                              });
                              setValues({ ...values, ["major"]: row.major });
                            }}
                          >
                            {row.major}
                          </td>
                          <td>
                            <PieChart
                              percentage={
                                row.cgpa > 4
                                  ? row.cgpa > 10
                                    ? row.cgpa
                                    : row.cgpa * 10
                                  : row.cgpa * 25
                              }
                              text={row.cgpa}
                              colour={"#C64EFF"}
                            />
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {row.work_exp} MO
                          </td>
                          <td style={{ textAlign: "center" }}>{row.papers}</td>
                        </tr>
                      );
                    } else {
                      return "";
                    }
                  })}
                </>
              ) : (
                <tr>
                  <td colSpan={18} style={{ textAlign: "center" }}>
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="load">
          <Ring size={40} lineWeight={5} speed={2} color="black" />
        </div>
      )}
      <div className="pagination">
        <button
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          Previous
        </button>
        {pages}{" "}
        <button
          onClick={() => {
            if (lastPg + 1 <= Math.ceil(rows.length / no_of_rows)) {
              setPage(page + 1);
            }
          }}
        >
          Next
        </button>
      </div>
      {/* <div className="toolsInfo">
        <p className="title">
          We Provide you tools to make your journey easier
        </p>
        <p className="subhead">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </p>
        <div className="tools">
          <Tool
            no={1}
            color={"red"}
            head={"Admits and Reject Tool"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Learn more"
            }
            setTool={setTool}
            images={images}
          />
          <Tool
            no={2}
            color={"blue"}
            head={"University Shortlisting Tool"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Learn more"
            }
            setTool={setTool}
            images={images}
          />
          <Tool
            no={3}
            color={"green"}
            head={"University Info Tool"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Learn more"
            }
            setTool={setTool}
            images={images}
          />
        </div>
        {tool === 0 ? (
          <>
            <div className="toolsInfo">
              <img src="" alt="" />
            </div>
          </>
        ) : (
          ""
        )}
      </div> */}
      <footer>
        <div>
          <p className="head">About Us</p>
          <p className="subhead">
            Unlock your path to academic success with ProApplicant. Our expert
            team of human writers crafts personalized, plagiarism-free
            application documents. Experience a collaborative approach, timely
            delivery, and utmost confidentiality. Let’s make your dreams a
            reality. Get started today!
          </p>
          <div className="socials">
            <a href="https://www.instagram.com/proapplicant/">
              <i className="fa-brands fa-instagram "></i>
            </a>
            <a href="https://chat.whatsapp.com/JsXe6diTuL1JcVzkqiC4uR">
              <i className="fa-brands fa-whatsapp "></i>
            </a>
          </div>
        </div>
        <div>
          <p className="head">Quick Links</p>
          <a href="/">Home</a>
          <a href="/">Services</a>
          <a href="/">Tools</a>
          <a href="/">Terms and Condition</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Return and Refunds Policy</a>
        </div>
        <div>
          <p className="head">Contact Us</p>
          <p>mail: proapplicantsubs@gmail.com</p>
          <p className="underline">Sales Contact:</p>
          <p>+91 73960 66774</p>
          <p className="underline">Support contact:</p>
          <p>+91 7995461772</p>
          <p>+91 96523 54388</p>
        </div>
      </footer>
    </div>
  );
}

const ToolDesc = ({}) => {};

const Tool = ({ color, head, desc, no, setTool, images }) => {
  return (
    <div
      className={`tool tool-${color}`}
      onMouseEnter={() => {
        setTool(no - 1);
      }}
      onMouseLeave={() => {
        setTool(-1);
      }}
    >
      <img src={images[no - 1]} alt="" />
      <p className="tool-head">{head}</p>
      <p className="desc">{desc}</p>
      <p className="read">Read More</p>
    </div>
  );
};

export default App;
