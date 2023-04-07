import { InputCGPA } from "./inputFields";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";


export default function CGPA(props){
    
    const dataResult = document.querySelector("[data-result]")
    const [Input, setInput] = React.useState({
        SGPA0: "",SGPA1:"",SGPA2:"",SGPA3:"",SGPA4:"",SGPA5:"",SGPA6:"",SGPA7:""
    });
    const SemesterNum = [1];

    function handleClick(e){
        e.preventDefault()
        // const {SGPA0,SGPA1,SGPA2,SGPA3,SGPA4,SGPA5,SGPA6,SGPA7}=Input;
        let sum=0,counter=0,flag=false;
        for(let i in Input){
            if(Input[i]){
                flag=true;
                sum=sum+parseFloat(Input[i])
                counter+=1
            }
        }
        if(flag){
            dataResult.classList.add("show");
            return props.set(()=> parseFloat(sum/counter).toFixed(2))
        }
    };
    const [addSemester, setaddSemester] = React.useState(SemesterNum);
    function AddSemester() {
        setaddSemester([
            ...addSemester,
            addSemester[addSemester.length - 1] + 1,
        ]);
    }
    function clearAll() {
        setaddSemester([addSemester]);
        setInput({SGPA0: "",SGPA1:"",SGPA2:"",SGPA3:"",SGPA4:"",SGPA5:"",SGPA6:"",SGPA7:""})
        dataResult.classList.remove("show")
        props.set(()=>"")
    }
    return (
        <form className="GPA-container">
            <h3>Cumulative GPA</h3>
            {addSemester.map((e, id) => {
                return (
                    <InputCGPA
                        key={id}
                        index={id}
                        name={`SGPA${id}`}
                        value={Input[`SGPA${id}`]}
                        change={setInput}
                    />
                );
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
            <button
                type="submit"
                className="calculate-gpa"
                onClick={handleClick}
            >
                Calculate
            </button>
        </form>
    );
}
