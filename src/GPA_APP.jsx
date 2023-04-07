import GPA from "./components/GPA_Calculator";
import React from "react";

export default function GPA_App(props) {
    return (
        <>
            <div className="title">GPA Calculator</div>
            <GPA />
            <div className="change-div">
                For Cumulative GPA?{" "}
                <span onClick={() => props.onSwitch("CGPA")}>Click Here</span>
            </div>
        </>
    );
}
