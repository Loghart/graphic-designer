import * as React from "react";

const Blog = () => {
  return (
<div className="container blog_component">
    <div className="col-md-12 blog_header">
        <p>Recent Blogs</p>
    </div>
    <div className="row">
        <div className="col-md-4 box">
            <p>Competition: win a N02 Recycle counter chair by Nendo for Fritz Hansen</p>
            <p className="date_box">24.09.21</p>
            <p className="see_box">See Now<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L11 1" stroke="black" stroke-width="2"/>
                <path d="M1 1H11V11" stroke="black" stroke-width="2"/></svg>
            </p>
            <div className="vl_one"></div>
        </div>
        
        <div className="col-md-4 box">
            <p>The ULTIMATE Figma UI Kit (Tailwind-Figma)</p>
            <p className="date_box">24.09.21</p>
            <p className="see_box">See Now<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L11 1" stroke="black" stroke-width="2"/>
                <path d="M1 1H11V11" stroke="black" stroke-width="2"/></svg>
            </p>
            <div className="vl_two"></div>
        </div>
        <div className="col-md-4 box">
            <p>The Pros and Cons of a Logo without scaling possibilities. </p>
            <p className="date_box">24.09.21</p>
            <p className="see_box">See Now<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L11 1" stroke="black" stroke-width="2"/>
                <path d="M1 1H11V11" stroke="black" stroke-width="2"/></svg>
            </p>
        </div>
    </div>
</div>
  );
};

export default Blog;