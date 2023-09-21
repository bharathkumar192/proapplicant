import { useState, useEffect } from "react";
import "./UserDash.scss";
import PriceSlider from "./Price";
import DatePickerView from "./DatePicker";
import { AutoComplete } from "primereact/autocomplete";

const UserDash = ({ userS, user, tab, loading }) => {
  const admin = user.name;
  console.log(admin);
  const [value, setValues] = useState({
    type: "Paid",
    duration: "1 Month",
    email: "",
  });
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [increase, setIncrease] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [f, setF] = useState({
    year: [2006, 2026],
    intake: [true, true, true, true],
  });
  const intakeTypes = ["fall", "summer", "spring", "winter"];
  const years = [2006, 2026];
  const [pop, setPop] = useState(-1);
  const [hints, setHints] = useState([]);
  const [hint, setHint] = useState(hints);
  const [softban, setSoftBan] = useState(-1);
  const getHints = (e) => {
    setHint(
      hints.filter((el) => el.toLowerCase().startsWith(e.query.toLowerCase()))
    );
  };
  const [users, setUsers] = useState([]);
  const [refModal, setRefModal] = useState("");
  const baseUrl = process.env.REACT_APP_API_URL;
  const [durationVal, setDurationVal] = useState({
    type: "Days",
    default: "true",
  });

  useEffect(() => {
    setUsers(userS);
  }, [userS]);
  console.log(value);
  useEffect(() => {
    const getEmailOfUsers = async () => {
      const d = await fetch(`${baseUrl}/emailUsers/Tool_${tab + 1}`)
        .then((data) => data.json())
        .then((data) => data);
      setHints(d.map((u) => u.email));
      setHint(d.map((u) => u.email));
    };
    getEmailOfUsers();
  }, [tab, baseUrl]);

  const dateParam = (val, val2) => {
    let startDate = new Date(val);
    let startMonth = startDate.getMonth();
    let startYear = startDate.getFullYear();
    let month = val2["$M"];
    let year = val2["$y"];
    console.log(month, " ", startMonth);
    console.log(year, " ", startYear);
    if (month === startMonth && year === startYear) {
      return true;
    } else {
      return false;
    }
  };

  const change = (val, param) => {
    setValues({ ...value, [param]: val });
  };

  const filters = (param, val) => {
    setF({ ...f, [param]: val });
  };

  const getDate = (d) => {
    let startDate = new Date(d);
    return startDate.toString().split("GMT")[0];
  };
  const getUserByMail = async (e) => {
    let sendReq = false;
    hints.forEach((h) => {
      if (h.includes(e)) {
        sendReq = true;
      }
    });
    if (sendReq) {
      let d = await fetch(`${baseUrl}/user/${e}`)
        .then((data) => data.json())
        .then((d) => d);
      console.log(d);
      if (d) {
        setValues({
          ...value,
          name: d.cust_name,
          email: d.email,
          cust_id: d.cust_id,
        });
      }
    }
  };

  const delUser = (id) => {
    fetch(`${baseUrl}/deleteUser/${id}`, {
      method: "DELETE",
    }).then(() => {
      alert("User deleted");
    });
  };

  return (
    <>
      <div className="parent">
        <table
          className="admits paidUsers"
          style={{
            borderSpacing: 1,
            borderCollapse: "inherit",
            width: "fit-content",
            margin: "2rem",
          }}
        >
          <thead>
            <tr>
              <th>
                <span onClick={() => (pop === 0 ? setPop(-1) : setPop(0))}>
                  Name
                </span>
                {pop === 0 ? (
                  <div className="popup pop">
                    <input
                      className="input"
                      value={f["name"] || ""}
                      type="text"
                      placeholder="Name"
                      onChange={(e) => {
                        filters("name", e.target.value);
                      }}
                    />
                    <button
                      className="button"
                      onClick={() => {
                        setUsers(
                          userS.filter((d) => {
                            console.log(d);
                            console.log(f);
                            if (d.cust_name.includes(f.name)) {
                              return d;
                            } else {
                              return false;
                            }
                          })
                        );
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
              <th>
                <span onClick={() => (pop === 1 ? setPop(-1) : setPop(1))}>
                  Email
                </span>
                {pop === 1 ? (
                  <div className="popup pop">
                    <input
                      className="input"
                      value={f["email"] || ""}
                      type="text"
                      placeholder="Email"
                      onChange={(e) => {
                        filters("email", e.target.value);
                      }}
                    />
                    <button
                      className="button"
                      onClick={() => {
                        setUsers(
                          users.filter((d) => {
                            console.log(f);
                            if (d.email.includes(f.email)) {
                              return d;
                            } else {
                              return false;
                            }
                          })
                        );
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
              <th>
                <span onClick={() => (pop === 7 ? setPop(-1) : setPop(7))}>
                  Phone No
                </span>
                {pop === 7 ? (
                  <div className="popup pop">
                    <input
                      type="tel"
                      className="input"
                      value={f["ph_no"] || ""}
                      placeholder="Phone Number"
                      onChange={(e) => {
                        filters("ph_no", e.target.value);
                      }}
                    />
                    <button
                      className="button"
                      onClick={() => {
                        setUsers(
                          users.filter((d) => {
                            console.log(f);
                            if (d.phnum === f.ph_no) {
                              return true;
                            } else {
                              return false;
                            }
                          })
                        );
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
              <th>
                <span onClick={() => (pop === 8 ? setPop(-1) : setPop(8))}>
                  Customer Id
                </span>
                {pop === 8 ? (
                  <div className="popup pop">
                    <input
                      type="text"
                      className="input"
                      value={f["customerId"] || ""}
                      placeholder="Customer Id"
                      onChange={(e) => {
                        filters("customerId", e.target.value);
                      }}
                    />
                    <button
                      className="button"
                      onClick={() => {
                        setUsers(
                          users.filter((d) => {
                            console.log(f);
                            if (d.cust_id === f.customerId) {
                              return true;
                            } else {
                              return false;
                            }
                          })
                        );
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
              <th>
                <span onClick={() => (pop === 9 ? setPop(-1) : setPop(9))}>
                  Referral Id
                </span>
                {pop === 9 ? (
                  <div className="popup pop">
                    <input
                      type="text"
                      className="input"
                      value={f["ref"] || ""}
                      placeholder="Referral Id"
                      onChange={(e) => {
                        filters("ref", e.target.value);
                      }}
                    />
                    <button
                      className="button"
                      onClick={() => {
                        setUsers(
                          users.filter((d) => {
                            console.log(f);
                            if (d.reference_id === f.ref) {
                              return true;
                            } else {
                              return false;
                            }
                          })
                        );
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
              <th>
                <span onClick={() => (pop === 6 ? setPop(-1) : setPop(6))}>
                  Type
                </span>
                {pop === 6 ? (
                  <div className="popup pop">
                    <select
                      name="type"
                      id=""
                      onChange={(e) => {
                        console.log(e.target.value);
                        setF({ ...f, type: e.target.value });
                      }}
                      value={f.type}
                    >
                      <option value="Paid">Paid</option>
                      <option value="Unpaid">Unpaid</option>
                      <option value="Referral">Referral</option>
                      <option value="Friend">Friend</option>
                    </select>
                    <button
                      className="button"
                      onClick={() => {
                        setUsers(
                          users.filter((d) => {
                            if (d.type === f.type) {
                              return true;
                            } else {
                              return false;
                            }
                          })
                        );
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
              <th>
                <span
                  onClick={() => {
                    pop === 10 ? setPop(-1) : setPop(10);
                  }}
                >
                  Intake
                </span>

                {pop === 10 ? (
                  <div className="popup pop">
                    {intakeTypes.map((type, i) => {
                      return (
                        <div className="line">
                          <input
                            className="check input"
                            type="checkbox"
                            checked={f.intake[i]}
                            id={`${type}`}
                            onChange={(e) => {
                              let intakes = f.intake;
                              intakes[i] = !intakes[i];
                              setF({ ...f, intake: intakes });
                            }}
                          />
                          <label htmlFor={`${type}`}>{type}</label>
                        </div>
                      );
                    })}
                    <PriceSlider
                      values={[f.year[0] || 2006, f.year[1] || 2024]}
                      handleChange={(change) => {
                        setF((f) => {
                          let c = { ...f };
                          c.year[0] = change[0];
                          c.year[1] = change[1];
                          return c;
                        });
                      }}
                      min={years[0]}
                      max={years[1]}
                    />
                    <button
                      className="button"
                      onClick={() => {
                        setUsers(
                          users.filter((d) => {
                            let active = false;
                            intakeTypes.map((intake, i) => {
                              if (intake === d.intake && f.intake[i]) {
                                active = true;
                              }
                            });
                            if (active) {
                              return true;
                            } else {
                              return false;
                            }
                          })
                        );
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
              <th>
                <span
                  onClick={() => {
                    pop === 11 ? setPop(-1) : setPop(11);
                  }}
                >
                  Added By
                </span>
                {pop === 11 ? (
                  <div className="popup pop">
                    <input
                      type="text"
                      className="input"
                      value={f.admin_name}
                      placeholder="Admin Name"
                      onChange={(e) => {
                        filters("admin_name", e.target.value);
                      }}
                    />
                    <button
                      className="button"
                      onClick={() => {
                        setUsers(
                          users.filter((d) => {
                            console.log(f);
                            console.log(d);
                            if (d.admin_name.startsWith(f.admin_name)) {
                              return true;
                            } else {
                              return false;
                            }
                          })
                        );
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
              <th>View Referrals</th>
              <th>
                <span
                  onClick={() => {
                    pop === 12 ? setPop(-1) : setPop(12);
                  }}
                >
                  Referee Id
                </span>
                {pop === 12 ? (
                  <div className="popup pop">
                    <input
                      type="text"
                      className="input"
                      value={f.referred_by}
                      placeholder="Referee Id"
                      onChange={(e) => {
                        filters("referred_by", e.target.value);
                      }}
                    />
                    <button
                      className="button"
                      onClick={() => {
                        setUsers(
                          users.filter((d) => {
                            console.log(f);
                            console.log(d);
                            if (d.referred_by === f.referred_by) {
                              return true;
                            } else {
                              return false;
                            }
                          })
                        );
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
              <th>
                <div className="sortable">
                  <p
                    style={{ fontSize: "0.75rem" }}
                    onClick={() => {
                      pop === 13 ? setPop(-1) : setPop(13);
                    }}
                  >
                    Amount
                  </p>

                  <div className="sort">
                    <i
                      className="fa-solid fa-chevron-up"
                      onClick={() => {
                        let res = users.sort(
                          (a, b) =>
                            b.subscriptions[`Tool_${tab + 1}`].amt -
                            a.subscriptions[`Tool_${tab + 1}`].amt
                        );
                        console.log(res);
                        setUsers([...res]);
                      }}
                    ></i>
                    <i
                      className="fa-solid fa-chevron-down"
                      onClick={() => {
                        setUsers([
                          ...users.sort(
                            (a, b) =>
                              a.subscriptions[`Tool_${tab + 1}`].amt -
                              b.subscriptions[`Tool_${tab + 1}`].amt
                          ),
                        ]);
                      }}
                    ></i>
                  </div>
                </div>
              </th>
              <th>
                <span onClick={() => (pop === 3 ? setPop(-1) : setPop(3))}>
                  Start
                </span>
                {pop === 3 ? (
                  <div className="popup">
                    <DatePickerView
                      val={f.startDate}
                      setVal={(e) => setF({ ...f, startDate: e })}
                    />
                    <button
                      className="button"
                      onClick={() => {
                        if (f.startDate) {
                          setUsers(
                            users.filter((u, i) => {
                              return dateParam(u.startDate, f.startDate);
                            })
                          );
                          setPop(-1);
                        }
                      }}
                    >
                      Apply
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </th>
              <th>
                <span onClick={() => (pop === 2 ? setPop(-1) : setPop(2))}>
                  Duration
                </span>
                {pop === 2 ? (
                  <div className="popup">
                    <PriceSlider
                      values={f.duration_range || [0, 50]}
                      handleChange={(e) => {
                        setF({ ...f, duration_range: e });
                      }}
                      min={0}
                      max={50}
                    />
                    <select
                      name="cg-scale"
                      id=""
                      onChange={(e) => {
                        console.log(e.target.value);
                        setF({ ...f, duration_type: e.target.value });
                      }}
                      value={f.duration_type}
                    >
                      <option value={"day"}>Days</option>
                      <option value={"week"}>Weeks</option>
                      <option value={"month"}>Months</option>
                      <option value={"year"}>Years</option>
                    </select>
                    <button
                      className="button"
                      onClick={() => {
                        let res = users.filter((u) => {
                          let duration_type = u.duration.split(" ")[1];
                          let d = duration_type.toLowerCase().split("s")[0];
                          if (
                            d === f.duration_type &&
                            u.duration.split(" ")[0] >= f.duration_range[0] &&
                            u.duration.split(" ")[0] <= f.duration_range[1]
                          ) {
                            return true;
                          } else {
                            return false;
                          }
                        });
                        setUsers(res);
                      }}
                    >
                      Apply
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </th>
              <th>
                <span onClick={() => (pop === 4 ? setPop(-1) : setPop(4))}>
                  End
                </span>
                {pop === 4 ? (
                  <div className="popup">
                    <DatePickerView
                      val={f.endDate}
                      setVal={(e) => setF({ ...f, endDate: e })}
                    />
                    <button
                      className="button"
                      onClick={() => {
                        if (f.endDate) {
                          setUsers(
                            users.filter((u, i) => {
                              return dateParam(u.endDate, f.endDate);
                            })
                          );
                          setPop(-1);
                        }
                      }}
                    >
                      Apply
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </th>
              <th>Revoke</th>
              <th>Increase/Decrease</th>
              <th>Soft Ban</th>
            </tr>
          </thead>
          <tbody className="userDash">
            {users.length > 0 && loading === false ? (
              <>
                {users.map((u, i) => {
                  console.log(u);
                  let startDate = new Date(
                    u.subscriptions[`Tool_${tab + 1}`].joinedAt
                  );
                  let endDate = new Date(
                    u.subscriptions[`Tool_${tab + 1}`].expiryDate
                  );
                  return (
                    <tr key={i}>
                      <td>{u.cust_name}</td>
                      <td>{u.email}</td>
                      <td>{u.phnum}</td>
                      <td>{u.cust_id}</td>
                      <td>{u.reference_id}</td>
                      <td
                        className="click"
                        onClick={() => {
                          setUsers(users.filter((d) => d.type === u.type));
                        }}
                      >
                        {u.type}
                      </td>
                      <td>
                        {u.intake || "Spring"} {u.year || "2023"}
                      </td>
                      <td
                        className="click"
                        onClick={() => {
                          setUsers(
                            users.filter((d) => d.admin_name === u.admin_name)
                          );
                        }}
                      >
                        {u.admin_name}
                      </td>
                      <td style={{ cursor: "pointer" }}>
                        <span
                          onClick={() => {
                            setUsers(
                              users.filter((v, i) => {
                                if (v.referred_by === u.reference_id) {
                                  return true;
                                } else {
                                  return false;
                                }
                              })
                            );
                            setRefModal(u.reference_id);
                          }}
                        >
                          View
                        </span>
                      </td>
                      <td style={{ cursor: "pointer" }} className="click">
                        <span
                          onClick={() => {
                            setUsers(
                              users.filter((v) => {
                                if (u.referred_by === v.reference_id) {
                                  return true;
                                } else {
                                  return false;
                                }
                              })
                            );
                          }}
                        >
                          {u.referred_by}
                        </span>{" "}
                      </td>
                      <td>{u.subscriptions[`Tool_${tab + 1}`].amt || 0} INR</td>
                      <td>{startDate.toString().split("GMT")[0]}</td>
                      <td>{u.subscriptions[`Tool_${tab + 1}`].duration}</td>
                      <td>{endDate.toString().split("GMT")[0]}</td>

                      <td
                        style={{ textAlign: "center" }}
                        onClick={() => {
                          if (u.admin_name === admin) {
                            delUser(u.cust_id);
                          } else {
                            alert("You are not the assigned Admin");
                          }
                        }}
                      >
                        <button className="revoke">X</button>
                      </td>
                      <td>
                        <div className="row">
                          <i
                            className="fa-solid fa-clock"
                            style={{ color: "#7ED321", display: "block" }}
                            onClick={() => {
                              if (u.admin_name === admin) {
                                setEdit(true);
                                setEditId(i);
                                setIncrease(true);
                              } else {
                                alert("You are not the assigned Admin");
                              }
                            }}
                          ></i>
                          <i
                            className="fa-solid fa-clock"
                            style={{ color: "#F44336" }}
                            onClick={() => {
                              if (u.admin_name === admin) {
                                setEdit(true);
                                setEditId(i);
                                setIncrease(false);
                              } else {
                                alert("You are not the assigned Admin");
                              }
                            }}
                          ></i>
                        </div>
                      </td>
                      <td
                        style={{ textAlign: "center" }}
                        onClick={() => {
                          if (u.admin_name === admin) {
                            setSoftBan(i);
                          } else {
                            alert("You are not the assigned Admin");
                          }
                        }}
                      >
                        View
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <tr>
                <td colSpan={14} style={{ textAlign: "center" }}>
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => {
          setModal(true);
        }}
        className="action addUser"
      >
        Add User
      </button>
      {refModal !== "" ? (
        <>
          <div className="refModal">
            <div className="modal" style={{}}>
              <div
                style={{ cursor: "pointer" }}
                className="ref"
                onClick={() => {
                  setUsers(userS);
                  setRefModal("");
                }}
              >
                X
              </div>
              <table style={{ minWidth: "fit-content", width: "fit-content" }}>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Customer Id</th>
                </tr>
                {users.map((u) => {
                  return (
                    <tr>
                      <td>{u.cust_name}</td>
                      <td>{u.email}</td>
                      <td>{u.cust_id}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {modal ? (
        <form
          className="form-smart newUser"
          action=""
          onSubmit={async (e) => {
            e.preventDefault();
            let { startDate, duration, name, type, email, ref } = e.target;
            let date = new Date(startDate.value);
            console.log(date.getTime());
            let i = duration.value.split(" ");
            let multiplier = 1;
            if (i[1] === "Year") {
              multiplier = 12;
            } else if (i[1] === "Days") {
              multiplier = 1 / 30;
            } else if (i[1] === "Week") {
              multiplier = 1 / 4;
            }
            let endDate =
              parseInt(i[0]) * multiplier * 30 * 24 * 60 * 60 * 1000 +
              date.getTime();
            let newUser = {
              admin_name: user.name,
              referred_by: ref.value,
              type: type.value,
              subscriptions: {
                [`Tool_${tab + 1}`]: {
                  joinedAt: date.getTime(),
                  expiryDate: endDate,
                  duration: duration.value,
                  amt: value.amt,
                  proDaysLeft: Math.floor(
                    (endDate - date.getTime()) / (24 * 60 * 60 * 1000)
                  ),
                },
              },
            };
            fetch(`${baseUrl}/editUser/${value.cust_id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...newUser }),
            })
              .then((data) => data.json())
              .then((data) => {
                if (data.error) {
                  console.log(data.error);
                }
              });

            setModal(false);
            setValues({ type: "Paid", duration: "1 Month" });
          }}
        >
          <div className="modal addUserModal">
            <div className="line">
              <div>
                <p>Name</p>
                <input
                  required
                  type="text"
                  value={value.name || ""}
                  onChange={(e) => {
                    change(e.target.value, "name");
                  }}
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div required>
                <p>Email</p>
                <AutoComplete
                  forceSelection
                  suggestions={hint}
                  value={value.email || ""}
                  completeMethod={getHints}
                  className="input"
                  onChange={(e) => {
                    setValues({ ...value, email: e.value });
                    getUserByMail(e.value);
                  }}
                />
              </div>
            </div>
            <div className="line">
              <div>
                <p>Customer Id</p>
                <input
                  disabled
                  value={value.cust_id || ""}
                  type="text"
                  placeholder="Customer Id"
                />
              </div>
              <div>
                <p>Type</p>
                <select
                  required
                  name="type"
                  value={value.type}
                  onChange={(e) => {
                    change(e.target.value, "type");
                  }}
                  id=""
                >
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                  <option value="Referral">Referral</option>
                  <option value="Friend">Friend</option>
                </select>
              </div>
            </div>
            <div className="line">
              <div>
                <p>Duration</p>
                <select
                  required
                  name="duration"
                  value={value.duration}
                  onChange={(e) => {
                    change(e.target.value, "duration");
                  }}
                  id=""
                >
                  <option value="1 Week">1 Week</option>
                  <option value="15 Days">15 Days</option>
                  <option value="1 Month">1 Month</option>

                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months</option>
                  <option value="1 Year">1 Year</option>
                </select>
              </div>
              <div>
                <p>Referral Code</p>
                <input type="text" name="ref" placeholder="Referral Code" />
              </div>
            </div>
            <div className="line">
              <div>
                <p>Start Date</p>
                <input
                  required
                  type="date"
                  onChange={(e) => {
                    change(e.target.value, "startDate");
                  }}
                  name="startDate"
                  id=""
                />
              </div>
            </div>
            <div className="line">
              <p>Amount Paid</p>
              <input
                type="number"
                placeholder="0 INR"
                name="amt"
                required
                value={value.amt || ""}
                min={0}
                onChange={(e) => {
                  change(e.target.value, "amt");
                }}
                id=""
              />
            </div>
            <div className="line">
              <div>
                <p>Admin Name</p>
                <input type="text" value={user.name} disabled />
              </div>
            </div>
            <p
              className="x"
              onClick={() => {
                setModal(false);
                setValues({ ...value, name: "", email: "", cust_id: "" });
              }}
            >
              X
            </p>
            <div className="line">
              <button className="action" type="submit">
                Add
              </button>
            </div>
          </div>
        </form>
      ) : (
        ""
      )}
      {softban !== -1 ? (
        <>
          <form
            action=""
            onSubmit={async (e) => {
              e.preventDefault();
              const { ban } = e.target;
              const d = new Date();
              const timeInMs = d.getTime() + ban.value * 24 * 60 * 60 * 1000;
              let response = await fetch(
                `${baseUrl}/softBan/${users[softban]._id}`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    time: timeInMs,
                    tool: `Tool_${tab + 1}`,
                  }),
                }
              )
                .then((data) => data.json())
                .then((data) => data);
              if (response.error) {
                alert("Could not ban user");
              } else {
                alert(`Soft banned for ${ban.value} Day/s`);
              }
              setSoftBan(-1);
            }}
            className="form-smart newUser"
          >
            <div className="modal">
              <div className="line">
                <p>Duration Of Ban</p>
                <input
                  type="number"
                  min={1}
                  name="ban"
                  placeholder="In Days"
                  id=""
                />
              </div>
              <button className="action" type="submit">
                Apply
              </button>
              <p
                className="x"
                onClick={() => {
                  setSoftBan(-1);
                }}
              >
                X
              </p>
            </div>
          </form>
        </>
      ) : (
        ""
      )}
      {edit ? (
        <>
          <form
            action=""
            className="form-smart newUser"
            onSubmit={async (e) => {
              e.preventDefault();
              setEdit(false);
              let { duration } = e.target;
              let multiplier = 1;
              let no = 0;
              let period = "";
              if (duration) {
                let i = duration.value.split(" ");
                no = parseInt(i[0]);
                period = i[1];
              } else {
                no = durationVal.durationNo;
                period = durationVal.type;
              }
              if (period === "Years") {
                multiplier = 12;
              } else if (period === "Days") {
                multiplier = 1 / 30;
              } else if (period === "Weeks") {
                multiplier = 1 / 4;
              }
              let val = 0;
              let timeInMs = no * multiplier * 30 * 24 * 60 * 60 * 1000;
              if (!increase) {
                val =
                  users[editId].subscriptions[`Tool_${tab + 1}`].expiryDate -
                  timeInMs;
                console.log("val");
                if (
                  val -
                    users[editId].subscriptions[`Tool_${tab + 1}`].joinedAt <
                  0
                ) {
                  alert(
                    "Duration is shorter than decrease time specified. Select a lower value"
                  );
                  setEditId(-1);
                  return;
                }
              } else {
                console.log("hi");
                val =
                  users[editId].subscriptions[`Tool_${tab + 1}`].expiryDate +
                  timeInMs;
              }
              let tempD =
                Math.floor(
                  ((val -
                    users[editId].subscriptions[`Tool_${tab + 1}`].joinedAt) /
                    (1000 * 60 * 60 * 24 * 30)) *
                    10
                ) / 10;
              duration = `${tempD} Months`;
              let incUser = {
                ...users[editId].subscriptions[`Tool_${tab + 1}`],
              };
              incUser.duration = duration;
              incUser.expiryDate = val;
              await fetch(`${baseUrl}/editUser/${users[editId].cust_id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "Application/json",
                },
                body: JSON.stringify({
                  subscriptions: { [`Tool_${tab + 1}`]: incUser },
                }),
              });
              setEditId(-1);
            }}
          >
            <div className="modal">
              <div className="line">
                <p>Start Date</p>
                <input
                  type="text"
                  disabled
                  value={getDate(
                    users[editId].subscriptions[`Tool_${tab + 1}`].joinedAt
                  )}
                />
              </div>
              <div className="line">
                <p>End Date</p>
                <input
                  type="text"
                  disabled
                  value={getDate(
                    users[editId].subscriptions[`Tool_${tab + 1}`].expiryDate
                  )}
                />
              </div>
              <div className="line">
                <p>Task</p>
                <select
                  name="default"
                  id=""
                  value={durationVal.default || "true"}
                  onChange={(e) => {
                    setDurationVal({
                      ...durationVal,
                      default: e.target.value,
                    });
                  }}
                >
                  <option value="true">Default</option>
                  <option value="false">Custom</option>
                </select>
              </div>
              {durationVal.default === "true" ? (
                <div className="line">
                  <p>Duration</p>
                  <select
                    required
                    name="duration"
                    value={value.duration}
                    onChange={(e) => {
                      change(e.target.value, "duration");
                    }}
                    id=""
                  >
                    <option value="1 Weeks">1 Week</option>
                    <option value="15 Days">15 Days</option>
                    <option value="1 Months">1 Month</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="1 Years">1 Year</option>
                  </select>
                </div>
              ) : (
                <div className="line">
                  <input
                    type="number"
                    name="durationNo"
                    placeholder={`No Of ${durationVal.type}`}
                    id=""
                    value={durationVal.durationNo}
                    onChange={(e) => {
                      setDurationVal({
                        ...durationVal,
                        durationNo: e.target.value,
                      });
                    }}
                  />
                  <select
                    name="type"
                    value={durationVal.type}
                    onChange={(e) => {
                      setDurationVal({ ...durationVal, type: e.target.value });
                    }}
                    id=""
                  >
                    <option value="Days">Days</option>
                    <option value="Weeks">Weeks</option>
                    <option value="Months">Months</option>
                    <option value="Years">Years</option>
                  </select>
                </div>
              )}
              <button className="action" type="submit">
                Done
              </button>
              <p
                className="x"
                onClick={() => {
                  setEdit(false);
                }}
              >
                X
              </p>
            </div>
          </form>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default UserDash;
