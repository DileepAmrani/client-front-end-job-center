import React from "react";
import Grid from "@material-ui/core/Grid";
import Logo from "./../../Assets/companyLogo90x90.png";
import {
  VerifiedUserRounded,
  Message,
  Close,
  FormatQuote,
  ArrowForwardIos,
  AccessTime,
  Business,
  School,
  AttachMoney,
  GroupAddOutlined,
  InsertLinkOutlined,
  DateRange,
  ArrowBackIosSharp,
} from "@material-ui/icons";
import clsx from "clsx";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Badge from "@material-ui/core/Badge";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  jobDetailContainer: {
    display: "flex",
    padding: "10px",
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingTop: "10px",
    overflowY: "scroll",
    maxHeight: "690px",
    cursor: "pointer",
    borderTop: "1px solid #F0F2F6",
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
  shareBox: {
    display: "flex",
    margin: "10px",
  },
  shareBoxIcon: {
    color: "rgba(17, 30, 20, 0.4)",
  },
  shareBoxText: {
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(17, 30, 20, 0.4)",
    marginLeft: "10px",
  },
  jobContentContainer: {
    display: "flex",
    padding: "10px",
    width: "100%",
  },
  headingSection: {
    display: "flex",
    width: "100%",
    textAlign: "left",
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
    fontSize: "12px",
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
  descriptionBox: {
    marginTop: "15px",
    display: "flex",
  },
  cardBtn: {
    marginRight: "5px",
    boxShadow: "none",
    marginBottom: 5,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgba(29, 138, 139, 0.09)",
    },
  },
  popover: {
    padding: "10px",
    minWidth: "350px",
  },
  popHeading: {
    flex: 1,
    fontWeight: 700,
    fontSize: "16px",
  },
  suggestion: {
    fontSize: "14px",
    fontWeight: "500",
  },
  autoCompleteInput: {
    margin: "none",
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
    display: "flex",
    alignItems: "center",
  },
  copyLinkBox: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start",
    flex: 1,
  },
  copyLinkText: {
    fontSize: "14px",
    paddingLeft: "5px",
  },
  cancelBtn: {
    backgroundColor: "#F0F2F6",
    textTransform: "none",
    marginRight: "2px",
  },
  shareBtn: {
    backgroundColor: "#FC821F",
    textTransform: "none",
    marginRight: "2px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fc9b4b",
    },
  },
  requestBox: {
    backgroundColor: "rgba(29, 138, 139, 0.09)",
    borderRadius: "4px",
    marginTop: "10px",
    padding: "5px",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  requestBoxLeftContainer: {
    display: "flex",
    alignItems: "center",
    padding: "2px",
    flex: 1,
  },
  avatar: {
    width: "30px",
    height: "30px",
    marginRight: "5px",
  },
  sharedByText: {
    fontSize: "14px",
    color: "#111E14",
    lineHeight: "16.41px",
  },
  userName: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#111E14",
    marginLeft: "5px",
    lineHeight: "16.41px",
  },
  requestButtonContainer: {
    justifyContent: "flex-end",
  },
  acceptBtn: {
    marginRight: "5px",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: "16px",
    color: "rgba(17, 30, 20, 0.4)",
    "&:hover": {
      backgroundColor: "rgba(29, 138, 139, 0.09)",
      color: "#1D8A8B",
    },
  },

  memberBox: {
    display: "flex",
    flexDirection: "row",
    margin: "10px 0",
  },
  member: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F0F2F6",
    alignItems: "center",
    padding: "5px",
    borderRadius: 4,
    marginRight: 4,
  },
  memberName: {
    fontSize: 13,
    color: "#111E14",
  },
  noteBox: {
    display: "flex",
    alignItems: "center",
    padding: 8,
    border: "1px solid rgba(17, 30, 20, 0.4)",
    borderRadius: 4,
    marginTop: 4,
  },
  note: {
    flex: 1,
  },
  typography: {
    padding: theme.spacing(1, 0),
    maxWidth: 700,
    fontSize: 14,
  },

  paper: {
    position: "absolute",
    width: "76%",
    padding: theme.spacing(1),
    right: 0,
    top: 80,
    outline: "none",
    marginRight: 2,
    display: "flex",
    alignItems: "center",
  },
  arrow: {
    backgroundColor: "#fff",
    margin: 4,
    display: "flex",
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 14px 34px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  },
  arrowIcons: {
    fontSize: 12,
  },
  modal: {
    outline: "none",
    "&:focus": {
      outline: "none",
      border: "none",
    },
  },

  "@media (max-width: 800px)": {
    jobDetailContainer: {
      flexDirection: "column",
      padding: 0,
      margin: 0,
    },
    paper: {
      width: "100%",
    },
  },
}));

