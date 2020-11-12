import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { CalendarToday, HelpOutlineOutlined } from "@material-ui/icons";
import { Navbar, SearchInput, DropDown, JobCard } from "./../../Components";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import cx from 'clsx'
const useStyles = makeStyles((theme) => ({
  dashboard: {
    background: "#FAFAFC",
  },
  dashboardRightContainer: {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "8px",
  },

  dashboardHeader: {
    display: "flex",
    margin: "8px 0",
    alignItems: "center",
  },
  title: {
    fontSize: "26px",
    color: "#111E14",
    fontWeight: "500",
  },
  dateBox: {
    display: "flex",
    alignItems: "center",
    margin: "5px 0",
  },
  date: {
    fontSize: "13px",
    color: "rgba(17, 30, 20, 0.6)",
    marginLeft: "5px",
  },

  toggleBtnContainer: {
    margin: "5px"
  },
  groupBtn: {
    boxShadow: "none"
  },
  toggleBtn:{
    boxShadow: "none",
    borderRadius: "4px",
    textTransform: "none",
  },
  toggleBtnActive:{
    background: "#1D8A8B",
    color: "#fff",
    boxShadow: "none",
    borderRadius: "4px",
    textTransform: "none",
  },
  header: {
    display: "flex",
    padding: "10px",
    alignItems: "center",
  },
  jobsFound: {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "21px",
    letterSpacing: "0em",
  },
  sortBox: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  sortText: {
    padding: "0 8px",
    fontSize: "14px",
  },
}));

const JobCenter = () => {
  const classes = useStyles();

  return (
    <div className={classes.dashboard}>
      <Navbar dashboard={true}/>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={3} md={12} sm={12} xs={12}>
            <h3> Placeholder of Left Section</h3>
          </Grid>
          <Grid item lg={9} md={12} sm={12} xs={12}>
            <div className={classes.dashboardHeader}>
              <div style={{ flex: 1 }}>
                <span className={classes.title}>My Jobs</span>
                <div className={classes.dateBox}>
                  <CalendarToday fontSize="inherit" color="inherit" />
                  <span className={classes.date}>December 1, 2020</span>
                </div>
              </div>

              <div>
                <div className={classes.dateBox}>
                  <HelpOutlineOutlined />
                  <div className={classes.toggleBtnContainer}>
                    <ButtonGroup
                      variant="contained"
                      aria-label="contained button group"
                      className={classes.groupBtn}
                    >
                      <Button  className={cx(classes.toggleBtn, classes.toggleBtnActive)}>Saved</Button>
                      <Button className={cx(classes.toggleBtn, false ? classes.toggleBtnActive : "")}>Applied</Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.dashboardRightContainer}>
              <SearchInput styles={{ border: "1px solid #D5D7DD" }} />
              <div className={classes.header}>
                <div>
                  <span className={classes.jobsFound}>Saved 5 jobs</span>
                </div>
                <div className={classes.sortBox}>
                  <span className={classes.sortText}>Sort:</span>
                  <DropDown
                    title="Newest first"
                    border={true}
                    options={[
                      { value: "Newest first", label: "Newest first" },
                      { value: "Newest last", label: "Newest last" },
                    ]}
                  />
                </div>
              </div>
              <JobCard requestBox={true} />
              <JobCard />
              <JobCard />
              <JobCard memberBox={true} />
              <JobCard memberBox={true} noteBox={true} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default JobCenter;
