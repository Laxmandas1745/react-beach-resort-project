import React from "react";
const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h1>Comfortable Rooms</h1>
      <div />
      <p>Select your city and find the best fit</p>
      {children}
    </div>
  );
};

export default Banner;
