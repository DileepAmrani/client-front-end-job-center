import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { CalendarToday, ArrowDropDown, Close } from "@material-ui/icons";
import Profile from "./../../Assets/profile.png";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "react-select";
import { Navbar } from "./../../Components";
import { makeStyles } from "@material-ui/core";
import cx from "clsx";

const useStyles = makeStyles((theme) => ({
  dashboard: {
    background: "#FAFAFC",
  },
  settingContainer: {
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
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    background: 'linear-gradient(to right, #FC821F, #1D8A8B)',
    borderRadius: '100%',
    color: '#122dff',
    display: 'inline-block',
    padding: '4px',
    textDecoration: 'none'
  },
  sectionTitle: {
    fontSize: 20,
    padding: 5,
    fontWeight: 500,
    textAlign: "left",
  },
  avatarBox: {
    padding: 5,
  },
  btnBox: {
    padding: 10,
    paddingTop: 30,
  },
  greenButton: {
    boxShadow: "none",
    background: "#1D8A8B",
    borderRadius: "4px",
    color: "#fff",
    padding: "10px",
    minWidth: 165,
    height: 44,
    marginRight: 10,
    marginBottom: 5,
    textTransform: "none",
    fontSize: "15px",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#4aa1a2",
    },
  },
  instuctionText: {
    color: "rgba(17, 30, 20, 0.4)",
    fontSize: "14px",
    textAlign: "left",
  },
  inputBoxContainer: {
    display: "flex",
    margin: "10px 0",
  },
  inputBox: {
    flex: 1,
    padding: "0 5px",
  },
  textField: {
    height: 46,
    fontSize: 16,
    color: "#111E14",
  },
  textFieldDisabled:{
    height: 46,
    fontSize: 16,
    color: "#9B9E9C",
    backgroundColor: '#F0F2F6',
    border: 0
  },
  label: {
    padding: "5px 0",
    fontSize: 14,
    color: "#111E14",
    fontWeight: 500,
    textAlign: "left",
  },
  dropDown: {
    fontSize: "16px",
    color: "#1D8A8B",
    border: "1px solid #D5D7DD",
    borderRadius: 4,
  },
  focusDropDown: {
    fontSize: "16px",
    color: "#1D8A8B",
    border: "2px solid #1D8A8B",
    borderRadius: 4,
  },
  buttonBox: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px 0",
  },

  primaryButton: {
    boxShadow: "none",
    background: "#FC821F",
    borderRadius: "4px",
    color: "#fff",
    padding: "10px",
    minWidth: 165,
    height: 44,
    marginRight: 10,
    marginBottom: 5,
    textTransform: "none",
    fontSize: "15px",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#4aa1a2",
    },
  },
  grayButton: {
    boxShadow: "none",
    background: "#F0F2F6",
    borderRadius: "4px",
    padding: "10px",
    minWidth: 83,
    height: 44,
    marginRight: 10,
    marginBottom: 5,
    textTransform: "none",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "#4aa1a2",
    },
  },
  heading: {
    fontSize: 20,
    color: "#111E14",
    fontWeight: 500,
    display: "block",
    paddingBottom: 10,
    flex: 1,
    textAlign: 'left'
  },
  insText: {
    display: "block",
    padding: "10px 10px 20px 0px",
    fontSize: 16,
    textAlign: 'left'
  },
  url: {
    color: "rgba(17, 30, 20, 0.4)",
    fontSize: 14,
    padding: "5px 0",
    display: "block",
    textAlign: 'left'
  },
  checkBoxContainer: {
    display: "flex",
    alignItems: "center",
  },
  borderBottiom: {
    borderBottom: "1px solid #F0F2F6",
  },
  checkBoxLabel: {
    display: "block",
    padding: "15px 10px 20px 10px",
    fontSize: 16,
  },
  dialogBox: {
    padding: 25,
    width: 550,
  },
  dialogHeader: {
    display: "flex",
  },
}));

const style = {
  control: (base) => ({
    ...base,
    border: 0,
    boxShadow: "none",
    background: "transparent",
    height: 46,
  }),
};

