import React, { useState } from "react";
import App from "./App";
import Eye from "./Eye";
import Terminology from "./Terminology";
import Gallery from "./Gallery";
import Your from "./Your"
import logo from "./logo.png";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App2() {
  const [loggedIn, setLoggedIn] = useState(false);

  const h1Style = {
    fontSize: "40px",
    color: "black",
  };
  return (
    <Router>
      <br />
         <nav className="navbar" >


<Link className="navLink" to="/">
  {" "}
  HOME{" "}
</Link>
{/* ----------TERNARY----------------TREMINOLOGY------------- */}

<Link className="navLink" to="/App">
  INTRODUCTION
</Link>
{/* ----------TERNARY----------------TREMINOLOGY------------- */}
{loggedIn ? (
  <Link className="navLink" to="/terminology">
    TERMINOLOGY{" "}
  </Link>
) : (
  ""
)}
{/* --------------------------ART IN MOTION------------- */}

<Link className="navLink" to="/Gallery">
  ART IN MOTION{" "}
</Link>
{/* --------------------------YOUR TURN------------- */}
<Link className="navLink" to="/Your">
  YOUR TURN{" "}
</Link>
{/* --------------------------ROUTES------------- */}

{loggedIn ? (
  <Link className="navLink" to="/videos">
    TERMINOLOGY{" "}
  </Link>
) : (
  ""
)}
</nav>
<br />

      <div className="navbar2" > 
      <img src={logo} alt="logo" style={{width: "100px",border:'1.5px solid orangeRed', borderRadius:'10%',marginTop:"-25px", marginLeft: '60px', opacity: "0.9"}}/>


      
          <Routes>
            <Route path="/App" element={<App />} />
            <Route path="/" element={<Eye />} />
            <Route path="/Terminology" element={<Terminology />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Your" element={<Your />} />

          </Routes>
          
          </div>


    </Router>
    
  );
}

export default App2;
