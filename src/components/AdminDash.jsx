import { useEffect, useState } from "react";

const AdminDash = ({ admins, user }) => {
  const [value, setValues] = useState({ type: "Paid", duration: "1 Month" });
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [refModal, setRefModal] = useState(-1);
  const baseUrl = process.env.REACT_APP_API_URL;
  const [users, setUsers] = useState([]);

  const delAdmin = async (id) => {
    let response = await fetch(`${baseUrl}/deleteAdmin/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((data) => data);
    if (response.error) {
      alert("Could not delete Admin");
    }
  };

  const toggleAccess = async (id) => {
    let response = await fetch(`${baseUrl}/toggle-admin-status/${id}`, {
      method: "POST",
    })
      .then((data) => data.json())
      .then((data) => data);
    if (response.error) {
      alert("Could not update Admin");
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      if (refModal !== -1) {
        let response = await fetch(
          `${baseUrl}/usersByAdmin/${admins[refModal].name}`
        )
          .then((d) => d.json())
          .then((d) => d);
        if (response.error) {
          alert(response.error);
        } else {
          setUsers(response);
        }
      }
    };
    getUsers();
  }, [refModal]);

  const updateAdmin = async (id, data) => {
    let response = await fetch(`${baseUrl}/update-admin/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    })
      .then((d) => d.json())
      .then((d) => d);
    console.log(response);
  };

  const change = (val, param) => {
    setValues({ ...value, [param]: val });
  };
  return (
    <>
      {refModal !== -1 ? (
        <>
          <div className="refModal">
            <div className="modal" style={{}}>
              <div
                style={{ cursor: "pointer" }}
                className="ref"
                onClick={() => {
                  setRefModal(-1);
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
      <table
        style={{
          textTransform: "initial",
          minWidth: "50rem",
          borderSpacing: 1,
          borderCollapse: "inherit",
          width: "fit-content",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Admin Id</th>
            <th>Password</th>
            <th>No Of Added Users</th>
            <th>View Users</th>
            <th>Revoke</th>
            <th>Ban</th>
          </tr>
        </thead>
        <tbody>
          {admins.length > 0 ? (
            <>
              {admins.map((u, i) => {
                console.log(u);
                return (
                  <tr
                    key={i}
                    style={{ backgroundColor: u.status ? "#fff" : "#ffbbbb" }}
                  >
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.phnum || "-"}</td>
                    <td>{u.admin_id}</td>
                    <td
                      style={{ textAlign: "center", cursor: "pointer" }}
                      onClick={() => {
                        setEditId(i);
                      }}
                    >
                      {u.password}
                    </td>
                    <td>{u.usersAdded || 0}</td>
                    <td
                      className="click"
                      onClick={() => {
                        setRefModal(i);
                      }}
                    >
                      View
                    </td>
                    <td
                      style={{ textAlign: "center" }}
                      onClick={() => {
                        toggleAccess(u.admin_id);
                      }}
                    >
                      <button className="revoke">X</button>
                    </td>
                    <td
                      style={{ textAlign: "center" }}
                      onClick={() => {
                        delAdmin(u._id);
                      }}
                    >
                      <button className="revoke">X</button>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            ""
          )}
        </tbody>
      </table>
      <button
        onClick={() => {
          setModal(true);
        }}
        className="action addUser"
      >
        Add Admin
      </button>
      {modal ? (
        <form
          className="form-smart newUser"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            fetch(`${baseUrl}/add-admin`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...value,
              }),
            });
            setModal(false);
            setValues({});
          }}
        >
          <div className="modal">
            <div required className="line">
              <p>Email</p>
              <input
                type="email"
                value={value.email || ""}
                onChange={(e) => {
                  change(e.target.value, "email");
                }}
                placeholder="Email"
                name="email"
              />
            </div>
            <div required className="line">
              <p>Name</p>
              <input
                type="text"
                value={value.name || ""}
                onChange={(e) => {
                  change(e.target.value, "name");
                }}
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="line">
              <p>Password</p>
              <input
                type="password"
                required
                placeholder="Password"
                value={value.password}
                onChange={(e) => {
                  change(e.target.value, "password");
                }}
              />
            </div>
            <div className="line">
              <p>Phone Number</p>
              <input
                type="tel"
                name=""
                placeholder="Phone Number"
                required
                value={value.phnum}
                onChange={(e) => {
                  change(e.target.value, "phnum");
                }}
                id=""
              />
            </div>
            <p
              className="x"
              onClick={() => {
                setModal(false);
              }}
            >
              X
            </p>
            <button className="action" type="submit">
              Add
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
      {editId !== -1 ? (
        <>
          <form
            action=""
            className="form-smart newUser"
            onSubmit={(e) => {
              e.preventDefault();
              let { password } = e.target;
              updateAdmin(admins[editId]._id, { password: password.value });
              setEditId(-1);
            }}
          >
            <div className="modal">
              <div className="line">
                <p>Password</p>
                <input
                  type="text"
                  placeholder="Edit Password"
                  name="password"
                />
              </div>
              <p
                className="x"
                onClick={() => {
                  setEditId(-1);
                }}
              >
                X
              </p>
              <button className="action" type="submit">
                Add
              </button>
            </div>
          </form>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminDash;
