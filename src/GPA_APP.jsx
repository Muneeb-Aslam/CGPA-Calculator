import GPA from "./components/GPA_Calculator";
import React from "react";

export default function GPA_App(props) {
    const [result,setResult] = React.useState("");
    return (
        <>
            <div className="title">GPA Calculator</div>
            <GPA set={setResult}/>
            <div className="change-div">
                For Cumulative GPA?{" "}
                <span onClick={() => props.onSwitch("CGPA")}>Click Here</span>
            </div>
            <div className="result" data-result>
                Your CGPA is: {result}
            </div>
        </>
    );
}
