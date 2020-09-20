import React, {useState, useEffect} from 'react';
import axios from "axios";


function NewReport(props) {
    const [week, setWeek] = useState("");
    const [content, setContent] = useState("");

    function formSubmit(e) {
        e.preventDefault();

        console.log(week);
        console.log(content);

        const authAxios = axios.create({
            baseURL: "http://localhost:1337/",
            headers: {
                Authorization: `Bearer ${props.auth.token}`
            }
        });

        const body = {
            week: week,
            content: content
        }

        authAxios.post("reports", body)
        .then(function(res) {
            console.log(res);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    function inputChange(e) {
        if (e.target.type === "number") {
            setWeek(e.target.value);
        } else if (e.target.type === "textarea") {
            setContent(e.target.value);
        }
    }

    return (
        <div className="content">
            <h1>Add/Edit new report</h1>
            <form onSubmit={formSubmit}>
                <label htmlFor="week">Week</label>
                <input type="number" name="week" min="1" required onChange={inputChange} value={week}/>
                <label htmlFor="content">Content</label>
                <textarea name="content" required onChange={inputChange}/>
                <input className="blue-button button" type="submit" value="Submit" />
            </form>

        </div>

    )
}

export default NewReport;
