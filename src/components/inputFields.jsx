import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function InputGPA(props) {
    return (
        <div className="inputs">
            <input
                className="subjectName"
                type="text"
                placeholder="Subject Name"
                name="name"
                value={props.valueName}
                onChange={event=>props.change(event,props.index)}
                onBlur={()=>props.blur(props.index)}
            />
            <select className="options" name="grade" id="" value={props.valueGrade} 
            onChange={event=>props.change(event,props.index)}>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
            <input className="credits" type="text" placeholder="Credits" name="credit" value={props.valueCredit} 
            onChange={event=>props.change(event,props.index)} onBlur={()=>props.blur(props.index)}/>
            <div className="deleteCourse" onClick={event=>props.handleDelete(event,props.index)}>
                <FontAwesomeIcon icon={faTrash} className="trashicon"/>
            </div>
        </div>
    );
}
function InputCGPA(props) {
    const index = props.index
    return (
        <div className="cgpa-inputs">
            <input
                className="subjectName"
                name="semNo"
                value={props.valueSem}
                type="text"
                placeholder="Semester No"
                onChange={(event) => props.change(event,index)}
                onBlur={()=>props.blur(props.index)}
            />
            <input
                className="credits"
                name="credit"
                type="text"
                placeholder="SGPA"
                value={props.valueCredit}
                onChange={(event) => props.change(event,index)}
                onBlur={()=>props.blur(props.index)}
            />
            <div className="deleteCourse">
                <FontAwesomeIcon icon={faTrash} className="trashicon" onClick={event=>props.handleDelete(event,props.index)}/>
            </div>
        </div>
    );
}

export { InputCGPA, InputGPA };
