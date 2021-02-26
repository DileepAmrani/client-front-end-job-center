import React from "react";
import { Close } from "@material-ui/icons";
import {
  makeStyles,
  Grid,
  Modal,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import DropDown from "./../DropDown";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryAxis } from "victory";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "26px",
    color: "#111E14",
    fontWeight: "500",
    textAlign: "left",
  },

  headerBox: {
    display: "flex",
    alignItems: "center",
    padding: "10px 5px",
  },
  heading: {
    fontSize: 20,
    color: "#111E14",
    fontWeight: 500,
    display: "block",
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
    margin: "5px",
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
    minWidth: 850,
    height: 550,
    width: "100%",
  },
  dialogHeader: {
    display: "flex",
    alignItems: "center",
  },

  dialogHeading: {
    flex: 1,
  },
  modal: {
    outline: "none",
    "&:focus": {
      outline: "none",
      border: "none",
    },
  },
  paper: {
    position: "absolute",
    width: "73%",
    padding: theme.spacing(1),
    right: 0,
    top: 90,
    outline: "none",
    marginRight: 10,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
}));

const JobsStatisticsChart = (props) => {
  const classes = useStyles();
  const [radio, setRadio] = React.useState("applied");
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

  const [openModel, setOpenModel] = React.useState(false);

  const handleChangeRadio = (event) => {
    setRadio(event.target.value);
  };

  const handleOpenModel = () => {
    setOpenModel(true);
  };

  const handleCloseModel = () => {
    setOpenModel(false);
  };
  return (
    <div>
      <div>
        <div className={classes.headerBox}>
          <span className={classes.heading}>Communication</span>

          <span className={classes.moreLink} onClick={handleOpenModel}>
            Show More
          </span>
        </div>

        <div className={classes.chartBox}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ flex: 1 }}>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={radio}
                onChange={handleChangeRadio}
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <FormControlLabel
                  value="applied"
                  label="Applied"
                  control={<Radio style={{ color: "#1D8A8B" }} />}
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="saved"
                  control={<Radio style={{ color: "#1D8A8B" }} />}
                  label="Saved"
                  labelPlacement="start"
                />
              </RadioGroup>
            </div>
            <div
              style={{
                justifyContent: "flex-end",
              }}
            >
              <DropDown
                title="QTR"
                border={true}
                options={[
                  {
                    value: "Dec, 2020",
                    label: "Dec, 2020",
                  },
                  {
                    value: "Jan, 2021",
                    label: "Jan, 2021",
                  },
                ]}
              />
            </div>
          </div>

          <Grid container spacing={1}>
            <Grid item lg={8} md={12} sm={12} xs={12}>
              <VictoryChart domain={{ y: [0, 28] }}>
                <VictoryAxis
                  dependentAxis
                  tickValues={[5, 10, 15, 20]}
                  style={{
                    grid: { stroke: "#F0F2F6", strokeDasharray: "0" },
                    tickLabels: { fontSize: 12 },
                    axis: {
                      stroke: "#000",
                      strokeWidth: 1,
                      strokeDasharray: "0",
                    },
                  }}
                  orientation="top"
                />
                <VictoryAxis
                  tickValues={[1, 2, 3, 4, 5]}
                  tickFormat={["Jan", "Feb", "Mar", "Apr", "May"]}
                  style={{
                    grid: { stroke: "#F0F2F6", strokeDasharray: "0" },
                    tickLabels: { fontSize: 12 },
                    axis: {
                      stroke: "#000",
                      strokeWidth: 1,
                      strokeDasharray: "0",
                    },
                  }}
                  orientation="left"
                />

                <VictoryGroup
                  horizontal
                  offset={10}
                  style={{ data: { width: 8 } }}
                  colorScale={graphicColor}
                  domainPadding={10}
                >
                  <VictoryBar
                    data={[
                      { x: "May", y: 25 },
                      { x: "Apr", y: 20 },
                      { x: "Mar", y: 13 },
                      { x: "Feb", y: 12 },
                      { x: "Jan", y: 21 },
                    ]}
                  />
                  <VictoryBar
                    data={[
                      { x: "May", y: 20 },
                      { x: "Apr", y: 12 },
                      { x: "Mar", y: 24 },
                      { x: "Feb", y: 22 },
                      { x: "Jan", y: 21 },
                    ]}
                  />
                  <VictoryBar
                    data={[
                      { x: "May", y: 15 },
                      { x: "Apr", y: 10 },
                      { x: "Mar", y: 13 },
                      { x: "Feb", y: 22 },
                      { x: "Jan", y: 11 },
                    ]}
                  />
                </VictoryGroup>
              </VictoryChart>
            </Grid>

            <Grid item lg={4} md={12} sm={12} xs={12}>
              <div>
                <div style={{ marginTop: "25%" }}>
                  {[
                    {
                      color: "#FFEAA7",
                      text: "Direct Communication",
                    },
                    {
                      color: "#FF7675",
                      text: "Pending Interviews",
                    },
                    {
                      color: "#1D8A8B",
                      text: "Interviews Conducted",
                    },
                  ].map((v, i) => {
                    return (
                      <div className={classes.insBox}>
                        <div
                          className={classes.insColor}
                          style={{
                            backgroundColor: `${v.color}`,
                          }}
                        ></div>
                        <span className={classes.insText}>{v.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <Modal
          open={openModel}
          onClose={handleCloseModel}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
        >
          <div className={classes.paper}>
            <div className={classes.dialogBox}>
              <div className={classes.dialogHeader}>
                <span className={classes.heading}>Communication</span>

                <Button onClick={handleCloseModel}>
                  <Close />
                </Button>
              </div>

              <div className={classes.chartBox}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={radio}
                      onChange={handleChangeRadio}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <FormControlLabel
                        value="applied"
                        label="Applied"
                        control={<Radio style={{ color: "#1D8A8B" }} />}
                        labelPlacement="start"
                      />
                      <FormControlLabel
                        value="saved"
                        control={<Radio style={{ color: "#1D8A8B" }} />}
                        label="Saved"
                        labelPlacement="start"
                      />
                    </RadioGroup>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {[
                      {
                        color: "#FFEAA7",
                        text: "Direct Communication",
                      },
                      {
                        color: "#FF7675",
                        text: "Pending Interviews",
                      },
                      {
                        color: "#1D8A8B",
                        text: "Interviews Conducted",
                      },
                    ].map((v, i) => {
                      return (
                        <div className={classes.insBox}>
                          <div
                            className={classes.insColor}
                            style={{
                              backgroundColor: `${v.color}`,
                            }}
                          ></div>
                          <span className={classes.insText}>{v.text}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    style={{
                      justifyContent: "flex-end",
                    }}
                  >
                    <DropDown
                      title="QTR"
                      border={true}
                      options={[
                        {
                          value: "Dec, 2020",
                          label: "Dec, 2020",
                        },
                        {
                          value: "Jan, 2021",
                          label: "Jan, 2021",
                        },
                      ]}
                    />
                  </div>
                </div>

                <Grid container spacing={1}>
                  <Grid item lg={8} md={12} sm={12} xs={12}>
                    <VictoryChart height={280}>
                      <VictoryAxis
                        dependentAxis
                        tickValues={[5, 10, 15, 20]}
                        style={{
                          grid: { stroke: "#F0F2F6", strokeDasharray: "0" },
                          tickLabels: { fontSize: 12 },
                          axis: {
                            stroke: "#000",
                            strokeWidth: 1,
                            strokeDasharray: "0",
                          },
                        }}
                        orientation="top"
                      />
                      <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={["Jan", "Feb", "Mar", "Apr", "May"]}
                        style={{
                          grid: { stroke: "#F0F2F6", strokeDasharray: "0" },
                          tickLabels: { fontSize: 12 },
                          axis: {
                            stroke: "#000",
                            strokeWidth: 1,
                            strokeDasharray: "0",
                          },
                        }}
                        orientation="left"
                      />

                      <VictoryGroup
                        horizontal
                        offset={10}
                        style={{ data: { width: 8 } }}
                        colorScale={graphicColor}
                        domainPadding={10}
                      >
                        <VictoryBar
                          data={[
                            { x: "May", y: 25 },
                            { x: "Apr", y: 20 },
                            { x: "Mar", y: 13 },
                            { x: "Feb", y: 12 },
                            { x: "Jan", y: 21 },
                          ]}
                        />
                        <VictoryBar
                          data={[
                            { x: "May", y: 20 },
                            { x: "Apr", y: 12 },
                            { x: "Mar", y: 24 },
                            { x: "Feb", y: 22 },
                            { x: "Jan", y: 21 },
                          ]}
                        />
                        <VictoryBar
                          data={[
                            { x: "May", y: 15 },
                            { x: "Apr", y: 10 },
                            { x: "Mar", y: 13 },
                            { x: "Feb", y: 22 },
                            { x: "Jan", y: 11 },
                          ]}
                        />
                      </VictoryGroup>
                    </VictoryChart>
                  </Grid>

                  <Grid item lg={4} md={12} sm={12} xs={12}></Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default JobsStatisticsChart;
