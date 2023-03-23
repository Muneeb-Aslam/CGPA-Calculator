import {InputCGPA} from './inputFields'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus,faCircleXmark} from '@fortawesome/free-solid-svg-icons'

export default function CGPA(props){
    return(
        <div className="GPA-container">
        <h3>Cumulative GPA</h3>
        <InputCGPA />
        <InputCGPA />
        <InputCGPA />
        <div className="icons">
            <div className="add"><FontAwesomeIcon icon={faCirclePlus} /> {" "}Add Semester</div>
            <div className="delete"><FontAwesomeIcon icon={faCircleXmark} /> {" "}Clear All</div>
        </div>
    </div>
    )
}