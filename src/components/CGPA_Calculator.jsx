import { InputCGPA } from "./inputFields";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";


export default function CGPA() {
    const SemesterNum = [1];
    const handleClick = ()=>{

    }
    const [addSemester, setaddSemester] = React.useState(SemesterNum);
    function AddSemester() {
        setaddSemester([...addSemester,addSemester[addSemester.length-1]+1])
    }
    function clearAll() {
        setaddSemester([addSemester])
    }
    return (
        <form className="GPA-container">
            <h3>Cumulative GPA</h3>
            {addSemester.map((e,id) => {
                return (<InputCGPA key={id}/>)
            })}
            <div className="icons">
                <div className="add" onClick={AddSemester}>
                    <FontAwesomeIcon
                        className="fontawesome"
                        icon={faCirclePlus}
                    />{" "}
                    Add Semester
                </div>
                <div className="delete" onClick={clearAll}>
                    <FontAwesomeIcon
                        className="fontawesome"
                        icon={faCircleXmark}
                    />{" "}
                    Clear All
                </div>
            </div>
            <button type="submit" className="calculate-gpa" onClick={handleClick}>Calculate</button>
        </form>
    );
}
