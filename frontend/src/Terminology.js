import "./App.css";
import React from "react";

function Terminology() {
  const cards = [
    {
      front: "Arabesque",
      back: "A position in which the dancer stands on one leg, with the other leg extended behind the body ",
    },

    {
      front: "Attitude",
      back: " A position where the dancer stands on one leg & the other leg is lifted & bent at a 90-degree angle",
    },
    {
      front: "Grand Battement ",
      back: "A position where the working leg is extended from the hip & then quickly lifted or struck in the air",
    },
    {
      front: "Coupé",
      back: "To cut. A position in which the working foot is placed at the ankle of the supporting leg",
    },
    {
      front: "Degajé",
      back: "Disengage. Where the working foot is lifted from the floor and pointed inches off the grounds",
    },
    {
      front: "Developpé",
      back: "A movement where the leg gradually develops from a position close to the body to an open position ",
    },
    {
      front: "Grand Jeté",
      back: "A type of jump where the dancer springs off one foot and lands on the other",
    },

    {
      front: "Pas de bourrée",
      back: "A sequence of 3 small, quick steps in a specific pattern, typically crossing one foot behind the other",
    },
    {
      front: "Passé",
      back: "To pass - where the working foot is lifted and passes to the side of the knee of the supporting leg",
    },
    {
      front: "Pirouette",
      back: "With proper balance & visual focus, this movement refers to a complete turn of the body on releve and on one foot",
    },

    {
      front: "Port de bras",
      back: "To carry the arms a graceful and controlled motion from one position to another",
    },
    {
      front: "Rond de jambe",
      back: "A circular movement of the leg performed either frontwards ar to the back",
    },

    {
      front: "Tendu",
      back: "To stretch the leg and foot away from the body in one line while remaining on the floor",
    },
    {
      front: "Ballet Positions ",
      back: "There are five basic positions of the feet, which are the foundation of all ballet movements",
    },
    {
      front: "Proper Dance Attire",
      back: "Ballet leotard, Dance tights and the appropriate footware (Ballet or Point shoes)",
    },
    {
      front: "Mindset",
      back: "You can do anything you put your mind to. You can become anything you're willing to work hard enough for. The dance is easy. Becoming the dancer is where the work is. Just do it!",
    },
  ];

  return (
    <div>
      <div className="introMessage ">Flip, Learn, And Apply</div>
      <div
        className="navbar5"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {cards.map((data, index) => (
          <div
            className="flip-card"
            key={index}
            style={{
              display: "inline-block",
              width: "20%",
              borderRadius: "10%",
            }}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <br />
                <div>{data.front}</div>
              </div>
              <div className="flip-card-back cards">
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
