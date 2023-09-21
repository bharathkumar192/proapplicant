import "./Nav.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = ({ pro, email, active }) => {
  const [customer, setCustomer] = useState({ cust_name: "" });
  const baseUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      let response = await fetch(`${baseUrl}/getUser/${email}`)
        .then((data) => data.json())
        .then((data) => data);
      if (response.error) {
      } else {
        console.log(response);
        setCustomer(response.user);
      }
    };
    getUser();
  }, [email]);
  return (
    <nav>
      <img
        src="https://proapplicant.com/wp-content/uploads/2023/07/Untitled-1080-%C3%97-1080-px-2160-%C3%97-1080-px-2160-%C3%97-800-px.svg"
        alt=""
      />
      <a href="https://proapplicant.com/">
        <p>Home</p>
      </a>
      <a href="https://proapplicant.com/services/">
        <p>Services</p>
      </a>
      <a href="/">
        <p style={{ color: active ? "#037039" : "black" }}>Admit-Reject Tool</p>
      </a>
      <a href="https://chat.whatsapp.com/JsXe6diTuL1JcVzkqiC4uR">
        <button className="act2">
          <i className="fa-brands fa-whatsapp"></i>Join Group
        </button>
      </a>
      {!pro ? (
        <a
          href="https://proapplicant.mojo.page/admits-and-rejects-premium-membership"
          className="pro"
          target="blank"
        >
          Get Pro
        </a>
      ) : (
        <button className="paid">Premium User</button>
      )}
      <div
        className="circle"
        style={{ color: "white", margin: "1rem 0", cursor: "pointer" }}
        onClick={() => {
          navigate("/profile");
        }}
      >
        {customer.cust_name.split("")[0]}
      </div>
    </nav>
  );
};

export default Nav;
