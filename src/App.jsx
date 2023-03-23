import GPA from "./components/GPA_Calculator"
import CGPA from "./components/CGPA_Calculator"
import React from "react"

export default function App() {
  const [state,setState]=React.useState("GPA")
  return (
      <div className="container">
        <div className="title">GPA Calculator</div>
        <GPA />
        <div className="footer">
          <button className="calculate-gpa">Calculate</button>
        </div>
        <div className="CGPA">For Cumulative GPA? <span>Click Here</span></div>
      </div>
      
  )
}

