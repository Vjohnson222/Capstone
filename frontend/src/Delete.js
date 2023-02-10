import "./App.css";
import React, { useState } from "react";


//Idon't know if we'll make use of this logic

//function Delete component that takes in three props tasks, updateTasks, and index
function Delete({ tasks, updateTasks, index  }) {
  
  const deleteTask = (searchIndex) => {
    let newTasks = tasks.filter((_, i) => i !== searchIndex);
    updateTasks(newTasks);
  };

  

  return (
    <div className="container2 Introduction">
      

                <button
                  className="delete-button but-height"
                  onClick={() => {
                    deleteTask(index);
                  }}>Delete </button>
               
    </div>
  );
}

export default Delete;
