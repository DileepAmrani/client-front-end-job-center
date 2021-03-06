import React from "react";
import Logo from "./../../Assets/companyLogoOne.png";
import { Bookmark, BookmarkBorderOutlined } from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';
import cx from "clsx"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    padding: "10px",
    cursor: "pointer",
  },
  activeCard: {
      borderLeft: '4px solid #1D8A8B',
      background: 'rgba(0, 0, 0, 0.03)'
  },
  logo: {
    margin: "10px",
  },
  middleSection: {
    flex: 1,
    padding: "5px",
  },
  name: {
    display: "block",
    fontSize: "16px",
    fontWeight: "500",
    padding: "3px 0",
    color: "#111e14",
  },
  address: {
    fontSize: "14px",
    display: "block",
    color: "#9b9e9c",
    fontWeight: "400",
  },
  salary: {
    fontSize: "14px",
    color: "#9b9e9c",
    fontWeight: "400",
  },
  type: {
    fontSize: "14px",
    color: "#9b9e9c",
    fontWeight: "400",
  },
  publishedOn: {
    fontSize: "13px",
    color: "#9b9e9c",
    display: "block",
  },
  iconButton: {
    marginTop: "15px",
    float: "right",
  },
}));
const JobItem = (props) => {
  const classes = useStyles();
  return (
    <div className={cx(classes.card, props.active ? classes.activeCard : '')}>
      <div>
        <img src={Logo} alt="" className={classes.logo} />
      </div>
      <div className={classes.middleSection}>
        <span className={classes.name}>Senior Product Designer </span>
        <span className={classes.address}>Delta Dental, Oakland, CA </span>
        <span className={classes.salary}>$80,000+, </span>
        <span className={classes.type}>Full-time </span>
      </div>
      <div>
        <span className={classes.publishedOn}>10m ago</span>
        <div className={classes.iconButton}>

        <IconButton  component="span">
           {props.bookMarked ? <Bookmark color="secondary"/> : <BookmarkBorderOutlined/>} 
        </IconButton>

        
        </div>
      </div>
    </div>
  );
};

export default JobItem;