const JobCard = (props) => {
  const classes = useStyles();

  const top100Films = [
    { title: "Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "Inglourious ", year: 2009 },
    { title: "Monty Python", year: 1975 },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [openModel, setOpenModel] = React.useState(false);

  const handleOpenModel = () => {
    setOpenModel(true);
  };

  const handleCloseModel = () => {
    setOpenModel(false);
  };

  return (
    <div>
      <div
        className={classes.jobDetailContainer}
        variant="contained"
        color="secondary"
        onClick={handleOpenModel}
      >
        <div className={classes.logoSide}>
          <img src={Logo} alt="" className="logo" />

          {props.shareBox ? (
            <div>
              <div className={classes.shareBox}>
                <GroupAddOutlined className={classes.shareBoxIcon} />
                <span className={classes.shareBoxText}>Share</span>
              </div>
              <div className={classes.shareBox}>
                <FormatQuote className={classes.shareBoxIcon} />
                <span className={classes.shareBoxText}>Note</span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={classes.jobContentContainer}>
          <div style={{ flex: 1 }}>
            <div className={classes.headingSection}>
              <span className={classes.heading}>
                Learning Experience Designer
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className={classes.publishedOn}>Active </span>
                <span className={classes.publishedOn}>posted 2 days ago</span>
                <Button onClick={handleClose}>
                  <Close />
                </Button>
              </div>
            </div>

            <div className={classes.loctionContainer}>
              <span className={classes.address}>Kartos</span>
              <VerifiedUserRounded className={classes.verifyIcon} />
            </div>

            <div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <Grid container spacing={1}>
                      <Grid item>
                        <div className={classes.detailContainer}>
                          <AttachMoney
                            fontSize="inherit"
                            className={classes.icons}
                          />
                          <span className={clsx(classes.detail, classes.pl)}>
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
                  <div>
                    <Badge
                      color="primary"
                      overlap="circle"
                      badgeContent=" "
                      variant="dot"
                    >
                      <Message className={classes.icons} />
                    </Badge>
                  </div>
                </div>

                <div className={classes.descriptionBox}>
                  <div style={{ flex: 1 }}>
                    <Typography
                      variant="body2"
                      gutterBottom
                      align="left"
                      className={classes.typography}
                    >
                      From Airbnb to Zalando, the world's top startups build on
                      AWS. We offer the world’s most comprehensive and broadly
                      adopted cloud platform, offering over 175 fully featured
                      services from data centers globally.
                    </Typography>
                  </div>
                  <div className="icon">
                    <Badge
                      color="primary"
                      overlap="circle"
                      badgeContent=""
                      variant="dot"
                    >
                      <DateRange className={classes.icons} />
                    </Badge>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <Button
                    variant="outlined"
                    className={classes.cardBtn}
                    aria-describedby={id}
                    onClick={handleClick}
                  >
                    Account Manger
                  </Button>
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
                      horizontal: "left",
                    }}
                  >
                    <div className={classes.popover}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span className={classes.popHeading}>
                          Share project to people
                        </span>
                        <Button onClick={handleClose}>
                        <Close />
                        </Button>
                      </div>
                      <Autocomplete
                        id="combo-box-demo"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        style={{ width: "100%", padding: 0, margin: 0 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            id="outlined-margin-dense"
                            defaultValue="Default Value"
                            className={classes.textField}
                            margin="dense"
                            variant="outlined"
                          />
                        )}
                        renderOption={(option, { selected }) => (
                          <div className={classes.popItem}>
                            <div>
                              <Avatar>A</Avatar>
                            </div>
                            <div className={classes.popItemMiddleSection}>
                              <span className={classes.user}>
                                {option.title}
                              </span>
                              <br />
                              <span className={classes.email}>
                                diane@gmail.com
                              </span>
                            </div>

                            <div>
                              <GroupAddOutlined />
                            </div>
                          </div>
                        )}
                      />
                      <div>
                        <span className={classes.suggestion}>Suggestion</span>
                      </div>

                      <div className={classes.popItem}>
                        <div>
                          <Avatar>A</Avatar>
                        </div>
                        <div className={classes.popItemMiddleSection}>
                          <span className={classes.user}>Dustin Watson</span>
                          <br />
                          <span className={classes.email}>diane@gmail.com</span>
                        </div>

                        <div>
                          <GroupAddOutlined />
                        </div>
                      </div>

                      <div className={classes.popItem}>
                        <div>
                          <Avatar>A</Avatar>
                        </div>
                        <div className={classes.popItemMiddleSection}>
                          <span className={classes.user}>Dustin Watson</span>
                          <br />
                          <span className={classes.email}>diane@gmail.com</span>
                        </div>

                        <div>
                          <GroupAddOutlined />
                        </div>
                      </div>

                      <div className={classes.popFooter}>
                        <div className={classes.copyLinkBox}>
                          <InsertLinkOutlined />
                          <span className={classes.copyLinkText}>
                            Copy public share link
                          </span>
                        </div>
                        <div>
                          <Button style={{}} className={classes.cancelBtn}>
                            Cancel
                          </Button>
                          <Button style={{}} className={classes.shareBtn}>
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Popover>
                  <Button variant="outlined" className={classes.cardBtn}>
                    Project Manger
                  </Button>
                </div>

                {props.requestBox ? (
                  <div className={classes.requestBox}>
                    <div className={classes.requestBoxLeftContainer}>
                      <Avatar className={classes.avatar}>H</Avatar>
                      <span className={classes.sharedByText}>Shared by</span>
                      <span className={classes.userName}> Dustin Watson</span>
                    </div>

                    <div className={classes.requestButtonContainer}>
                      <Button className={classes.acceptBtn}>Accept</Button>
                      <Button className={classes.acceptBtn}>Block</Button>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {props.memberBox ? (
                  <div className={classes.memberBox}>
                    <div className={classes.member}>
                      <Avatar className={classes.avatar}>H</Avatar>
                      <span className={classes.memberName}> Dustin Watson</span>
                      <Close fontSize="inherit" />
                    </div>

                    <div className={classes.member}>
                      <Avatar className={classes.avatar}>H</Avatar>
                      <span className={classes.memberName}> Dustin Watson</span>
                      <Close fontSize="inherit" />
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {props.noteBox ? (
                  <div className={classes.noteBox}>
                    <FormatQuote color="inherit" />
                    <span className={classes.note}>
                      Cillum est occaecat consequat nulla est.
                    </span>
                    <Close fontSize="inherit" />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={openModel}
        onClose={handleCloseModel}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <div className={classes.paper}>
          <div className={classes.arrow}>
            <ArrowBackIosSharp className={classes.arrowIcons} />
          </div>
          <div style={{ flex: 1 }}>
            <div
              className={classes.jobDetailContainer}
              style={{ borderRadius: "10px" }}
              variant="contained"
              color="secondary"
            >
              <div className={classes.logoSide}>
                <img src={Logo} alt="" className="logo" />

                {props.shareBox ? (
                  <div>
                    <div className={classes.shareBox}>
                      <GroupAddOutlined className={classes.shareBoxIcon} />
                      <span className={classes.shareBoxText}>Share</span>
                    </div>
                    <div className={classes.shareBox}>
                      <FormatQuote className={classes.shareBoxIcon} />
                      <span className={classes.shareBoxText}>Note</span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className={classes.jobContentContainer}>
                <div style={{ flex: 1 }}>
                  <div className={classes.headingSection}>
                    <span className={classes.heading}>
                      Learning Experience Designer
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span className={classes.publishedOn}>Active </span>
                      <span className={classes.publishedOn}>
                        posted 2 days ago
                      </span>
                      <Button onClick={handleCloseModel}>
                      <Close />
                      </Button>
                    </div>
                  </div>

                  <div className={classes.loctionContainer}>
                    <span className={classes.address}>Kartos</span>
                    <VerifiedUserRounded className={classes.verifyIcon} />
                  </div>

                  <div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: 1 }}>
                          <Grid container spacing={1}>
                            <Grid item>
                              <div className={classes.detailContainer}>
                                <AttachMoney
                                  fontSize="inherit"
                                  className={classes.icons}
                                />
                                <span
                                  className={clsx(classes.detail, classes.pl)}
                                >
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
                                <span
                                  className={clsx(classes.detail, classes.pl)}
                                >
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
                                <span
                                  className={clsx(classes.detail, classes.pl)}
                                >
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
                                <span
                                  className={clsx(classes.detail, classes.pl)}
                                >
                                  Master’s Degree
                                </span>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div>
                          <Badge
                            color="primary"
                            overlap="circle"
                            badgeContent=" "
                            variant="dot"
                          >
                            <Message className={classes.icons} />
                          </Badge>
                        </div>
                      </div>

                      <div className={classes.descriptionBox}>
                        <div style={{ flex: 1 }}>
                          <Typography
                            variant="body2"
                            gutterBottom
                            align="left"
                            className={classes.typography}
                          >
                            Would you like to be part of a team focused on
                            increasing adoption of Amazon Web Services in the
                            Retail / E-Commerce industry? Do you have the
                            business savvy and the technical background
                            necessary to help establish Amazon as a key
                            technology platform provider? Are you a self-starter
                            with a “can-do” attitude? As a (Sr.) Account Manager
                            you will have the exciting opportunity to help drive
                            the growth and shape the future of an emerging
                            technology and increase adoption and market segment
                            presence of AWS. The ideal candidate (m/f) will
                            possess both a sales / account management and
                            technical background that enables them to drive an
                            engagement at the executive level as well as with
                            software developers and IT architects. He/she should
                            also be a self-starter who is prepared to develop
                            and execute against a territory coverage plan and
                            consistently deliver results.
                          </Typography>

                          <Typography
                            variant="body2"
                            gutterBottom
                            align="left"
                            className={classes.typography}
                          >
                            Are you interested? We look forward to your
                            application.
                          </Typography>

                          <Typography
                            variant="body2"
                            gutterBottom
                            align="left"
                            className={classes.typography}
                          >
                            Amazon is an equal opportunities employer. We
                            believe passionately that employing a diverse
                            workforce is central to our success. We make
                            recruiting decisions based on your experience and
                            skills. We value your passion to discover, invent,
                            simplify and build.
                          </Typography>

                          <Typography
                            variant="body2"
                            gutterBottom
                            align="left"
                            className={classes.typography}
                          >
                            By submitting your resume and application
                            information, you authorize Amazon to transmit and
                            store your information in the Amazon group of
                            companies' world-wide recruitment database, and to
                            circulate that information as necessary for the
                            purpose of evaluating your qualifications for this
                            or other job vacancies.
                          </Typography>
                        </div>
                        <div className="icon">
                          <Badge
                            color="primary"
                            overlap="circle"
                            badgeContent=""
                            variant="dot"
                          >
                            <DateRange className={classes.icons} />
                          </Badge>
                        </div>
                      </div>

                      <div style={{ display: "flex" }}>
                        <Button
                          variant="outlined"
                          className={classes.cardBtn}
                          aria-describedby={id}
                          onClick={handleClick}
                        >
                          Account Manger
                        </Button>
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
                            horizontal: "left",
                          }}
                        >
                          <div className={classes.popover}>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <span className={classes.popHeading}>
                                Share project to people
                              </span>
                              <Close />
                            </div>
                            <Autocomplete
                              id="combo-box-demo"
                              options={top100Films}
                              getOptionLabel={(option) => option.title}
                              style={{ width: "100%", padding: 0, margin: 0 }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  id="outlined-margin-dense"
                                  defaultValue="Default Value"
                                  className={classes.textField}
                                  margin="dense"
                                  variant="outlined"
                                />
                              )}
                              renderOption={(option, { selected }) => (
                                <div className={classes.popItem}>
                                  <div>
                                    <Avatar>A</Avatar>
                                  </div>
                                  <div className={classes.popItemMiddleSection}>
                                    <span className={classes.user}>
                                      {option.title}
                                    </span>
                                    <br />
                                    <span className={classes.email}>
                                      diane@gmail.com
                                    </span>
                                  </div>

                                  <div>
                                    <GroupAddOutlined />
                                  </div>
                                </div>
                              )}
                            />
                            <div>
                              <span className={classes.suggestion}>
                                Suggestion
                              </span>
                            </div>

                            <div className={classes.popItem}>
                              <div>
                                <Avatar>A</Avatar>
                              </div>
                              <div className={classes.popItemMiddleSection}>
                                <span className={classes.user}>
                                  Dustin Watson
                                </span>
                                <br />
                                <span className={classes.email}>
                                  diane@gmail.com
                                </span>
                              </div>

                              <div>
                                <GroupAddOutlined />
                              </div>
                            </div>

                            <div className={classes.popItem}>
                              <div>
                                <Avatar>A</Avatar>
                              </div>
                              <div className={classes.popItemMiddleSection}>
                                <span className={classes.user}>
                                  Dustin Watson
                                </span>
                                <br />
                                <span className={classes.email}>
                                  diane@gmail.com
                                </span>
                              </div>

                              <div>
                                <GroupAddOutlined />
                              </div>
                            </div>

                            <div className={classes.popFooter}>
                              <div className={classes.copyLinkBox}>
                                <InsertLinkOutlined />
                                <span className={classes.copyLinkText}>
                                  Copy public share link
                                </span>
                              </div>
                              <div>
                                <Button
                                  style={{}}
                                  className={classes.cancelBtn}
                                >
                                  Cancel
                                </Button>
                                <Button style={{}} className={classes.shareBtn}>
                                  Share
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Popover>
                        <Button variant="outlined" className={classes.cardBtn}>
                          Project Manger
                        </Button>
                      </div>

                      {props.requestBox ? (
                        <div className={classes.requestBox}>
                          <div className={classes.requestBoxLeftContainer}>
                            <Avatar className={classes.avatar}>H</Avatar>
                            <span className={classes.sharedByText}>
                              Shared by
                            </span>
                            <span className={classes.userName}>
                              {" "}
                              Dustin Watson
                            </span>
                          </div>

                          <div className={classes.requestButtonContainer}>
                            <Button className={classes.acceptBtn}>
                              Accept
                            </Button>
                            <Button className={classes.acceptBtn}>Block</Button>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      {props.memberBox ? (
                        <div className={classes.memberBox}>
                          <div className={classes.member}>
                            <Avatar className={classes.avatar}>H</Avatar>
                            <span className={classes.memberName}>
                              {" "}
                              Dustin Watson
                            </span>
                            <Close fontSize="inherit" />
                          </div>

                          <div className={classes.member}>
                            <Avatar className={classes.avatar}>H</Avatar>
                            <span className={classes.memberName}>
                              {" "}
                              Dustin Watson
                            </span>
                            <Close fontSize="inherit" />
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      {props.noteBox ? (
                        <div className={classes.noteBox}>
                          <FormatQuote color="inherit" />
                          <span className={classes.note}>
                            Cillum est occaecat consequat nulla est.
                          </span>
                          <Close fontSize="inherit" />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.arrow}>
            <ArrowForwardIos className={classes.arrowIcons} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default JobCard;
