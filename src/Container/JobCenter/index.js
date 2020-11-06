import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Navbar, SearchInput, DropDown, JobItem, Filterbar, JobDetail } from "./../../Components";
import "./JobCenter.css";

export default function index() {
  return (
    <div className="jobCenter">
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={3} md={12} sm={12} xs={12}>
            <div style={{ height: "60px" }}>
              <SearchInput />
            </div>
            <div className="jobsMainContainer" >
              
              <div className="header">
                <div style={{ flex: 1 }}>
                  <span className="jobsFound">47 Jobs Found</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", flex: 1, justifyContent: "flex-end" }}>
                  <span style={{padding: '0 8px', fontSize: "14px"}}>Sort by:</span> <DropDown name="Date" style={{  background: '#ffffff',  border: '1px solid #d5d7dd', borderRadius: "4px"}}/>
                </div>
              </div>

              <div className="searchItems">
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
              </div>
            </div>
          </Grid>
          <Grid item lg={9} md={12} sm={12} xs={12}>
            <div style={{ height: "60px" }}>
              <Filterbar />
            </div>

            <div >
                <JobDetail />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
