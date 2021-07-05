import * as React from "react";

// components
import Navigation from "./navigation";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
