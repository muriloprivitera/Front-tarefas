import React, { useState } from "react";
import Button from "./Button";
import "./AddTask.css";

const AddTask = ({handleTaskAddition}) => {
    const [inputData,setInputData] = useState('');

    const handleInputData = (e) =>{
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData('');
    }


    return (
        <>
            <div className="add-task-container">
                <input type="text" 
                className="add-task-input" 
                onChange={handleInputData} 
                value={inputData}
                placeholder='Adicionar Tarefa'
                />
                <div className="add-task-button">
                    <Button onClick={handleAddTaskClick}>Adicionar</Button>
                </div>
            </div>
        </>
    )
}

export default AddTask;