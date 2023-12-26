import React from "react";
import MYCV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={MYCV} className="btn">Download My CV</a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  );
};

export default CTA;
