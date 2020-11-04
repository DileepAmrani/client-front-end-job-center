import React from "react";
import Logo from "./../../assets/companyLogoOne.png";
import { BsBookmark } from "react-icons/bs";
import {  BiTimeFive } from "react-icons/bi";
import Grid from "@material-ui/core/Grid";
import "./JobDetails.css";

export default function index() {
  return (
    <div className="jobDetail">
      <div>
        <img src={Logo} alt="" className="logo" width="90px" height="90px" />
      </div>
      <div className="detailSection">
        <div style={{ flex: 1 }}>
          <span className="name">Learning Experience Designer </span>
          <div style={{padding: "5px 0"}}>
            <span className="addres">Kartos</span>
            <span className="addres">Kartos</span>
          </div>
          {/* <span className="salary">$75,000 - 95,000 </span>
          <span className="type">Full-time </span> */}

          <Grid container spacing={1}>
            <Grid item>
              <span className="detail">$75,000-95,000 </span>
            </Grid>
            <Grid item>
              <span className="detail"> <BiTimeFive /> Full-time </span>
            </Grid>
            <Grid item>
              <span className="detail"> <BiTimeFive /> Telecommute, On Site</span>
            </Grid>
            <Grid item>
              <span className="detail"> <BiTimeFive /> Master’s Degree</span>
            </Grid>
          </Grid>
        </div>
        <div>
          <span className="publishedOn">10m ago</span>
          <div className="icon">
            <BsBookmark size={20} color="#111e14" />
          </div>
        </div>
      </div>
    </div>
  );
}
