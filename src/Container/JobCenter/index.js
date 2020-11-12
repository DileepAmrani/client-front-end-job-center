import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { VerifiedUserRounded, Message } from "@material-ui/icons";
import Logo from "./../../Assets/companyLogo90x90.png";
import { AccessTime, Business, School } from "@material-ui/icons";
import Chip from "@material-ui/core/Chip";
import clsx from "clsx";

import {
  Navbar,
  SearchInput,
  DropDown,
  JobItem,
  FilterBar,
  Tabs,
} from "./../../Components";
import "./JobCenter.css";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  jobCenter: {
    background: "#FAFAFC",
  },
  chipBox: {
    marginTop: "10px",
    display: "flex",
  },
  chip: {
    margin: "2px",
    borderRadius: "0!important",
  },
  jobsMainContainer: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    marginTop: "10px",
  },
  header: {
    display: "flex",
    padding: "20px",
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
  searchItems: {
    maxHeight: "610px",
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      borderRadius: "5px",
    },
  },
  jobDetailContainer: {
    display: "flex",
    padding: "10px",
    flexDirection: "row",
    backgroundColor: "#fff",
    marginLeft: "20px",
    marginTop: "10px",
    borderRadius: "10px",
    overflowY: "scroll",
    maxHeight: "690px",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      borderRadius: "5px",
    },
  },
  logoSide: {
    padding: "10px",
  },
  jobContentContainer: {
    display: "flex",
    padding: "10px",
  },
  headingSection: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  heading: {
    display: "block",
    fontSize: "20px",
    fontWeight: "500",
    padding: "3px 0 0 0",
    color: "#111e14",
    flex: 1,
  },
  publishedOn: {
    color: "#1D8A8B",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: "11px",
    lineHeight: "12.89px",
  },
  verifyIcon: {
    color: "#1D8A8B",
    margin: "0 5px",
  },
  loctionContainer: {
    padding: "10px 0",
    display: "flex",
  },
  detailContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    paddingRight: "10px",
  },
  address: {
    fontSize: "16px",
    color: "#111e14",
    fontWeight: "500",
    letterSpacing: "0em",
  },
  appliedOn: {
    fontSize: "16px",
    fontWeight: "500",
    letterSpacing: "0em",
    color: "#1D8A8B",
  },
  detail: {
    fontSize: "14px",
    color: "#111e14",
    fontWeight: "500",
    margin: "1px",
    letterSpacing: "0em",
  },
  icons: {
    color: "#9B9E9C",
  },
  pl: {
    paddingLeft: "2px",
  },
  "@media (max-width: 800px)": {
    jobDetailContainer: {
      flexDirection: "column",
      padding: 0,
      margin: 0,
    },
  },
});

const JobCenter = () => {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const classes = useStyles();
  return (
    <div className={classes.jobCenter}>
      <Navbar home={true} />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={3} md={12} sm={12} xs={12}>
            <div>
              <SearchInput styles={{ backgroundColor: "#F0F2F6" }} />
            </div>
            <div className={classes.chipBox}>
              {chipData.map((data) => {
                let icon;
                return (
                  <div key={data.key}>
                    <Chip
                      icon={icon}
                      label={data.label}
                      onDelete={
                        data.label === "React" ? undefined : handleDelete(data)
                      }
                      className={classes.chip}
                      // style={{borderRadius: '0'}}
                    />
                  </div>
                );
              })}
            </div>
            <div className={classes.jobsMainContainer}>
              <div className={classes.header}>
                <div>
                  <span className={classes.jobsFound}>47 Jobs Found</span>
                </div>
                <div className={classes.sortBox}>
                  <span className={classes.sortText}>Sort by:</span>
                  <DropDown
                    title="Date"
                    border={true}
                    options={[
                      { value: "Date", label: "Date" },
                      { value: "Relevancy", label: "Relevancy" },
                    ]}
                  />
                </div>
              </div>
              <div className={classes.searchItems}>
                <JobItem />
                <JobItem active={true} />
                <JobItem bookMarked={true} />
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
            <div>
              <FilterBar />
            </div>

            <div className={classes.jobDetailContainer}>
              <div className={classes.logoSide}>
                <img src={Logo} alt="" className="logo" />
              </div>

              <div className={classes.jobContentContainer}>
                <div style={{ flex: 1 }}>
                  <div className={classes.headingSection}>
                    <span className={classes.heading}>
                      Learning Experience Designer
                    </span>
                    <div style={{ justifyContent: "flex-end" }}>
                      <span className={classes.publishedOn}>Active </span>
                      <span className={classes.publishedOn}>
                        Applied 5h ago
                      </span>
                    </div>
                  </div>

                  <div className={classes.loctionContainer}>
                    <span className={classes.address}>Kartos</span>
                    <VerifiedUserRounded className={classes.verifyIcon} />
                    <span className={classes.appliedOn}> Applied 22d ago</span>
                  </div>

                  <div style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>
                      <Grid container spacing={1}>
                        <Grid item>
                          <div className={classes.detailContainer}>
                            <span className={classes.detail}>
                              $75,000-95,000
                            </span>
                          </div>
                        </Grid>
                        <Grid item>
                          <div className={classes.detailContainer}>
                            <AccessTime
                              fontSize="inherit"
                              className={classes.icons}
                            />
                            <span className={clsx(classes.detail, classes.pl)}>
                              Full-time
                            </span>
                          </div>
                        </Grid>
                        <Grid item>
                          <div className={classes.detailContainer}>
                            <Business
                              fontSize="inherit"
                              className={classes.icons}
                            />
                            <span className={clsx(classes.detail, classes.pl)}>
                              Telecommute, On Site
                            </span>
                          </div>
                        </Grid>
                        <Grid item>
                          <div className={classes.detailContainer}>
                            <School
                              fontSize="inherit"
                              className={classes.icons}
                            />
                            <span className={clsx(classes.detail, classes.pl)}>
                              Master’s Degree
                            </span>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="icon">
                      <Message className={classes.icons} />
                    </div>
                  </div>
                  <div>
                    <Tabs />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default JobCenter;
