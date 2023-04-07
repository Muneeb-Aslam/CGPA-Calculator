import CGPA from "./components/CGPA_Calculator";
import React from "react";

export default function CGPA_App(props) {
    const [result,setResult] = React.useState("");
    return (
        <>
            <div className="title">CGPA Calculator</div>
            <CGPA set={setResult}/>
            <div className="change-div">
                For Semester GPA?{" "}
                <span onClick={() => props.onSwitch("GPA")}>Click Here</span>
            </div>
            <div className="result" data-result>
                Your CGPA is: {result}
            </div>
        </>
    );
}
