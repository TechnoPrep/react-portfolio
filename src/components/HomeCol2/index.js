import React from "react";

import profileImage from "../../images/water_color.jpg";

const Col2 = () => {
  return (
    <div className="col-20 text-center text-white">
      <img
        className="profile-image"
        src={profileImage}
        alt="profile-water-color"
      />
    </div>
  );
};

export default Col2;
