import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Profile = () => {
  const cookies = new Cookies();
  const [customer, setCustomer] = useState({
    cust_name: "",
    subscriptions: [],
    cust_id: "",
    reference_id: "",
  });
  const baseUrl = process.env.REACT_APP_API_URL;
  const [values, setValues] = useState({});

  const changeCustomer = async () => {
    let response = await fetch(`${baseUrl}/change-customer/${customer._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => data.json())
      .then((data) => data);
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [referrals, setReferrals] = useState([]);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let user = cookies.get("userMail");
    const getUser = async () => {
      let response = await fetch(`${baseUrl}/getUser/${user}`)
        .then((data) => data.json())
        .then((data) => data);
      if (response.error) {
      } else {
        setValues(response.user);
        setCustomer(response.user);
        setReferrals(response.refs);
      }
    };
    if (user) {
      getUser();
    } else {
      navigate("/signin");
    }
  }, []);

  return (
    <>
      {modal ? (
        <div className="form-smart">
          <form>
            <div className="line">
              <p>Name</p>
              <input
                type="text"
                name="cust_name"
                value={values.cust_name || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="line">
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={values.email || ""}
                onChange={handleInputChange}
                id=""
              />
            </div>
            <div className="line">
              <p>Phone Number</p>
              <input
                type="tel"
                name="phnum"
                value={values.phnum || ""}
                onChange={handleInputChange}
                id=""
              />
            </div>
            <div
              className="x"
              onClick={() => {
                setModal(false);
              }}
            >
              X
            </div>
            <div className="line">
              <button
                className="apply"
                onClick={() => {
                  changeCustomer();
                }}
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      <div className="profile">
        <div className="top">
          <div className="basicInfo">
            <p className="head">User Profile</p>
            <div className="row">
              <div className="circle">{customer.cust_name.split("")[0]}</div>
              <div>
                <p className="normal">{customer.cust_name}</p>
              </div>
            </div>
          </div>
          <div className="customerDetails">
            <div className="row" style={{ gap: "10rem" }}>
              <div className="column">
                <div className="column">
                  <p className="label">Customer Id</p>
                  <p className="content">{customer.cust_id}</p>
                </div>
                <div className="column">
                  <p className="label">Email</p>
                  <p className="content">{customer.email}</p>
                </div>
              </div>
              <div className="column">
                <div className="column">
                  <p className="label">Referral Id</p>
                  <p className="content">{customer.reference_id}</p>
                </div>
                <div className="column">
                  <p className="label">Phone Number</p>
                  <p className="content">{customer.phnum}</p>
                </div>
              </div>
            </div>
          </div>
          <img src="images/profile.svg" style={{ height: "70%" }} alt="" />
          <div
            className="edit"
            onClick={() => {
              setModal(true);
            }}
          >
            <i className="fa-solid fa-pencil"></i>
          </div>
        </div>
        <div className="details">
          <div className="sub-section">
            <p className="section-title">Subscriptions</p>
            <div className="subscriptions">
              {Object.keys(customer.subscriptions).map((key, i) => {
                let d = new Date(customer.subscriptions[key].expiryDate);
                let c = new Date(customer.subscriptions[key].joinedAt);
                let paid = false;
                if (
                  customer.subscriptions[key].expiryDate >
                  customer.subscriptions[key].joinedAt
                ) {
                  paid = true;
                }
                if (i === 0) {
                  return (
                    <div className="sub" key={i}>
                      <div>
                        <p className="tool-name">Admits/Rejects Tool</p>
                        <p>
                          <b>Start Date</b> : {c.toString().substring(0, 15)}
                        </p>
                        <p>
                          <b>End Date</b> : {d.toString().substring(0, 15)}
                        </p>
                      </div>
                      {paid ? (
                        <div className="paid">Premium</div>
                      ) : (
                        <div className="free">Free</div>
                      )}
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="refSection">
            <p className="section-title">Referrals</p>
            <div className="referrals">
              {referrals.length > 0 ? (
                referrals.map((referral) => {
                  return (
                    <div className="referral">
                      <div className="row">
                        <div className="circle small">
                          {referral.cust_name.split("")[0]}
                        </div>
                        <p>{referral.cust_name}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="referral">
                  <p>No Referrals Found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
