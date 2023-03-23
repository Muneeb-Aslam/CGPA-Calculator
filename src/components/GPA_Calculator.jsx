import Input from "./inputFields"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus,faCircleXmark} from '@fortawesome/free-solid-svg-icons'

export default function GPA(props){
    return(
        <div className="GPA-container">
            <h3>Semester GPA</h3>
            <div className="subjects">
                <h4>Coruse Name</h4>
                <h4>Grade</h4>
                <h4>Credits</h4>
            </div>
            <Input />
            <Input />
            <Input />
            <div className="icons">
                <div className="add"><FontAwesomeIcon icon={faCirclePlus} /> {" "}Add Course</div>
                <div className="delete"><FontAwesomeIcon icon={faCircleXmark} /> {" "}Clear All</div>
            </div>
        </div>
    )
}