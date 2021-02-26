import React from "react";
import { Bookmark, BookmarkBorderOutlined } from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar"
import clsx from "clsx"

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    padding: "10px",
    cursor: "pointer",
    borderLeft: '4px solid #fff',

  },
  activeCard: {
      borderLeft: '4px solid #1D8A8B',
      background: 'rgba(0, 0, 0, 0.03)'
  },
  avatar: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
  },

  middleSection: {
    flex: 1,
    padding: "0 5px",
    textAlign: 'left'
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
    marginTop: "20px",
    float: "right",
  },
}));
const JobItem = (props) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.card, props.active ? classes.activeCard : '')}>
      <div>
        <Avatar className={classes.avatar}>
          AA
        </Avatar>
      </div>
      <div className={classes.middleSection}>
        <span className={classes.name}>Account Manager Retail</span>
        <span className={classes.address}>Oakland, CA</span>
        <span className={classes.salary}>$80,000+, </span>
        <span className={classes.type}>Full-time </span>
      </div>
      <div>
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
