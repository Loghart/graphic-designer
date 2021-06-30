import * as React from "react";

const Newsletter = () => {
  return (
<div className="container newsletter_component">
    <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 newsletter_text">
            <h2>Join the Newsletter!</h2>
            <p>You’ll receive an email every once in a while about new products, courses, and videos!</p>
        </div>
        <div className="col-md-3"></div>
        </div>
    <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 arena_button">
        <input type="email" class="form-control" placeholder="hello@arnau.design" id="inputEmail4"></input>
        <button>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8H14" stroke="white" stroke-width="2"/>
            <path d="M7 1L14 8L7 15" stroke="white" stroke-width="2"/>
            </svg>
        </button>
        </div>
        <div className="col-md-3"></div>
    </div>
    <p>We’ll never share your details. See our Privacy Policy</p>
    <div className="col-md-12 newsletter_line"></div>
</div>

  );
};

export default Newsletter;