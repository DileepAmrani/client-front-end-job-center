import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {
  AccessTime,
  DateRange,
  School,
  AttachMoney,
  Message,
  BookmarkBorderOutlined,
  Close,
  Add,
  Bookmark,
  SpeakerNotes,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import {
  Navbar,
  SearchInputSeeker,
  DropDown,
  SeekerItem,
  MultiSelect,
} from "./../../Components";
import ReactPlayer from "react-player";
import Popover from "@material-ui/core/Popover";
import TextField from "@material-ui/core/TextField";

import PDF from "./../../Assets/illustration_pdf.png";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  jobCenter: {
    background: "#FAFAFC",
  },

  jobsMainContainer: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    marginTop: "10px",
  },
  header: {
    padding: "20px",
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
    marginTop: "5px",
  },
  sortText: {
    paddingRight: "4px",
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
  filterBar: {
    display: "flex",
    borderRadius: "4px",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  filterItem: {
    marginRight: "10px",
    minWidth: "170px",
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
    width: "100%",
  },
  headingSection: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  heading: {
    flex: 1,
    display: "block",
    fontSize: "20px",
    fontWeight: "500",
    padding: "3px 0 0 0",
    color: "#111e14",
    textAlign: "left",
  },
  publishedOn: {
    color: "#1D8A8B",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: "11px",
    lineHeight: "12.89px",
  },

  loctionContainer: {
    padding: "10px 0",
    display: "flex",
  },
  avatar: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
  detailContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    paddingRight: "10px",
  },

  appliedOn: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "19px",
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

  buttonBox: {
    marginTop: 12,
    display: "flex",
    paddingBottom: 12,
    borderBottom: "1px solid #F0F2F6",
  },
  reguestButton: {
    boxShadow: "none",
    background: "#FC821F",
    borderRadius: "4px",
    color: "#fff",
    padding: "10px",
    minWidth: 200,
    marginRight: 10,
    marginBottom: 5,
    textTransform: "none",
    fontSize: "15px",

    "&:hover": {
      backgroundColor: "#fc9b4b",
    },
  },

  messageButton: {
    boxShadow: "none",
    background: "#1D8A8B",
    borderRadius: "4px",
    color: "#fff",
    padding: "10px",
    minWidth: 200,
    marginRight: 10,
    marginBottom: 5,
    textTransform: "none",
    fontSize: "15px",

    "&:hover": {
      backgroundColor: "#4aa1a2",
    },
  },

  saveJobButton: {
    boxShadow: "none",
    borderRadius: "4px",
    backgroundColor: " #F0F2F6",
    padding: "10px",
    minWidth: 200,
    marginRight: 10,
    marginBottom: 5,
    textTransform: "none",
    color: "#000",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "#c0c1c4",
    },
  },

  popover: {
    padding: "10px",
    minWidth: "400px",
  },
  popHeading: {
    flex: 1,
    fontWeight: 700,
    fontSize: "16px",
    margin: "8px 0",
  },
  subHeading: {
    fontSize: "14px",
    fontWeight: "500",
    flex: 1,
    padding: 10,
  },
  textField: {
    width: "100%",
  },
  itemBox: {
    height: "160px",
    overflowY: "scroll",
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
  popItem: {
    display: "flex",
    alignItems: "center",
  },
  popItemMiddleSection: {
    flex: 1,
    padding: "5px",
    minWidth: "230px",
  },
  user: {
    fontSize: "16px",
    fontWeight: "500",
  },
  email: {
    fontSize: "14px",
  },
  popFooter: {
    flex: 1,
    textAlign: "right",
  },
  cancelBtn: {
    textTransform: "none",
    backgroundColor: "#F0F2F6",
    marginRight: 10,
  },
  saveBtn: {
    textTransform: "none",
    backgroundColor: "#FC821F",
    color: "#fff",
  },
  property: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#111E14",
    margin: "15px 0",
    display: "block",
    textAlign: "left",
  },

  description: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#111E14",
    display: "block",
    textAlign: "left",
  },
  occuptionBox: {
    display: "flex",
    marginBottom: 30,
  },
  occuption: {
    backgroundColor: "#1D8A8B",
    borderRadius: 4,
    padding: 12,
    marginRight: 6,
    color: "#fff",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "16px",
  },
  skillsBox: {
    display: "flex",
    marginBottom: 30,
  },
  skills: {
    backgroundColor: "#F0F2F6",
    borderRadius: 4,
    padding: 12,
    marginRight: 6,
    color: "#111E14",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "16px",
  },
  videoSection: {
    padding: 20,
  },
  videoTitle: {
    fontSize: 14,
    fontWeight: 600,
  },
  videoSize: {
    fontSize: 14,
    fontWeight: 600,
    color: "#9B9E9C",
  },
  duration: {
    fontSize: 14,
    display: "block",
    color: "#9B9E9C",
  },

  resumeBox: {
    padding: 14,
    display: "flex",
    alignItems: "center",
  },
  documentName: {
    fontSize: 14,
    fontWeight: 400,
    color: "#111E14",
  },
  typeAndSize: {
    fontSize: 14,
    fontWeight: 400,
    color: "rgba(17, 30, 20, 0.4)",
  },
  socialLinkBox: {
    padding: 14,
    marginBottom: 8,
    textAlign: "left",
  },
  socialLink: {
    fontSize: 16,
    fontWeight: 500,
    display: "block",
    padding: "2px 0",
  },
  link: {
    color: "#1D8A8B",
  },
  "@media (max-width: 800px)": {
    jobDetailContainer: {
      flexDirection: "column",
      padding: 0,
      margin: 0,
    },
    filterBar: {
      justifyContent: "flex-start",
    },
  },

  "@media (max-width: 600px)": {
    occuptionBox: {
      display: "block",
    },
  },
}));

