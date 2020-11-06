import React from "react";
import DropDown from "./../DropDown";
import Grid from "@material-ui/core/Grid";

export default function index() {
  return (
    <div style={{ justifyContent: "flex-end", padding: "10px 0" }}>
      <Grid container spacing={3}>
        <Grid item >
          <DropDown name="Recent searches"/>
        </Grid>
        <Grid item >
          <DropDown name="Job Type"/>
        </Grid>
        <Grid item >
          <DropDown name="Date Posted"/>
        </Grid>
        <Grid item >
          <DropDown name="Salary"/>
        </Grid>
        <Grid item >
          <DropDown name="Work from Home"/>
        </Grid>
      </Grid>
    </div>
  );
}
