import * as React from "react";

const Content = () => {
  return (
<div className="container content_component">
    <div className="col-md-12 content_header">
        <p>Content Creation</p>
        <div className="col-md-12 content_line"></div>
    </div>
    <div className="row">
        <div className="col-md-6 content_text">
            <p>Lorem ipsum YouTube dolor sit amet, consectetur adipiscing elit. A nisi, accumsan, ornare donec risus pharetra mattis in. YouTube elit. A nisi, accumsan, ornare donec risus pharetra mattis in. YouTube elit. A nisi, accumsan, ornare donec risus pharetra mattis in.</p>
            <p className="text_link">Get in contact about a sponsorship<span><svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 14.3479L11 20.415L16 14.3479" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                <path d="M0 1H7C8.06087 1 9.07828 1.51138 9.82843 2.42163C10.5786 3.33189 11 4.56646 11 5.85376V20.415" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                </svg></span>  
            </p>
        </div>
        <div className="col-md-6 content_video"><iframe width="560" height="315" src="https://www.youtube.com/embed/mTAupMv-3t8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </div>
</div>
  );
};

export default Content;