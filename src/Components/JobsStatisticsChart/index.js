import React, { useState } from "react";
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
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTooltip,
  VictoryAxis,
  VictoryTheme,
} from "victory";

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
  insTextBold: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "14px",
    display: "flex",
    alignItems: "center",
    color: "#111E14",
    paddingLeft: 8,
  },
}));

const Tooltip = ({ datum, x, y, translateX, translateY }) => {
  const translate = `translate(${translateX}, ${translateY})`;
  const classes = useStyles();

  return (
    <g style={{ pointerEvents: "none" }} transform={translate}>
      <foreignObject x={x - 50} y={y - 65} width="150" height="150">
        <div
          style={{
            backgroundColor: "#fff",
            boxShadow: "2px 2px 2px gray",
            padding: "2px",
          }}
        >
          <div className={classes.insBox}>
            <div
              className={classes.insColor}
              style={{
                backgroundColor: `#FFEAA7`,
              }}
            ></div>
            <span className={classes.insText}>Postings viewed</span>
            <span className={classes.insTextBold}>15</span>

          </div>
          <div className={classes.insBox}>
            <div
              className={classes.insColor}
              style={{
                backgroundColor: `#1D8A8B`,
              }}
            ></div>
            <span className={classes.insText}>Postings viewed</span>
            <span className={classes.insTextBold}>11</span>
          </div>

          <div className={classes.insBox}>
            <div
              className={classes.insColor}
              style={{
                backgroundColor: `#FF7675`,
              }}
            ></div>
            <span className={classes.insText}>Duration</span>
            <span className={classes.insTextBold}>12</span>
          </div>
        </div>
      </foreignObject>
    </g>
  );
};

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
          <span className={classes.heading}>Jobs Statistics</span>

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
                  control={<Radio style={{color: '#1D8A8B'}}/>}
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="saved"
                  control={<Radio style={{color: '#1D8A8B'}} />}
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
                title="QTA"
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
              <VictoryChart
                domainPadding={50}
                theme={VictoryTheme.material}
                width={600}
              >
                <VictoryAxis
                  tickValues={[1, 2, 3, 4]}
                  tickFormat={[
                    "Jan, 2020",
                    "Feb, 2020",
                    "Mar, 2020",
                    "Apr, 2020",
                  ]}
                  style={{
                    grid: { stroke: "#F0F2F6", strokeDasharray: "0" },
                    tickLabels: { fontSize: 12 },
                    axis: {
                      stroke: "#000",
                      strokeWidth: 1,
                      strokeDasharray: "0",
                    },
                  }}
                />
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
                />

                <VictoryGroup
                  offset={31}
                  theme={VictoryTheme.material}
                  data={[
                    { x: "Jan, 2020", y: 8 },
                    { x: "Feb, 2020", y: 10 },
                    { x: "Mar, 2020", y: 20 },
                  ]}
                  labels={() => " "}
                  labelComponent={
                    <VictoryTooltip
                      flyoutComponent={
                        <Tooltip translateX={100} translateY={30} />
                      }
                    />
                  }
                  colorScale={graphicColor}
                >
                  <VictoryBar barWidth={30} />
                  <VictoryBar barWidth={30} />
                  <VictoryBar barWidth={30} />
                </VictoryGroup>
              </VictoryChart>
            </Grid>

            <Grid item lg={4} md={12} sm={12} xs={12}>
              <div>
                <div style={{ marginTop: "25%" }}>
                  {[
                    {
                      color: "#FF7675",
                      text: " Job Postings...",
                    },
                    {
                      color: "#1D8A8B",
                      text: "Employer Pages visited",
                    },
                    {
                      color: "#FFEAA7",
                      text: "Postings viewed",
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
                <span className={classes.heading}>Jobs Statistics</span>

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
                        color="primary"
                        control={<Radio style={{color: '#1D8A8B'}} />}
                        labelPlacement="start"
                      />
                      <FormControlLabel
                        value="saved"
                        color="primary"
                        control={<Radio style={{color: '#1D8A8B'}}/>}
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
                        color: "#FF7675",
                        text: " Job Postings...",
                      },
                      {
                        color: "#1D8A8B",
                        text: "Employer Pages visited",
                      },
                      {
                        color: "#FFEAA7",
                        text: "Postings viewed",
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
                      title="QTA"
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

                <VictoryChart width={800}>
                  <VictoryAxis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={[
                      "Jan, 2020",
                      "Feb, 2020",
                      "Mar, 2020",
                      "Apr, 2020",
                    ]}
                    style={{
                      grid: { stroke: "#F0F2F6", strokeDasharray: "0" },
                      tickLabels: { fontSize: 12 },
                      axis: {
                        stroke: "#000",
                        strokeWidth: 1,
                        strokeDasharray: "0",
                      },
                    }}
                  />
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
                  />
                  <VictoryGroup offset={24} colorScale={"qualitative"} labels={() => " "}
                  labelComponent={
                    <VictoryTooltip
                      flyoutComponent={
                        <Tooltip translateX={20} translateY={30} />
                      }
                    />
                  }>
                    <VictoryBar
                      data={[
                        { x: 1, y: 7 },
                        { x: 2, y: 5 },
                        { x: 3, y: 5 },
                        { x: 4, y: 8 },
                        { x: 5, y: 7 },
                      ]}
                      colorScale={graphicColor}
                      barWidth={24}
                    />
                    <VictoryBar
                      data={[
                        { x: 1, y: 5 },
                        { x: 2, y: 7 },
                        { x: 3, y: 7 },
                        { x: 4, y: 8 },
                        { x: 5, y: 10 },
                      ]}
                      colorScale={graphicColor}
                      barWidth={24}
                    />
                    <VictoryBar
                      data={[
                        { x: 1, y: 6 },
                        { x: 2, y: 4 },
                        { x: 3, y: 9 },
                        { x: 4, y: 11 },
                        { x: 5, y: 12 },
                      ]}
                      colorScale={graphicColor}
                      barWidth={24}
                    />
                  </VictoryGroup>
                </VictoryChart>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default JobsStatisticsChart;
