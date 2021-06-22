import * as React from "react";
import Navigation from "../components/navigation"
import Hero from "../components/hero"
import Projects from "../components/projects"

const IndexPage = () => {
  return (
  <div className="container">
    <Navigation />
    <Hero />
    <Projects />
  </div>
  );
};

export default IndexPage;