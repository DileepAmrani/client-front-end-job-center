import React from "react";
import {
  VictoryPie,
  VictorySharedEvents,
  VictoryTooltip,
  VictoryContainer,
} from "victory";

import { makeStyles, Grid } from "@material-ui/core";
import DropDown from "./../DropDown";

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
  sectionTitle: {
    fontSize: 20,
    color: "#111E14",
    fontWeight: 500,
    display: "block",
    flex: 1,
    textAlign: "left",
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

const data = [
  { x: 1, y: 21, name: "Job Postings...", color: "#FF7675" },
  { x: 2, y: 19, name: "Employer Pages visited", color: "#1D8A8B" },
  { x: 3, y: 64, name: "Postings viewed", color: "#FFEAA7" },
];

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
const getMouseOverHandler = () => {
  return {
    onMouseOver: () => {
      return [
        {
          target: "data",
          eventKey: "all",
          childName: ["pie", "legend"],
          mutation: (props) => {
            return {
              style: {
                ...props.style,
                opacity: 0.2,
              },
            };
          },
        },
        {
          target: "labels",
          eventKey: "all",
          childName: ["pie", "legend"],
          mutation: (props) => {
            return {
              style: {
                ...props.style,
                opacity: 0.2,
              },
            };
          },
        },
        {
          target: "data",
          childName: ["pie", "legend"],
          mutation: (props) => {
            return {
              style: {
                ...props.style,
                opacity: 1,
              },
            };
          },
        },
        {
          target: "labels",
          childName: ["pie", "legend"],
          mutation: (props) => {
            return {
              style: {
                ...props.style,
                opacity: 1,
              },
              active: true,
            };
          },
        },
      ];
    },
    onMouseOut: () => {
      return [
        {
          target: "data",
          eventKey: "all",
          childName: ["pie", "legend"],
          mutation: () => {
            return null;
          },
        },
        {
          target: "labels",
          eventKey: "all",
          childName: ["pie", "legend"],
          mutation: () => {
            return null;
          },
        },
      ];
    },
  };
};

const Tooltip = ({ datum, x, y, translateX, translateY }) => {
  const translate = `translate(${translateX}, ${translateY})`;
  const classes = useStyles();

  return (
    <g style={{ pointerEvents: "none" }} transform={translate}>
      <foreignObject x={x - 50} y={y - 65} width="200" height="50">
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
                backgroundColor: `${datum.color}`,
              }}
            ></div>
            <span className={classes.insText}>{datum.name}</span>
            <span className={classes.insTextBold}>{datum.y}</span>
          </div>
        </div>
      </foreignObject>
    </g>
  );
};

const App = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.headerBox}>
        <span className={classes.heading}>Activity</span>
      </div>
      <div className={classes.chartBox}>
        <Grid container spacing={5}>
          <Grid item lg={7} md={12} sm={12} xs={12}>
            <VictoryContainer width={470} height={300}>
              <VictorySharedEvents
                events={[
                  {
                    childName: ["pie", "legend"],
                    target: "data",
                    eventHandlers: getMouseOverHandler(),
                  },
                  {
                    childName: ["pie", "legend"],
                    target: "labels",
                    eventHandlers: getMouseOverHandler(),
                  },
                ]}
              >
                <g transform="translate(0, 20)">
                  <VictoryPie
                    name="pie"
                    standalone={false}
                    width={300}
                    height={240}
                    innerRadius={120}
                    labelRadius={90}
                    labels={({ datum }) => ``}
                    labelComponent={
                      <VictoryTooltip
                        flyoutComponent={
                          <Tooltip translateX={40} translateY={30} />
                        }
                      />
                    }
                    events={[
                      {
                        target: "data",
                        eventHandlers: {
                          onClick: () => {
                            return [
                              {
                                target: "data",
                                mutation: (props) => {
                                  const fill = props.style.fill;
                                  const color = props.datum.color;
                                  console.log(props.datum.color);
                                  return fill === "#c43a31"
                                    ? null
                                    : {
                                        style: {
                                          stroke: "black",
                                          strokeWidth: 2,
                                          fill: `${color}`,
                                        },
                                      };
                                },
                              },
                              {
                                target: "labels",
                                mutation: ({ text }) => {
                                  return text === "clicked"
                                    ? null
                                    : { text: "clicked" };
                                },
                              },
                            ];
                          },
                        },
                      },
                    ]}
                    colorScale={graphicColor}
                    data={data}
                  />
                </g>
              </VictorySharedEvents>
            </VictoryContainer>
          </Grid>
          <Grid item lg={5} md={12} sm={12} xs={12}>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <DropDown
                  title="Dec, 2020"
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
              <div style={{ marginTop: "20%" }}>
                {[
                  {
                    color: "#FF7675",
                    text: "Job Postings...",
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
    </>
  );
};

export default App;
