//Not Used

// so this will be a pull very probably from my motivational api - either hello jaylen or.... thougt for the day


import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './Profile';

function People() {
const [people, setPeople] = useState([]);
const [isVisible, setIsVisible] = useState(false);

//This right here is what you server has to say when you call it - 3000
//This is my Database This port has to say the same as your server

// This will very probably serve as theneeded piece for the API
useEffect(() => {
fetch("http://localhost:3002/people")
.then(res => res.json())
.then(data => setPeople(data));
}, []);

return (

<div className="People">
<div className="form-container">
<button   className="custom-button"onClick={() => setIsVisible(!isVisible)}>
{isVisible ? "Close" : "Think on this"} 
</button>
</div>
{isVisible && (
<div className="people-container name">
<br />
<ul style={{listStyleType: "none"}}>
{people.map(person => (
<li key={person.id}>
<h5>{person.name}</h5>
{/* <h3>{person.email}</h3> */}
{/* <p>{blog.content}</p> */}
</li>
))}
</ul>
</div>
)}
</div>
);
}
export default People;