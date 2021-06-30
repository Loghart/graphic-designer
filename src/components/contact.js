import * as React from "react";

const Contact = () => {
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
        <div className="col-md-6 contact_form">
          <form>
            <div class="row name_row">
              <p>Name *</p>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"></input>
              </div>
            </div>
        <div class="row mail_row">
          <div class="col-md-6">
          <label for="inputState">Inquiry *</label>
          <select id="inputState" class="form-control">
            <option>Collab/Client</option>
            <option>...</option>
          </select>
        </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email *</label>
            <input type="email" class="form-control" placeholder="hello@arnau.design" id="inputEmail4"></input>
          </div>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message *</label>
          <textarea class="form-control" placeholder="Hello..." id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button type="button" class="btn btn-primary">Send</button>
      </form>
      </div>
    </div>
</div>
  );
};

export default Contact;