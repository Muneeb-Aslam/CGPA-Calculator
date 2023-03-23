import React from "react"
import CGPA_App from "./CGPA_App"
import GPA_App from "./GPA_APP"

export default function App() {
  const [state,setstate]=React.useState("GPA")
  function toggle(FormSwitch){
    return setstate(FormSwitch)
  }
  return (
    state==="GPA"?<GPA_App onSwitch={toggle}/>:<CGPA_App onSwitch={toggle}/>
  )
}

