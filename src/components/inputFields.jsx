export default function Input() {
    return (
        <div className="inputs">
            <input className="subjectName" type="text" placeholder="Subject Name" />
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
            <input className="credits" type="number" placeholder="Credits" />
        </div>
    );
}
