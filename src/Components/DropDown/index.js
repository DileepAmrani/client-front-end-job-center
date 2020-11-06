import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import "./DropDown.css";
export default function index(props) {
  return (
    <div>
      <div className="dropdown" style={props.style} >
        <button className="dropbtn" style={{backgroundColor: "transparent"}}>
          {props.name} <AiFillCaretDown />
        </button>
        <div className="dropdown-content">
          <div className="item">Item One</div>
          <div className="item">Item One</div>
          <div className="item">Item One</div>
          {/* <a href="#">Link 1</a>
          <a href="#">Link 2</a> */}
        </div>
      </div>
    </div>
  );
}
