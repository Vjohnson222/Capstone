import React from "react";

const RefreshButton = () => {
  const handleClick = () => {
    window.location.reload(false);
  };

  return (
    <button id="refresh" className="camera--trigger" onClick={handleClick}>
      REFRESH

       </button>
       
  
  );
};

export default RefreshButton;
