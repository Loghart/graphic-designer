import * as React from "react";
import Layout from "../components/Layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Content from "../components/contentCreation"
import About from "../components/about"
import Opinion from "../components/opinion"
import Contact from "../components/contact"
import Blog from "../components/blog"

const IndexPage = () => {
  return (
  <div className="container">
    <Layout />
    <Hero />
    <Projects />
    <Content />
    <About />
    <Opinion />
    <Contact />
    <Blog />
  </div>
  );
};

export default IndexPage;