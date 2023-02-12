import "./App.css";
import React from "react";
import Gallery from "./Gallery";

function Terminology() {
 
  const cards = [
    {
      front: "Arabesque",
      back: "A JavaScript library for building user interfaces"
    },

    {
      front: "Attitude",
      back: "A JavaScript library for building user interfaces"
    },
    {
      front: "Battement",
      back: "A JavaScript library for building user interfaces"
    },
    {
      front: "Coupé",
      back: "A JavaScript library for building user interfaces"
    },
    {
      front: "Degaje",
      back: "A JavaScript library for building user interfaces"
    },
    {
      front: "Developpé",
      back: "A state management library for JavaScript applications"
    },
    {
      front: "Jeté",
      back: "A JavaScript library for building user interfaces"
    },

    {
      front: "Pas de bourrée",
      back: "A JavaScript library for building user interfaces"
    },
    {
      front: "Passé",
      back: "A JavaScript library for building user interfaces"
    },
    {
      front: "Pirouette",
      back: "A JavaScript library for building user interfaces"
    },
    {
      front: "Plié",
      back: "A JavaScript library for building user interfaces"
    },
    {
      front: "Port de bras",
      back: "A state management library for JavaScript applications"
    },
    {
      front: "Rond de jambe",
      back: "A JavaScript library for building user interfaces"
    },

    {
      front: "Tendu",
      back: "A JavaScript library for building user interfaces"
    },
    {
      front: "REACT",
      back: "A JavaScript library for building user interfaces"
    },
    {
      front: "REACT",
      back: "A JavaScript library for building user interfaces"
    },
      
  ];

  return (
    <div>
    <div style={{ marginLeft: '220px', marginTop: '5px',  marginBottom: '2px',color: 'white', fontSize: '25px' }}>
    Flip,  Learn,  And Apply
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: '20px', borderTop: "solid white 2px"}}>
     <hr />
      {cards.map((data, index) => (
        <div className="flip-card" key={index} style={{ display: "inline-block", width: "20%", borderRadius: "10%" }}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <br />
              <div>{data.front}</div>
            </div>
            <div className="flip-card-back">
              <div>{data.back}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Terminology;
