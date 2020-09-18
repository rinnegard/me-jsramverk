import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import Toc from "../components/Toc.js";
import axios from "axios";
import { useParams } from "react-router-dom";

function Report() {
    const { id } = useParams();
    console.log(id);

    const [content, setContent] = useState("");

    useEffect(() => {
        axios.get("http://localhost:1337/reports/week/" + id)
        .then(function(res) {
            console.log(res.data.data.result);
            setContent(res.data.data.result.content);
        })
        .catch(function(error) {
            console.log(error);
        })
    });

    return (
        <div className="content">
            <Toc />
            <div className="report">
                <ReactMarkdown source={content}/>
            </div>
        </div>
    )
}

export default Report;
