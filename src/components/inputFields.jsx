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
    function handleChange(e){
        return props.change((preValue) => {
            return { ...preValue, [e.target.name]: e.target.value };
        });
    }
    return (
        <div className="cgpa-inputs">
            <input
                className="subjectName"
                type="text"
                placeholder="Semester No"
            />
            <input
                className="credits"
                name={props.name}
                type="text"
                placeholder="SGPA"
                value={props.value}
                onChange={handleChange}
            />
        </div>
    );
}

export { InputCGPA, InputGPA };
