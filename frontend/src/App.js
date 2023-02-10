import React, { useState, useEffect } from "react";
import Introduction from './Introduction';
import Form from './Form';

//This will become my flip cards

function App() {
  //We brought this here after pulling out the form to create it's own component
  //when the newly created Form component was challenged with "tasks not defined"
  //Now both Introduction.js and Form.js have access to it
  const [tasks, updateTasks] = useState([  ]);


  //useEffect allows you to apply side-effects like fetching data
  // useEffect(() => {
  //   fetch("http://localhost:3001/api/people")
  //     .then(res => res.json())
  //     .then(data => (data));
  // }, []);

  
  return (
    
    <div>
      <Form tasks={tasks} updateTasks={updateTasks} /> 
      <Introduction tasks={tasks} updateTasks={updateTasks}  />   
       </div>
  );
}

export default App;