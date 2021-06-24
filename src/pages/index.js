import * as React from "react";
import Navigation from "../components/navigation"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Content from "../components/contentCreation"
import About from "../components/about"
import Opinion from "../components/opinion"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
  <div className="container">
    <Navigation />
    <Hero />
    <Projects />
    <Content />
    <About />
    <Opinion />
    <Contact />
  </div>
  );
};

export default IndexPage;