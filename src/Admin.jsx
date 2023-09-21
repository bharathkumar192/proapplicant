import { useState, useEffect } from "react";
import "./Admin.scss";
import "./Add.scss";
import Cookies from "universal-cookie";
import UserDash from "./components/UserDash";
import AdmitsDash from "components/ApproveAdmitsDash";
import AdminDash from "./components/AdminDash";

const Admin = () => {
  const cookies = new Cookies();
  const [user, setUser] = useState({});
  const [freeUsers, setFreeUsers] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [displayAdmin, setDisplayAdmin] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [tab, setTab] = useState(0);
  const [tabs, setTabs] = useState(["Tool_1", "Tool_2", "Tool_3"]);
  const baseUrl = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(false);
  const [pop, setPop] = useState(-1);
  const [f, setF] = useState({ intake: [true, true, true, true] });
  const intakeTypes = ["fall", "summer", "spring", "winter"];
  const years = [2006, 2026];
  // console.log(tabs);

  // useEffect(() => {
  //   const getTabs = async () => {
  //     // const response = await fetch(`${process.env.REACT_APP_API_URL}/getTabs`)
  //     //   .then((data) => data.json())
  //     //   .then((data) => data);
  //     // setTabs(response);
  //   };
  //   getTabs();
  // }, []);

  const filters = (param, val) => {
    setF({ ...f, [param]: val });
  };

  const delUser = (id) => {
    fetch(`${baseUrl}/deleteUser/${id}`, {
      method: "DELETE",
    }).then(() => {
      alert("User deleted");
    });
  };

  useEffect(() => {
    setLoading(false);
  }, [users]);

  const getUsers = async () => {
    let response = await fetch(`${baseUrl}/usersByTool/Tool_${tab + 1}`)
      .then((data) => data.json())
      .then((data) => data);

    let users = await fetch(`${baseUrl}/freeUsers/Tool_${tab + 1}`)
      .then((data) => data.json())
      .then((data) => data);
    setFreeUsers(users);
    console.log(response);
    setUsers(response);
  };

  const getAdmins = async () => {
    let response = await fetch(`${baseUrl}/available-admins`)
      .then((data) => data.json())
      .then((data) => data);
    setAdmins(response);
  };

  useEffect(() => {
    let res = cookies.get("user");
    if (res !== undefined) {
      console.log(res);
      setUser(res);
      setSignedIn(true);
      getUsers();
      if (res.owner) {
        getAdmins();
      }
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [tab]);

  return (
    <>
      {!signedIn ? (
        <>
          <div className="login">
            <form
              className="form-add"
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                let { email, password } = e.target;
                fetch(`${baseUrl}/login`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                  }),
                })
                  .then((r) => r.json())
                  .then((r) => {
                    if (r.error) {
                      email.value = "";
                      password.value = "";
                      alert("Login Failed");
                    } else {
                      setUser(r.user);
                      if (r.userType === "owner") {
                        getAdmins();
                      }
                      setSignedIn(true);
                      cookies.set("user", r.user);
                      getUsers();
                    }
                  });
              }}
            >
              <div className="line">
                <p>Email</p>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  id=""
                />
              </div>
              <div className="line">
                <p>Password</p>
                <input required type="password" name="password" id="" />
              </div>
              <button type="submit">Log In</button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="tabs">
            {tabs.map((t, i) => {
              return (
                <p
                  className={i === tab ? "active" : ""}
                  onClick={() => {
                    setLoading(true);
                    setTab(i);
                  }}
                >
                  {t}
                </p>
              );
            })}
          </div>
          <UserDash loading={loading} tab={tab} userS={users} user={user} />
          {user.owner ? <AdminDash admins={admins} user={user} /> : ""}
          <AdmitsDash />
          <div style={{ margin: "2rem" }}>
            <p>Free Users</p>
            <table
              className="admits"
              style={{
                borderSpacing: 1,
                borderCollapse: "inherit",
                width: "fit-content",
                textAlign: "center",
              }}
            >
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
                          setFreeUsers(
                            freeUsers.filter((d) => {
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
                          setFreeUsers(
                            freeUsers.filter((d) => {
                              console.log(f);
                              if (d.email.startsWith(f.email)) {
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
                          setFreeUsers(
                            freeUsers.filter((d) => {
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
                          setFreeUsers(
                            freeUsers.filter((d) => {
                              console.log(f);
                              if (d.cust_id.includes(f.customerId)) {
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
                          setFreeUsers(
                            freeUsers.filter((d) => {
                              console.log(d.reference_id);
                              if (
                                d.reference_id.includes(f.ref.toUpperCase())
                              ) {
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
                <th>Intake</th>
                <th>Revoke</th>
              </tr>
              {freeUsers.map((freeUser) => {
                return (
                  <tr>
                    <td>{freeUser.cust_name}</td>
                    <td>{freeUser.email}</td>
                    <td>{freeUser.phnum}</td>
                    <td>{freeUser.cust_id}</td>
                    <td>{freeUser.reference_id}</td>
                    <td>
                      {freeUser.intake || "spring"} {freeUser.year || 2023}
                    </td>
                    <td>
                      <button
                        className="ban"
                        onClick={() => {
                          delUser(freeUser._id);
                        }}
                      >
                        Ban
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Admin;
