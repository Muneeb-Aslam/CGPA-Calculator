import { InputCGPA } from "./inputFields";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function CGPA(props) {
    const dataResult = document.querySelector("[data-result]");
    const [Input, setInput] = React.useState([{ semNo: "", credit: "" }]);

    function handlechange(event, index) {
        const data = [...Input];
        data[index][event.target.name] = event.target.value;
        setInput(data);
    }

    function handleClick(e) {
        e.preventDefault();
        let sum = 0;
        for (let i in Input) {
            sum = sum + parseFloat(Input[i]["credit"]);
        }
        dataResult.classList.add("show");
        return props.set(() => parseFloat(sum / Input.length).toFixed(2));
    }

    function AddSemester() {
        const newField = { semNo: "", credit: "" };
        setInput([...Input, newField]);
    }
    function clearAll() {
        setInput([{ semNo: "", credit: "" }]);
        dataResult.classList.remove("show");
        props.set(() => "");
    }
    function TrashClicked(event,index){
        const data = [...Input]
        if(data.length>1)
        data.splice(index,1)
        setInput(data)
    }
    return (
        <form className="GPA-container">
            <h3>Cumulative GPA</h3>
            {Input &&
                Input.map((input, id) => {
                    return (
                        <InputCGPA
                            key={id}
                            index={id}
                            valueSem={input.semNo}
                            valueCredit={input.credit}
                            change={handlechange}
                            handleDelete={TrashClicked}
                        />
                    );
                })}
            <div className="icons">
                <div className="add" onClick={AddSemester}>
                    <FontAwesomeIcon className="fontawesome" icon={faCirclePlus} /> Add
                    Semester
                </div>
                <div className="delete" onClick={clearAll}>
                    <FontAwesomeIcon className="fontawesome" icon={faCircleXmark} /> Clear
                    All
                </div>
            </div>
            <button type="submit" className="calculate-gpa" onClick={handleClick}>
                Calculate
            </button>
        </form>
    );
}
