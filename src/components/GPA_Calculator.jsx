import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { InputGPA } from "./inputFields";
import React from "react";

export default function GPA(props) {
    const courseNum = [1];
    const [Course, setCourse] = React.useState(courseNum);
    const handleClick = ()=>{

    }
    function addCourse() {
        setCourse([...Course,Course[Course.length-1]+1])
    }
    function clearAll() {
        setCourse([Course])
    }
    return (
        <form className="GPA-container">
            <h3>Semester GPA</h3>
            <div className="subjects">
                <h4>Coruse Name</h4>
                <h4>Grade</h4>
                <h4>Credits</h4>
            </div>
            {Course.map((items,id)=>{
                return <InputGPA key={id} />
            })}
            <div className="icons">
                <div className="add"  onClick={addCourse}>
                    <FontAwesomeIcon
                        className="fontawesome"
                        icon={faCirclePlus}
                    />{" "}
                    Add Course
                </div>
                <div className="delete" onClick={clearAll}>
                    <FontAwesomeIcon
                        className="fontawesome"
                        icon={faCircleXmark}
                    />{" "}
                    Clear All
                </div>
            </div>
            <div className="footer">
                <button
                    type="submit"
                    className="calculate-gpa"
                    onClick={handleClick}
                >
                    Calculate
                </button>
            </div>
        </form>
    );
}