const TalentCenter = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={classes.jobCenter}>
      <Navbar talentCenter={true} />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={3} md={12} sm={12} xs={12}>
            <div>
              <SearchInputSeeker
                styles={{ backgroundColor: "#F0F2F6" }}
                label="Search Talent"
              />
            </div>
            <div className={classes.jobsMainContainer}>
              <div className={classes.header}>
                <div>
                  <span className={classes.jobsFound}>47 seekers found</span>
                </div>
                <div className={classes.sortBox}>
                  <span className={classes.sortText}>Sort by:</span>
                  <DropDown
                    title="Distance"
                    border={true}
                    options={[
                      { value: "Date", label: "Date" },
                      { value: "Relevancy", label: "Relevancy" },
                    ]}
                  />
                  <DropDown
                    title="Relevance"
                    border={true}
                    options={[
                      { value: "Date", label: "Date" },
                      { value: "Relevancy", label: "Relevancy" },
                    ]}
                  />
                </div>
              </div>
              <div className={classes.searchItems}>
                <SeekerItem />
                <SeekerItem active={true} />
                <SeekerItem bookMarked={true} />
                <SeekerItem />
                <SeekerItem />
                <SeekerItem />
                <SeekerItem />
                <SeekerItem />
                <SeekerItem />
                <SeekerItem />
                <SeekerItem />
                <SeekerItem />
                <SeekerItem />
              </div>
            </div>
          </Grid>
          <Grid item lg={9} md={12} sm={12} xs={12}>
            <div className={classes.filterBar}>
              <div className={classes.filterItem}>
                <DropDown title="Recent searches" />
              </div>
              <div className={classes.filterItem}>
                <MultiSelect title="Job Type" />
              </div>
              <div className={classes.filterItem}>
                <MultiSelect title="Salary" />
              </div>
            </div>

            <div className={classes.jobDetailContainer}>
              <div className={classes.logoSide}>
                <Avatar className={classes.avatar}>HA</Avatar>
              </div>

              <div className={classes.jobContentContainer}>
                <div style={{ flex: 1 }}>
                  <div className={classes.headingSection}>
                    <span className={classes.heading}>Jane Sparrow</span>
                    <div style={{ justifyContent: "flex-end" }}>
                      <span className={classes.publishedOn}>Active </span>
                      <span className={classes.publishedOn}>
                        Applied 5h ago
                      </span>
                    </div>
                  </div>

                  <div className={classes.loctionContainer}>
                    <span className={classes.appliedOn}>
                      Business Analyst - Washington, D.C.
                    </span>
                  </div>

                  <div style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>
                      <Grid container spacing={1}>
                        <Grid item>
                          <div className={classes.detailContainer}>
                            <AttachMoney
                              fontSize="inherit"
                              className={classes.icons}
                            />
                            <span className={classes.detail}>
                              75,000-95,000
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
                  </div>
                  <div className={classes.buttonBox}>
                    <Button
                      variant="contained"
                      className={classes.reguestButton}
                      disableElevation
                      startIcon={<DateRange />}
                    >
                      Request Interview
                    </Button>

                    <Button
                      variant="contained"
                      className={classes.messageButton}
                      startIcon={<Message />}
                      disableElevation
                    >
                      Send message
                    </Button>
                    <div style={{ flex: 1, textAlign: "right" }}>
                      <Button
                        variant="contained"
                        className={classes.saveJobButton}
                        startIcon={<BookmarkBorderOutlined />}
                        disableElevation
                        aria-describedby={id}
                        onClick={handleClick}
                      >
                        Save to my Jobs
                      </Button>
                    </div>

                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <div className={classes.popover}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span className={classes.popHeading}>
                            Save to Job Posting(s)
                          </span>
                          <Button onClick={handleClose}>
                            <Close />
                          </Button>
                        </div>

                        <TextField
                          id="outlined-margin-dense"
                          placeholder="Search List"
                          className={classes.textField}
                          margin="dense"
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <SpeakerNotes
                                style={{ color: "rgba(17, 30, 20, 0.3)" }}
                              />
                            ),
                          }}
                        />
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span className={classes.subHeading}>
                            Create a new list
                          </span>
                          <Add fontSize="inherit" />
                        </div>

                        <div className={classes.itemBox}>
                          <div className={classes.popItem}>
                            <div className={classes.popItemMiddleSection}>
                              <span className={classes.user}>
                                Business Analyst 1
                              </span>
                              <br />
                              <span className={classes.email}>Oakland, CA</span>
                            </div>

                            <div>
                              <IconButton component="span">
                                {false ? (
                                  <Bookmark color="primary" />
                                ) : (
                                  <BookmarkBorderOutlined />
                                )}
                              </IconButton>
                            </div>
                          </div>

                          <div className={classes.popItem}>
                            <div className={classes.popItemMiddleSection}>
                              <span className={classes.user}>
                                Business Analyst 1
                              </span>
                              <br />
                              <span className={classes.email}>Oakland, CA</span>
                            </div>

                            <div>
                              <IconButton component="span">
                                {true ? (
                                  <Bookmark color="secondary" />
                                ) : (
                                  <BookmarkBorderOutlined />
                                )}
                              </IconButton>
                            </div>
                          </div>
                          <div className={classes.popItem}>
                            <div className={classes.popItemMiddleSection}>
                              <span className={classes.user}>
                                Business Analyst 1
                              </span>
                              <br />
                              <span className={classes.email}>Oakland, CA</span>
                            </div>

                            <div>
                              <IconButton component="span">
                                {false ? (
                                  <Bookmark color="primary" />
                                ) : (
                                  <BookmarkBorderOutlined />
                                )}
                              </IconButton>
                            </div>
                          </div>

                          <div className={classes.popItem}>
                            <div className={classes.popItemMiddleSection}>
                              <span className={classes.user}>
                                Business Analyst 1
                              </span>
                              <br />
                              <span className={classes.email}>Oakland, CA</span>
                            </div>

                            <div>
                              <IconButton component="span">
                                {false ? (
                                  <Bookmark color="primary" />
                                ) : (
                                  <BookmarkBorderOutlined />
                                )}
                              </IconButton>
                            </div>
                          </div>
                        </div>
                        <div className={classes.popFooter}>
                          <Button className={classes.cancelBtn}>Cancel</Button>
                          <Button className={classes.saveBtn}>Save</Button>
                        </div>
                      </div>
                    </Popover>
                  </div>

                  <div>
                    <span className={classes.property}>About Me:</span>
                    <span className={classes.description}>
                      Odit accusantium or dolorem but est, non sit yet nostrum.
                      Eiusmod enim nor commodo aliqua eum and excepteur. Quis.
                      Odit. Minim ipsa and accusantium and elit culpa but eos.
                      Veritatis corporis occaecat but quisquam nequeporro and
                      magnam. Dolore vel. Exercitationem veritatis adipisci
                      ullamco tempor nor cupidatat. Dolor eaque, or ab quae elit
                      iste. Eaque vitae. Culpa laboriosam nemo, yet illo or
                      veritatis for veritatis. Enim. Non dolor ex velitesse. Sed
                      velit eu, and nesciunt. Adipisci. Molestiae sint magna
                      commodo, quo suscipit and laborum
                    </span>

                    <span className={classes.property}>Occupation:</span>

                    <div className={classes.occuptionBox}>
                      <span className={classes.occuption}>
                        Software Engineer
                      </span>
                      <span className={classes.occuption}>Art Derector</span>
                      <span className={classes.occuption}>
                        Design Consultant
                      </span>
                    </div>

                    <span className={classes.property}>Skillset:</span>
                    <div className={classes.skillsBox}>
                      <span className={classes.skills}>Git</span>
                      <span className={classes.skills}>Objective-C</span>
                      <span className={classes.skills}>JSON</span>
                      <span className={classes.skills}>Cocoa</span>
                      <span className={classes.skills}>Subversion</span>
                    </div>

                    <span className={classes.property}>Video:</span>
                    <Paper variant="outlined" className={classes.videoSection}>
                      <span className={classes.videoTitle}>
                        video_overview.avi
                      </span>
                      <span className={classes.videoSize}>44.3 MB</span>
                      <span className={classes.duration}>0:38</span>

                      <div className={classes.video}>
                        <ReactPlayer
                          width="100%"
                          height="100%"
                          controls={true}
                          url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
                        />
                      </div>
                    </Paper>
                    <span className={classes.property}>Resume:</span>

                    <Paper variant="outlined" className={classes.resumeBox}>
                      <div style={{ padding: "5px" }}>
                        <img src={PDF} alt="" />
                      </div>
                      <div>
                        <span className={classes.documentName}>
                          Document Name.pdf
                        </span>
                        <br />
                        <span className={classes.typeAndSize}>
                          PDF Document 1.2Mb
                        </span>
                      </div>
                    </Paper>
                    <span className={classes.property}>Social Media:</span>

                    <div>
                      <Paper
                        variant="outlined"
                        className={classes.socialLinkBox}
                      >
                        <span className={classes.socialLink}>Facebook</span>
                        <Link
                          href="https://www.facebook.com/jane.sparrow"
                          className={classes.link}
                        >
                          https://www.facebook.com/jane.sparrow
                        </Link>
                      </Paper>
                      <Paper
                        variant="outlined"
                        className={classes.socialLinkBox}
                      >
                        <span className={classes.socialLink}>LinkedIn</span>
                        <Link
                          href="https://www.linkedin.com/jane.sparrow"
                          className={classes.link}
                        >
                          https://www.linkedin.com/jane.sparrow
                        </Link>
                      </Paper>
                      <Paper
                        variant="outlined"
                        className={classes.socialLinkBox}
                      >
                        <span className={classes.socialLink}>YouTube</span>
                        <Link
                          href="https://www.facebook.com/jane.sparrow"
                          className={classes.link}
                        >
                          https://www.youtube.com/jane.sparrow
                        </Link>
                      </Paper>
                    </div>
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

export default TalentCenter;
