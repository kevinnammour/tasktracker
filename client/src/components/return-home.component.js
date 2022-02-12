import React from "react";
import "../styles/return_home_button.css";
const ReturnHome = () => {
  return (
    <>
      <button onClick={() => window.location.href = '/'}>Back</button>
    </>
  );
};

export default ReturnHome;