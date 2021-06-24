import * as React from "react";
import example1 from '/src/images/example1.jpg';
import example2 from '/src/images/example2.jpg';
import example3 from '/src/images/example3.jpg';

const project = () => {
  return (
<div className="container projects_component">
    <div className="col-md-12 project_header">
        <p>Projects</p>
        <div className="col-md-12 project_line"></div>
    </div>
    <div className="row">
      <div className="col-md-4 project_example">
        <p>01 Example</p>
        <img src={example1} alt="example1" />
      </div>
      <div className="col-md-4 project_example">
        <p>02 Example</p>
        <img src={example2} alt="example2" />
      </div>
      <div className="col-md-4 project_example">
        <p>03 Example</p>
        <img src={example3} alt="example3" />
      </div>
    </div>
</div>
  );
};

export default project;