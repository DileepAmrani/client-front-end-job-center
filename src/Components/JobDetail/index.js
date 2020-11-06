import React from "react";
import Logo from "./../../Assets/companyLogo90x90.png";
import { BiTimeFive, BiMessageDetail } from "react-icons/bi";
import { MdVerifiedUser } from "react-icons/md";
import Grid from "@material-ui/core/Grid";
import Tabs from "./../Tabs";
import "./JobDetail.css";

export default function index() {
  return (
    <>
      <div className="jobDetail">
        <Grid container>
          <Grid item lg={2} md={12} sm={12} xs={12}>
          <img src={Logo} alt="" className="logo" width="90px" height="90px" />
          </Grid>
          <Grid item lg={10} md={12} sm={12} xs={12}>
          <div>
          <div className="detailSection">
            <div style={{ flex: 1 }}>
              <span className="name">Learning Experience Designer </span>
              <div style={{ padding: "10px 0", display: "flex" }}>
                <div className="detailContainer">
                  <span className="detail">Kartos</span>
                </div>
                <div className="detailContainer">
                  <MdVerifiedUser color="#1D8A8B" size={20} />
                  <span className="detail pl-5"> Applied 22d ago</span>
                </div>
              </div>

              <Grid container spacing={1}>
                <Grid item>
                  <div className="detailContainer">
                    <span className="detail">$75,000-95,000</span>{" "}
                  </div>
                </Grid>
                <Grid item>
                  <div className="detailContainer">
                    <BiTimeFive />
                    <span className="detail pl-5"> Full-time</span>
                  </div>
                </Grid>
                <Grid item>
                  <div className="detailContainer">
                    <BiTimeFive />
                    <span className="detail pl-5">Telecommute, On Site</span>
                  </div>
                </Grid>
                <Grid item>
                  <div className="detailContainer">
                    <BiTimeFive />
                    <span className="detail pl-5"> Master’s Degree</span>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div>
              <div>
                <span className="publishedOn">Active </span>
                <span className="publishedOn"> Applied 5h ago</span>
              </div>
              <div className="icon">
                <BiMessageDetail size={20} color="#111e14" />
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <Tabs />
          </div>
        </div>
          </Grid>
        </Grid>
        {/* <div>
        </div> */}

       
      </div>
    </>
  );
}
