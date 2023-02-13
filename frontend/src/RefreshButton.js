import React from "react";

const RefreshButton = () => {
  const handleClick = () => {
    window.location.reload(false);
  };

  return (
    <button className="camera--trigger" onClick={handleClick}>
      Refresh
    </button>
  );
};

export default RefreshButton;
