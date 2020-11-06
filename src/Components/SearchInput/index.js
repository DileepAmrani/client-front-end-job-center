import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import "./serachInput.css"
export default function index() {
    return (
        <div className="searchInput">
            <div className="iconSide">
                <AiOutlineSearch size={30} color="#9B9E9C"/>
            </div>
            <div  className="inputSide">
            <input type="text" className="input" placeholder="Search Jobs"/>
            </div>
        </div>
    )
}
