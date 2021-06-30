import * as React from "react";

const About = () => {
  return (
<div className="container about_component">
    <div className="col-md-12 about_header">
        <p>About</p>
        <div className="col-md-12 about_line"></div>
    </div>
    <div className="row">
        <div className="col-md-6 about_text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nullam augue dolor libero at in. Egestas in elit vitae tincidunt morbi egestas nec massa. Pretium, placerat quis sem gravida vel quam nisl in semper. Platea enim nunc aliquam volutpat, ut sed morbi. Sit leo aliquam at amet, eu dictumst accumsan eu, quis. Nam ac mattis adipiscing euismod arcu ac laoreet vitae at. Nibh etiam dictumst nibh ut. Vitae massa rhoncus, et massa. Diam fermentum malesuada scelerisque orci massa. </p>
        </div>
        <div className="col-md-6 about_hamburger">
            <div className="hamburger_header">
                <p>Your one stop shop for:</p>
            </div>
        </div>
    </div>
    <div className="about_list">
        <ul>
            <li>Illuatration</li>
            <li>Webflow</li>
            <li>Figma</li>
            <li>Indesign</li>
            <li>Premiere Pro</li>
            <li>Cinema 4D</li>
            <li>Sketch</li>
            <li>Photoshop</li>
        </ul>
    </div>
</div>
  );
};

export default About;