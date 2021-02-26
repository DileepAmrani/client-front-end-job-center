import React, { useState } from "react";
import { CalendarToday, Close } from "@material-ui/icons";
import Dialog from "@material-ui/core/Dialog";
import { Navbar } from "./../../Components";
import {
  makeStyles,
  Container,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import {
  DropDown,
  ActivityChart,
  JobsStatisticsChart,
  CommunicationChart,
  EmployesChart,
  ResponsivenessChart,
} from "./../../Components";
import {
  VictoryLabel,
  VictoryPie,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLine,
  VictoryScatter,
} from "victory";
import cx from "clsx";

const useStyles = makeStyles((theme) => ({
  dashboard: {
    background: "#FAFAFC",
  },
  analyticsContainer: {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "8px",
    minHeight: "80vh",
  },
  dashboardHeader: {
    margin: "8px 0",
  },
  title: {
    fontSize: "26px",
    color: "#111E14",
    fontWeight: "500",
    textAlign: "left",
  },
  dateBox: {
    display: "flex",
    margin: "5px 0",
    alignItems: "center",
  },
  date: {
    fontSize: "13px",
    color: "rgba(17, 30, 20, 0.6)",
    marginLeft: "5px",
    fontWeight: "bold",
  },
  nav: {
    padding: "20px",
  },
  navList: {
    listStyle: "none",
  },
  navItem: {
    padding: "10px 0",
    color: "#adadad",
    cursor: "pointer",
    textAlign: "left",
  },
  navItemActive: {
    color: "black",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 20,
    margin: "20px 0",
    fontWeight: 500,
    textAlign: "left",
    display: "block",
  },
  headerBox: {
    display: "flex",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    color: "#111E14",
    fontWeight: 500,
    display: "block",
    paddingBottom: 10,
    flex: 1,
    textAlign: "left",
  },
  moreLink: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "16px",
    color: "#1D8A8B",
    cursor: "pointer",
  },
  chartBox: {
    border: "1px solid #D5D7DD",
    borderRadius: "10px",
    padding: "20px 10px",
  },
  insBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "5px 0",
  },
  insColor: {
    width: "15px",
    minHeight: "15px",
    backgroundColor: "red",
    borderRadius: "2px",
  },
  insText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "14px",
    display: "flex",
    alignItems: "center",
    color: "#111E14",
    paddingLeft: 8,
  },
  dialogBox: {
    padding: 25,
    width: 550,
  },
  dialogHeader: {
    display: "flex",
    alignItems: "center",
  },

  dialogHeading: {
    flex: 1,
  },
}));

const MySettings = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [radio, setRadio] = React.useState("applied");
  const graphicData = [{ y: 21 }, { y: 19 }, { y: 64 }];
  const graphicColor = [
    "#FF7675",
    "#1D8A8B",
    "#FFEAA7",
    "#6C5CE7",
    "#00CEC9",
    "#D63031",
    "#E84393",
    "#74B9FF",
  ];

  const [tabs, setTabs] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
    five: false,
  });



  return (
    <div className={classes.dashboard}>
      <Navbar dashboard={true} />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={3} md={12} sm={12} xs={12}>
            <h3> Placeholder of Left Section</h3>
          </Grid>

          <Grid item lg={9} md={12} sm={12} xs={12}>
            <div className={classes.dashboardHeader}>
              <div style={{ flex: 1 }}>
                <span className={classes.title}>My Analytics v3</span>
                <div className={classes.dateBox}>
                  <CalendarToday fontSize="inherit" color="inherit" />
                  <span className={classes.date}>December 1, 2020</span>
                </div>
              </div>
            </div>

            <div>
              <div className={classes.analyticsContainer}>
                <Grid container spacing={2}>
                  <Grid item lg={3} md={12} sm={12} xs={12}>
                    <div className={classes.nav}>
                      <ul className={classes.navList}>
                        <li
                          className={cx(
                            classes.navItem,
                            tabs.one ? classes.navItemActive : ""
                          )}
                          onClick={() =>
                            setTabs({
                              one: true,
                              two: false,
                              three: false,
                              four: false,
                              five: false,
                            })
                          }
                        >
                          Activity
                        </li>
                        <li
                          className={cx(
                            classes.navItem,
                            tabs.two ? classes.navItemActive : ""
                          )}
                          onClick={() =>
                            setTabs({
                              one: false,
                              two: true,
                              three: false,
                              four: false,
                              five: false,
                            })
                          }
                        >
                          Jobs Statistics
                        </li>
                        <li
                          className={cx(
                            classes.navItem,
                            tabs.three ? classes.navItemActive : ""
                          )}
                          onClick={() =>
                            setTabs({
                              one: false,
                              two: false,
                              three: true,
                              four: false,
                              five: false,
                            })
                          }
                        >
                          Communication
                        </li>
                        <li
                          className={cx(
                            classes.navItem,
                            tabs.four ? classes.navItemActive : ""
                          )}
                          onClick={() =>
                            setTabs({
                              one: false,
                              two: false,
                              three: false,
                              four: true,
                              five: false,
                            })
                          }
                        >
                          Employers
                        </li>
                        <li
                          className={cx(
                            classes.navItem,
                            tabs.five ? classes.navItemActive : ""
                          )}
                          onClick={() =>
                            setTabs({
                              one: false,
                              two: false,
                              three: false,
                              four: false,
                              five: true,
                            })
                          }
                        >
                          Responsiveness
                        </li>
                      </ul>
                    </div>
                  </Grid>
                  <Grid item lg={9} md={12} sm={12} xs={12}>
                    {/* ********* Activity SECTION ************ */}
                    <div style={{ padding: "20px 0" }}>
                      {tabs.one ? <ActivityChart /> : ""}

                      {/* ******* Jobs Statistics SECTION ****** */}

                      {tabs.two ? <JobsStatisticsChart /> : ""}

                      {/* ******* Communication SECTION ****** */}
                      {tabs.three ? <CommunicationChart /> : ""}

                      {/* ******* Employers SECTION ****** */}

                      {tabs.four ? <EmployesChart /> : ""}

                      {/* ******* Responsiveness SECTION ****** */}

                      {tabs.five ? <ResponsivenessChart /> : ""}
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MySettings;
