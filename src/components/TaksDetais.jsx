import React from "react";
import Button from "./Button";
import { useParams, useNavigate  } from "react-router-dom";
import "./TaskDetais.css";

const TaskDetais = () =>{
    const params = useParams();
    const history = useNavigate ();
    return (
        <>
            <div className="back-button-container">
                <Button onClick={()=> history(-1)}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Teste de testo testado com muito teste
                </p>
            </div>
        </>
    )
}


export default TaskDetais;