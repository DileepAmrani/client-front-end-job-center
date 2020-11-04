import React from "react";
import { Navbar, SearchInput, JobItem } from "./../../components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./jobCenter.css";
function JobCenter() {
  return (
    <div className="jobCenter">
      <Container maxWidth="xl">
        <Navbar />
        <Grid container spacing={4}>
          <Grid item lg={4} md={12} sm={12} xs={12} style={{ padding: "0 4%" }}>
            <SearchInput />
            <div className="searchItemsContainer">
              <div className="header">
                <div style={{ flex: 1 }}>
                  <span>47 Jobs Found</span>
                </div>
                <div style={{ flex: 1, justifyContent: "flex-end" }}>
                  <span>47 Jobs Found</span>
                </div>
              </div>
              <div className="searchItems">
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
              </div>
            </div>
          </Grid>
          <Grid item lg={8} md={12} sm={12} xs={12}>
            <Paper>xs=6</Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default JobCenter;
