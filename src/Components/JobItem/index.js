import React from "react";
import Logo from "./../../Assets/companyLogoOne.png";
import { BsBookmark } from "react-icons/bs";
import "./JobItem.css";
export default function index() {
  return (
    <div className="card">
      <div>
        <img src={Logo} alt="" className="logo" />
      </div>
      <div style={{ flex: 1, padding: "5px" }}>
        <span className="name">Senior Product Designer </span>
        <span className="address">Delta Dental, Oakland, CA </span>
        <span className="salary">$80,000+, </span>
        <span className="type">Full-time </span>
      </div>
      <div>
        <span className="publishedOn">10m ago</span>
        <div className="icon">
          <BsBookmark size={20} color="#111e14" />
        </div>
      </div>
    </div>
  );
}
