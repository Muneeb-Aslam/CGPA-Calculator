import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { InputGPA } from "./inputFields";
import React from "react";

export default function GPA(props) {
    const Grades = {"A":4,"B+":3.5,"B":3,"C+":2.5,"C":2,"D+":1.5,"D":1,"F":0}
    const [Input, setInput] = React.useState([{ name: "", grade: "A", credit: "" }]);
    const [formError,setFormError]= React.useState("")
    const dataResult = document.querySelector("[data-result]");
    const handleClick = (e) => {
        e.preventDefault();
        console.log(Input);
        let sum = 0
        let sumCredits = 0
        for(let i in Input){
            const grade = Grades[Input[i]["grade"]]
            sumCredits+=(parseFloat(Input[i]["credit"]))
            sum+=(parseFloat(Input[i]["credit"])*grade)
        }
        console.log(sum);
        dataResult.classList.add("show");
        return props.set(() => parseFloat(sum / sumCredits).toFixed(2));
    }
    function handleChange(event, index) {
        const data = [...Input]
        data[index][event.target.name]=event.target.value
        setInput(data)
    }
    function addCourse() {
        const newField = { name: "", grade: "A", credit: "" }
        setInput([...Input, newField])
    }
    function clearAll() {
        setInput([{ name: "", grade: "A", credit: "" }])
        dataResult.classList.remove("show");
        props.set(() => "");
    }
    function TrashClicked(event,index){
        const data = [...Input]
        if(data.length>1)
        data.splice(index,1)
        setInput(data)
    }
    function handleBlur(index){
        (Input[index]["name"].length==0 || Input[index]["credit"].length==0)?setFormError("Empty Fields"):setFormError("")
    }
    return (
        <form className="GPA-container">
            <div className="errors">{formError}</div>
            <h3>Semester GPA</h3>
            {Input.map((items, id) => {
                return <InputGPA key={id} index={id} change={handleChange} valueName={items.name} valueGrade={items.grade} 
                valueCredit={items.credit} handleDelete={TrashClicked} blur={handleBlur}/>
            })}
            <div className="icons">
                <div className="add" onClick={addCourse}>
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
