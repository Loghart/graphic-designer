import * as React from "react";

const Opinion = () => {
  return (
<div className="container opinion_component">
    <div className="col-md-12 opinion_header">
        <p>What Clients Say</p>
        <div className="col-md-12 opinion_line"></div>
    </div>
    <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-1 arrow_left">
            <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 24L26 30L32 36" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="29.5" cy="29.5" r="28.5" transform="rotate(-180 29.5 29.5)" stroke="#0B0B0D" stroke-width="2"/>
            </svg>
        </div>
        <div className="col-md-8 opinion_content">
            <p>“I rehired Arnau to do some additional design work for my private label brand. Again, he was creative and efficient in bringing my ideas to fruition. Thanks Arnau”</p>
            <p className="opinion_content_person">- Ronald Weasley</p>
            <p>CEO</p>
        </div>
        <div className="col-md-1 arrow_right">
            <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27 35L33 29L27 23" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="29.5" cy="29.5" r="28.5" stroke="#0B0B0D" stroke-width="2"/>
            </svg>
        </div>
        <div className="col-md-1"></div>
    </div>
</div>
  );
};

export default Opinion;