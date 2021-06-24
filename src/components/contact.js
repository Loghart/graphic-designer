import * as React from "react";

const contact = () => {
  return (
<div className="container content_component">
    <div className="col-md-12 contact_header">
        <p>Say Hello</p>
        <div className="col-md-12 contact_line"></div>
    </div>
    <div className="row">
        <div className="col-md-6 contact_text">
            <p>Looking to start a new project or just want to say hi? Send me an email and I’ll do my best to reply within 24 hrs!</p>
            <p>If contact forms aren’t your thing... send me an email at <a href="mailto:hello@arnau.design">hello@arnau.design</a></p>
        </div>
        <div className="col-md-6 contact_form"></div>
    </div>
</div>
  );
};

export default contact;