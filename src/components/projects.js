import * as React from "react";
import photo1 from '/src/images/photo1.jpg';
import photo2 from '/src/images/photo2.jpg';
import photo3 from '/src/images/photo3.jpg';

const Project = () => {
  return (
<div className="container projects_component">
    <div className="col-md-12 project_header">
        <p>Projects</p>
        <div className="col-md-12 project_line"></div>
    </div>
    <div className="row">
      <div className="col-md-4 project_example">
        <p>01 Example</p>
        <img src={photo1} alt="example1" />
      </div>
      <div className="col-md-4 project_example">
        <p>02 Example</p>
        <img src={photo2} alt="example2" />
      </div>
      <div className="col-md-4 project_example">
        <p>03 Example</p>
        <img src={photo3} alt="example3" />
      </div>
    </div>
</div>
  );
};

export default Project;