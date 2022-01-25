import React from "react";

import Col1 from '../HomeCol1'
import Col2 from '../HomeCol2'
import Col3 from '../HomeCol3'

const HomeTop = ({useW50}) => {

  return (
    <section className="py-5">
      <div className="row col-12 d-flex align-items-top">
        <Col1 useW50={useW50} />
        <Col2 />
        <Col3 useW50={useW50} />
      </div>
    </section>
  );
};

export default HomeTop;
