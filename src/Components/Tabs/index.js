import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";
import Bookmark from "@material-ui/icons/Bookmark";
import Launch from "@material-ui/icons/Launch";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  tabTitle: {
    color: "#1D8A8B",
    fontWeight: 600,
    textAlign: "right",
  },
  buttonBox: {
    marginBottom: 20,
  },
  applyNowButton: {
    boxShadow: "none",
    background: "#FC821F",
    borderRadius: "4px",
    color: "#fff",
    padding: "12px",
    width: 200,
    marginRight: 10,
    marginBottom: 5,
    textTransform: "none",
    '&:hover':{
      backgroundColor: '#fc9b4b'
    }
  },
  applySaveJob: {
    boxShadow: "none",
    borderRadius: "4px",
    backgroundColor: " #F0F2F6",
    padding: "12px",
    width: 200,
    marginRight: 10,
    marginBottom: 5,
    textTransform: "none",
    color: "#000",
    '&:hover':{
      backgroundColor: '#c0c1c4',
    }
  },
  applyButton: {
    boxShadow: "none",
    background: "#1D8A8B",
    borderRadius: "4px",
    color: "#fff",
    padding: "12px",
    width: 300,
    marginRight: 10,
    marginBottom: 5,
    textTransform: "none",
    '&:hover':{
      backgroundColor: '#4aa1a2'
    }
  },
  paragraph: {
    marginBottom: "20px",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#fff" }} elevation="0">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            label="Description"
            {...a11yProps(0)}
            className={classes.tabTitle}
          />
          <Tab
            label="Benefits"
            {...a11yProps(1)}
            className={classes.tabTitle}
          />
          <Tab label="Company" {...a11yProps(2)} className={classes.tabTitle} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.buttonBox}>
          <Button variant="contained" className={classes.applyNowButton} disableElevation>
            Apply Now
          </Button>
          <Button
            variant="contained"
            className={classes.applySaveJob}
            startIcon={<Bookmark style={{color: "#FC821F"}} />}
            disableElevation
          >
            Saved to my Jobs
          </Button>

          <Button
            variant="contained"
            className={classes.applyButton}
            endIcon={<Launch />}
            disableElevation
          >
            Apply on Company’s Site
          </Button>
        </div>
        <div>
          <p className={classes.paragraph}>
            Dynetics, a wholly owned subsidiary of Leidos, is seeking a talented
            Jr. Electronics Product Design Engineer to join a diverse team to
            create unique solutions for complex problems. With offices across
            the United States engaging in the defense, space, cyber and
            commercial fields, Dynetics provides responsive, cost-effective
            engineering, scientific and IT solutions.
          </p>
          <p className={classes.paragraph}>
            The Product Engineering Department is a design-focused group of
            engineers specializing in advanced hardware products. The individual
            selected for this position will be a design engineer with varied
            technical interests and demonstrated engineering skills. The
            individual must be a self-starter with experience working with
            inter-disciplinary teams to solve challenging technical problems.
            The engineer will work closely with electronics integrated into a
            diverse range of aerospace and military systems including
            manned/unmanned ground/air vehicles, missiles, defensive radars, and
            space systems.
          </p>
          <p className={classes.paragraph}>
            The Jr. Electronics Product Design Engineer will be expected to
            execute in a fast-paced, small team environment through all phases
            of the product life cycle from concept development and detailed
            design through manufacturing, qualification testing, and
            post-delivery support. The engineer will be responsible for
            architecting, implementing, and testing printed circuit board
            assemblies (PCBAs) including power supply, mixed-signal, FPGA, and
            microcontroller designs. Additional skills such as signal integrity
            analysis, power distribution network design, basic VHDL proficiency,
            experience with technical trade studies, and evaluation of
            technology improvements are a plus.
          </p>
          <p className={classes.paragraph}>
            With a product focus, the individual is also expected to actively
            partner with other engineers, project managers, technicians, and the
            customer to develop solutions that adhere to a diverse set of
            requirements. Additionally, the engineer will support resolution of
            technical issues that are discovered during the manufacture and test
            of deliverable products. This will include troubleshooting
            board-level issues, assessing failures for root cause, and
            identifying corrective actions.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.buttonBox}>
          <Button variant="contained" className={classes.applyNowButton}>
            Apply Now
          </Button>
          <Button
            variant="contained"
            className={classes.applySaveJob}
            startIcon={<Bookmark style={{color: "#FC821F"}} />}
          >
            Saved to my Jobs
          </Button>

          <Button
            variant="contained"
            className={classes.applyButton}
            endIcon={<Launch />}
          >
            Apply on Company’s Site
          </Button>
        </div>
        <div>
          <p className={classes.paragraph}>
            Dynetics, a wholly owned subsidiary of Leidos, is seeking a talented
            Jr. Electronics Product Design Engineer to join a diverse team to
            create unique solutions for complex problems. With offices across
            the United States engaging in the defense, space, cyber and
            commercial fields, Dynetics provides responsive, cost-effective
            engineering, scientific and IT solutions.
          </p>
          <p className={classes.paragraph}>
            The Product Engineering Department is a design-focused group of
            engineers specializing in advanced hardware products. The individual
            selected for this position will be a design engineer with varied
            technical interests and demonstrated engineering skills. The
            individual must be a self-starter with experience working with
            inter-disciplinary teams to solve challenging technical problems.
            The engineer will work closely with electronics integrated into a
            diverse range of aerospace and military systems including
            manned/unmanned ground/air vehicles, missiles, defensive radars, and
            space systems.
          </p>
          <p className={classes.paragraph}>
            The Jr. Electronics Product Design Engineer will be expected to
            execute in a fast-paced, small team environment through all phases
            of the product life cycle from concept development and detailed
            design through manufacturing, qualification testing, and
            post-delivery support. The engineer will be responsible for
            architecting, implementing, and testing printed circuit board
            assemblies (PCBAs) including power supply, mixed-signal, FPGA, and
            microcontroller designs. Additional skills such as signal integrity
            analysis, power distribution network design, basic VHDL proficiency,
            experience with technical trade studies, and evaluation of
            technology improvements are a plus.
          </p>
          <p className={classes.paragraph}>
            With a product focus, the individual is also expected to actively
            partner with other engineers, project managers, technicians, and the
            customer to develop solutions that adhere to a diverse set of
            requirements. Additionally, the engineer will support resolution of
            technical issues that are discovered during the manufacture and test
            of deliverable products. This will include troubleshooting
            board-level issues, assessing failures for root cause, and
            identifying corrective actions.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.buttonBox}>
          <Button variant="contained" className={classes.applyNowButton}>
            Apply Now
          </Button>
          <Button
            variant="contained"
            className={classes.applySaveJob}
            startIcon={<Bookmark style={{color: "#FC821F"}}/>}
          >
            Saved to my Jobs
          </Button>

          <Button
            variant="contained"
            className={classes.applyButton}
            endIcon={<Launch />}
          >
            Apply on Company’s Site
          </Button>
        </div>
        <div>
          <p className={classes.paragraph}>
            Dynetics, a wholly owned subsidiary of Leidos, is seeking a talented
            Jr. Electronics Product Design Engineer to join a diverse team to
            create unique solutions for complex problems. With offices across
            the United States engaging in the defense, space, cyber and
            commercial fields, Dynetics provides responsive, cost-effective
            engineering, scientific and IT solutions.
          </p>
          <p className={classes.paragraph}>
            The Product Engineering Department is a design-focused group of
            engineers specializing in advanced hardware products. The individual
            selected for this position will be a design engineer with varied
            technical interests and demonstrated engineering skills. The
            individual must be a self-starter with experience working with
            inter-disciplinary teams to solve challenging technical problems.
            The engineer will work closely with electronics integrated into a
            diverse range of aerospace and military systems including
            manned/unmanned ground/air vehicles, missiles, defensive radars, and
            space systems.
          </p>
          <p className={classes.paragraph}>
            The Jr. Electronics Product Design Engineer will be expected to
            execute in a fast-paced, small team environment through all phases
            of the product life cycle from concept development and detailed
            design through manufacturing, qualification testing, and
            post-delivery support. The engineer will be responsible for
            architecting, implementing, and testing printed circuit board
            assemblies (PCBAs) including power supply, mixed-signal, FPGA, and
            microcontroller designs. Additional skills such as signal integrity
            analysis, power distribution network design, basic VHDL proficiency,
            experience with technical trade studies, and evaluation of
            technology improvements are a plus.
          </p>
          <p className={classes.paragraph}>
            With a product focus, the individual is also expected to actively
            partner with other engineers, project managers, technicians, and the
            customer to develop solutions that adhere to a diverse set of
            requirements. Additionally, the engineer will support resolution of
            technical issues that are discovered during the manufacture and test
            of deliverable products. This will include troubleshooting
            board-level issues, assessing failures for root cause, and
            identifying corrective actions.
          </p>
        </div>
      </TabPanel>
    </div>
  );
}
