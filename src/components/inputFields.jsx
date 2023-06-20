import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function InputGPA() {
    return (
        <div className="inputs">
            <input
                className="subjectName"
                type="text"
                placeholder="Subject Name"
            />
            <select className="options" name="Grade" id="">
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
            <input className="credits" type="text" placeholder="Credits" />
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
            />
            <input
                className="credits"
                name="credit"
                type="text"
                placeholder="SGPA"
                value={props.valueCredit}
                onChange={(event) => props.change(event,index)}
            />
            <div className="deleteCourse">
                <FontAwesomeIcon icon={faTrash} className="trashicon"/>
            </div>
        </div>
    );
}

export { InputCGPA, InputGPA };
