import React from "react";
// import MYCV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1ukbC9MogdHhiHGrDPTqZ7DiijeQJVmM5/view?usp=sharing"
        target="_blank"
        className="btn"
      >
        View My CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
