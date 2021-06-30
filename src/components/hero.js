import * as React from "react";
import ptok from '/src/images/ptok.jpg';

const Hero = () => {
  return (
<div className="container hero_component">
    <div className="row">
        <div className="col-md-6 hero_text">
            <p>I'm Arnau Ros, a graphic designer & content creator based in Barcelona. <span className="text_deco">Available</span> for freelance & collaborations.</p>
        </div>
        <div className="col-md-6 hero_image"><img src={ptok} alt="ptok" /></div>
    </div>
</div>
  );
};

export default Hero;