import React, {useState, useEffect} from 'react';
import axios from "axios";

function NewReport() {
    const [week, setWeek] = useState("");
    const [content, setContent] = useState("");

    function formSubmit(e) {
        console.log(week);
        console.log(content);
        e.preventDefault();
        axios.post("http://localhost:1337/report", {
            week: week,
            content: content
        })
        .then(function(res) {
            console.log(res);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    function inputChange(e) {
        if (e.target.type === "week") {
            setWeek(e.target.value);
        } else if (e.target.type === "content") {
            setContent(e.target.value);
        }
    }

    return (
        <div className="content">
            <h1>Add new report</h1>
            <form onSubmit={formSubmit}>
                <label htmlFor="week">Week</label>
                <input type="number" name="week" required min="1" step="1" onChange={inputChange}/>
                <label htmlFor="content">Content</label>
                <textarea name="content" required onChange={inputChange}/>
                <input className="blue-button button" type="submit" value="Submit" />
            </form>

        </div>

    )
}

export default NewReport;