const MySettings = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [userName, setUserName] = useState("");
  const [focusLang, setFocusLang] = useState(false);
  const [focusDate, setFocusDate] = useState(false);
  const [focusCity, setFocusCity] = useState(false);
  const [focusTime, setFocusTime] = useState(false);
  const [focusCountry, setFocusCountry] = useState(false);
  const [focusZone, setFocusZone] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [activeGeneral, setActiveGeneral] = useState(true);
  const [activeMyLink, setActiveMyLink] = useState(false);
  const [activeLogin, setActiveLogin] = useState(false);
  const [activeNotification, setActiveNotification] = useState(false);

  const Address = [
    { value: "London, KY", label: "London, KY" },
    { value: "London, OH", label: "London, OH" },
    { value: "London, NH", label: "London, NH" },
    { value: "London, WV", label: "London, WV" },
    { value: "London, AR", label: "London, AR" },
  ];

  const handleChangeAddress = (selectedOption) => {
    setSelectedAddress({ selectedAddress });
  };

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

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
                <span className={classes.title}>My Settings</span>
                <div className={classes.dateBox}>
                  <CalendarToday fontSize="inherit" color="inherit" />
                  <span className={classes.date}>December 1, 2020</span>
                </div>
              </div>
            </div>

            <div>
              <div className={classes.settingContainer}>
                <Grid container spacing={2}>
                  <Grid item lg={3} md={12} sm={12} xs={12}>
                    <div className={classes.nav}>
                      <ul className={classes.navList}>
                        <li
                          className={cx(
                            classes.navItem,
                            activeGeneral ? classes.navItemActive : ""
                          )}
                          onClick={() => {
                            setActiveGeneral(true);
                            setActiveMyLink(false);
                            setActiveLogin(false);
                            setActiveNotification(false);
                          }}
                        >
                          General
                        </li>
                        <li
                          className={cx(
                            classes.navItem,
                            activeMyLink ? classes.navItemActive : ""
                          )}
                          onClick={() => {
                            setActiveGeneral(false);
                            setActiveMyLink(true);
                            setActiveLogin(false);
                            setActiveNotification(false);
                          }}
                        >
                          My Link
                        </li>
                        <li
                          className={cx(
                            classes.navItem,
                            activeLogin ? classes.navItemActive : ""
                          )}
                          onClick={() => {
                            setActiveGeneral(false);
                            setActiveMyLink(false);
                            setActiveLogin(true);
                            setActiveNotification(false);
                          }}
                        >
                          Login
                        </li>
                        <li
                          className={cx(
                            classes.navItem,
                            activeNotification ? classes.navItemActive : ""
                          )}
                          onClick={() => {
                            setActiveGeneral(false);
                            setActiveMyLink(false);
                            setActiveLogin(false);
                            setActiveNotification(true);
                          }}
                        >
                          Notifications
                        </li>
                      </ul>
                    </div>
                  </Grid>
                  <Grid item lg={9} md={12} sm={12} xs={12}>
                    {/* ********* GENERAL SECTION ************ */}
                    <div style={{ padding: "20px 0" }}>
                      {activeGeneral ? (
                        <div>
                          <span className={classes.sectionTitle}>General</span>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div className={classes.avatarBox}>
                              <Avatar
                                className={classes.avatar}
                                src={Profile}
                              />
                            </div>
                            <div className={classes.btnBox}>
                              <div>
                                <Button
                                  variant="contained"
                                  className={classes.greenButton}
                                  disableElevation
                                >
                                  Upload new photo
                                </Button>
                                <Button
                                  variant="contained"
                                  className={classes.grayButton}
                                  disableElevation
                                >
                                  Delete
                                </Button>
                              </div>
                              <div>
                                <span className={classes.instuctionText}>
                                  jpg, png files with max size of 5 MB.
                                </span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className={classes.inputBox}>
                              <FormLabel
                                component="legend"
                                className={classes.label}
                              >
                                First Name
                              </FormLabel>
                              <TextField
                                id="outlined-basic"
                                placeholder="First Name"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                  className: classes.textField,
                                }}
                              />
                            </div>
                            <div className={classes.inputBoxContainer}>
                              <div className={classes.inputBox}>
                                <FormLabel
                                  component="legend"
                                  className={classes.label}
                                >
                                  Middle Name
                                </FormLabel>
                                <TextField
                                  id="outlined-basic"
                                  placeholder="Middle Name"
                                  variant="outlined"
                                  fullWidth
                                  InputProps={{
                                    className: classes.textField,
                                  }}
                                />
                              </div>
                              <div className={classes.inputBox}>
                                <FormLabel
                                  component="legend"
                                  className={classes.label}
                                >
                                  Last Name
                                </FormLabel>
                                <TextField
                                  id="outlined-basic"
                                  placeholder="Last Name"
                                  variant="outlined"
                                  fullWidth
                                  InputProps={{
                                    className: classes.textField,
                                  }}
                                />
                              </div>
                            </div>
                            <div className={classes.inputBoxContainer}>
                              <div className={classes.inputBox}>
                                <FormLabel
                                  component="legend"
                                  className={classes.label}
                                >
                                  Language
                                </FormLabel>

                                <Select
                                  onChange={handleChangeAddress}
                                  options={Address}
                                  isClearable={false}
                                  placeholder="Language"
                                  className={cx(
                                    focusLang
                                      ? classes.focusDropDown
                                      : classes.dropDown
                                  )}
                                  onFocus={() => setFocusLang(true)}
                                  onBlur={() => setFocusLang(false)}
                                  components={{
                                    IndicatorSeparator: () => null,
                                    DropdownIndicator: () => (
                                      <ArrowDropDown
                                        style={{ color: "gray" }}
                                      />
                                    ),
                                  }}
                                  styles={style}
                                />
                              </div>
                              <div className={classes.inputBox}></div>
                            </div>
                            <div className={classes.inputBoxContainer}>
                              <div className={classes.inputBox}>
                                <FormLabel
                                  component="legend"
                                  className={classes.label}
                                >
                                  Data Format
                                </FormLabel>
                                <Select
                                  onChange={handleChangeAddress}
                                  options={Address}
                                  isClearable={false}
                                  className={cx(
                                    focusDate
                                      ? classes.focusDropDown
                                      : classes.dropDown
                                  )}
                                  onFocus={() => setFocusDate(true)}
                                  onBlur={() => setFocusDate(false)}
                                  placeholder="Data Format"
                                  components={{
                                    IndicatorSeparator: () => null,
                                    DropdownIndicator: () => (
                                      <ArrowDropDown
                                        style={{ color: "gray" }}
                                      />
                                    ),
                                  }}
                                  styles={style}
                                />
                              </div>
                              <div className={classes.inputBox}>
                                <FormLabel
                                  component="legend"
                                  className={classes.label}
                                >
                                  Time Format
                                </FormLabel>
                                <Select
                                  onChange={handleChangeAddress}
                                  options={Address}
                                  isClearable={false}
                                  className={cx(
                                    focusTime
                                      ? classes.focusDropDown
                                      : classes.dropDown
                                  )}
                                  onFocus={() => setFocusTime(true)}
                                  onBlur={() => setFocusTime(false)}
                                  placeholder="Time Format"
                                  components={{
                                    IndicatorSeparator: () => null,
                                    DropdownIndicator: () => (
                                      <ArrowDropDown
                                        style={{ color: "gray" }}
                                      />
                                    ),
                                  }}
                                  styles={style}
                                />
                              </div>
                            </div>
                            <div className={classes.inputBoxContainer}>
                              <div className={classes.inputBox}>
                                <FormLabel
                                  component="legend"
                                  className={classes.label}
                                >
                                  Country
                                </FormLabel>
                                <Select
                                  onChange={handleChangeAddress}
                                  options={Address}
                                  isClearable={false}
                                  className={cx(
                                    focusCountry
                                      ? classes.focusDropDown
                                      : classes.dropDown
                                  )}
                                  onFocus={() => setFocusCountry(true)}
                                  onBlur={() => setFocusCountry(false)}
                                  placeholder="Country"
                                  components={{
                                    IndicatorSeparator: () => null,
                                    DropdownIndicator: () => (
                                      <ArrowDropDown
                                        style={{ color: "gray" }}
                                      />
                                    ),
                                  }}
                                  styles={style}
                                />
                              </div>
                              <div className={classes.inputBox}>
                                <FormLabel
                                  component="legend"
                                  className={classes.label}
                                >
                                  City
                                </FormLabel>
                                <Select
                                  onChange={handleChangeAddress}
                                  options={Address}
                                  isClearable={false}
                                  className={cx(
                                    focusCity
                                      ? classes.focusDropDown
                                      : classes.dropDown
                                  )}
                                  onFocus={() => setFocusCity(true)}
                                  onBlur={() => setFocusCity(false)}
                                  placeholder="Ex: San Francisco"
                                  components={{
                                    IndicatorSeparator: () => null,
                                    DropdownIndicator: () => (
                                      <ArrowDropDown
                                        style={{ color: "gray" }}
                                      />
                                    ),
                                  }}
                                  styles={style}
                                />
                              </div>
                            </div>
                            <div className={classes.inputBoxContainer}>
                              <div className={classes.inputBox}>
                                <FormLabel
                                  component="legend"
                                  className={classes.label}
                                >
                                  Timezone
                                </FormLabel>
                                <Select
                                  onChange={handleChangeAddress}
                                  options={Address}
                                  isClearable={false}
                                  className={cx(
                                    focusZone
                                      ? classes.focusDropDown
                                      : classes.dropDown
                                  )}
                                  onFocus={() => setFocusZone(true)}
                                  onBlur={() => setFocusZone(false)}
                                  placeholder="Timezone"
                                  components={{
                                    IndicatorSeparator: () => null,
                                    DropdownIndicator: () => (
                                      <ArrowDropDown
                                        style={{ color: "gray" }}
                                      />
                                    ),
                                  }}
                                  styles={style}
                                />
                              </div>
                              <div className={classes.inputBox}></div>
                            </div>
                          </div>

                          <div className={classes.buttonBox}>
                            <Button
                              variant="contained"
                              className={classes.grayButton}
                              disableElevation
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="contained"
                              className={classes.primaryButton}
                              disableElevation

                            >
                              Save Changes
                            </Button>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      {/* ******* MY LINK SECTION ****** */}

                      {activeMyLink ? (
                        <div>
                          <span className={classes.heading}>
                            Create your afootinthedoor URL
                          </span>
                          <span className={classes.insText}>
                            Choose a URL that describes you in a concise way. Be
                            sure to make it short and easy to remember so you
                            can share your profile link with ease. This link
                            will be visible to employers, so please select a URL
                            that represents you well.
                          </span>

                          <div style={{ display: "flex" }}>
                            <div style={{ paddingRight: "5px", flex: 1 }}>
                              <TextField
                                id="outlined-basic"
                                placeholder="www.afootinthedoor.work/"
                                variant="outlined"
                                disabled={true}
                                InputProps={{
                                  className: classes.textFieldDisabled,
                                }}
                              
                                fullWidth
                              />
                            </div>
                            <div style={{ flex: 2 }}>
                              <TextField
                                id="outlined-basic"
                                placeholder="User Name"
                                variant="outlined"
                                InputProps={{
                                  className: classes.textField,
                                }}
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                fullWidth
                              />
                            </div>
                          </div>
                          <span className={classes.url}>
                            {`Your afootinthedoor URL: www.afootinthedoor.work/${userName}`}
                          </span>

                          <div className={classes.buttonBox}>
                            <Button
                              variant="contained"
                              className={classes.grayButton}
                              disableElevation
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="contained"
                              className={classes.primaryButton}
                              disableElevation
                            >
                              Save Changes
                            </Button>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      {/* ******* LOGIN SECTION ****** */}
                      {activeLogin ? (
                        <div>
                          <span className={classes.heading}>Login</span>

                          <div style={{ margin: "20px 0" }}>
                            <FormLabel
                              component="legend"
                              className={classes.label}
                            >
                              Email address
                            </FormLabel>
                            <TextField
                              id="outlined-basic"
                              placeholder="Email"
                              variant="outlined"
                              InputProps={{
                                className: classes.textField,
                              }}
                              fullWidth
                            />
                          </div>
                          <div style={{ padding: "10px 0" }}>
                            <div style={{float: 'left'}}>

                            <Button
                              variant="contained"
                              className={classes.greenButton}
                              disableElevation
                              onClick={handleClickOpenDialog}
                            >
                              Change your password
                            </Button>
                              </div>
                            <Dialog
                              open={open}
                              onClose={handleCloseDialog}
                              aria-labelledby="alert-dialog-title"
                              aria-describedby="alert-dialog-description"
                            >
                              <div className={classes.dialogBox}>
                                <div className={classes.dialogHeader}>
                                  <span className={classes.heading}>
                                    Change your password
                                  </span>
                          
                                  <Button onClick={handleCloseDialog}>
                                    <Close />
                                  </Button>
                                </div>

                                <FormLabel
                                  component="legend"
                                  className={classes.label}
                                >
                                  Current password
                                </FormLabel>
                                <TextField
                                  id="outlined-basic"
                                  placeholder="Enter Current Password"
                                  variant="outlined"
                                  fullWidth
                                  InputProps={{
                                    className: classes.textField,
                                  }}
                                  color='primary'
                                />

                                <div style={{ margin: "10px 0" }}>
                                  <Button
                                    variant="contained"
                                    className={classes.grayButton}
                                    disableElevation
                                  >
                                    Forgot?
                                  </Button>
                                </div>
                                <div style={{ margin: "20px 0" }}>
                                  <FormLabel
                                    component="legend"
                                    className={classes.label}
                                  >
                                    New password (Minimum 6 characters)
                                  </FormLabel>
                                  <TextField
                                    id="outlined-basic"
                                    placeholder="New password"
                                    variant="outlined"
                                    InputProps={{
                                      className: classes.textField,
                                    }}
                                    fullWidth
                                  color='primary'

                                  />
                                </div>

                                <div style={{ margin: "20px 0" }}>
                                  <FormLabel
                                    component="legend"
                                    className={classes.label}
                                  >
                                    Confirm password
                                  </FormLabel>
                                  <TextField
                                    id="outlined-basic"
                                    placeholder="Confirm password"
                                    variant="outlined"
                                    InputProps={{
                                      className: classes.textField,
                                    }}
                                    fullWidth
                                  color='primary'

                                  />
                                </div>

                                <div className={classes.buttonBox}>
                                  <Button
                                    variant="contained"
                                    className={classes.grayButton}
                                    disableElevation
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    variant="contained"
                                    className={classes.primaryButton}
                                    disableElevation
                                  >
                                    Save Changes
                                  </Button>
                                </div>
                              </div>
                            </Dialog>
                          </div>

                          <div className={classes.buttonBox}>
                            <Button
                              variant="contained"
                              className={classes.grayButton}
                              disableElevation
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="contained"
                              className={classes.primaryButton}
                              disableElevation
                            >
                              Save Changes
                            </Button>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      {/* ******* NOTIFICATION SECTION ****** */}

                      {activeNotification ? (
                        <div>
                          <span className={classes.heading}>Notifications</span>
                          <span className={classes.insText}>
                            How would you like to receive notifications?
                          </span>

                          <div>
                            <div
                              className={cx(
                                classes.checkBoxContainer,
                                classes.borderBottiom
                              )}
                            >
                              <Checkbox
                                style={{ margin: 0, padding: 0 }}
                                color="primary"
                              />

                              <span className={classes.checkBoxLabel}>
                                Push
                              </span>
                            </div>

                            <div className={classes.checkBoxContainer}>
                              <Checkbox
                                defaultChecked
                                style={{ margin: 0, padding: 0 }}
                                color="primary"
                                inputProps={{
                                  "aria-label": "secondary checkbox",
                                }}
                              />

                              <span className={classes.checkBoxLabel}>
                                Email (sending to ja********row@gmail.com)
                              </span>
                            </div>
                          </div>

                          <div className={classes.buttonBox}>
                            <Button
                              variant="contained"
                              className={classes.grayButton}
                              disableElevation
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="contained"
                              className={classes.primaryButton}
                              disableElevation
                            >
                              Save Changes
                            </Button>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
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
