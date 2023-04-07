import CGPA from "./components/CGPA_Calculator";
import React from "react";

export default function CGPA_App(props) {
    return (
        <>
            <div className="title">CGPA Calculator</div>
            <CGPA />
            <div className="change-div">
                For Semester GPA?{" "}
                <span onClick={() => props.onSwitch("GPA")}>Click Here</span>
            </div>
        </>
    );
}
