import React, { useState } from "react";
import App from "./App";
import Eye from "./Eye";
import Terminology from "./Terminology";
import Gallery from "./Gallery";
import Your from "./Your"
import logo from "./logo.png";
import Videos from "./Videos";
import Timer from "./Timer";



import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App2() {
  const [loggedIn, setLoggedIn] = useState(false);

  
  return (
    <Router className="navbar" >
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
{/* ----------TERNARY----------------TERMINOLOGY------------- */}
{loggedIn ? (
  <Link className="navLink" to="/terminology">
    TERMINOLOGY{" "}
  </Link>
) : (
  ""
)}

{/* ----------TERNARY----------------Videos------------- */}
{loggedIn ? (
  <Link className="navLink" to="/Videos">
    Videos{" "}
  </Link>
) : (
  ""
)}

{/* ----------TERNARY----------------Timer------------- */}
{loggedIn ? (
  <Link className="navLink" to="/Timer">
    Timer{" "}
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


</nav>
<br />

      <div className="navbar2" > 
      <img src={logo} alt="logo" className = "logo" style={{ borderRadius:'10%',marginTop:"-55px", marginLeft: '60px', opacity: "0.9"}}/>


      
          <Routes>
            <Route path="/App" element={<App />} />
            <Route path="/" element={<Eye />} />
            <Route path="/Terminology" element={<Terminology />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Your" element={<Your />} />
            <Route path="/Videos" element={<Videos />} />
            <Route path="/Timer" element={<Timer />} />
            



          </Routes>
          
          </div>


    </Router>
    
  );
}

export default App2;
