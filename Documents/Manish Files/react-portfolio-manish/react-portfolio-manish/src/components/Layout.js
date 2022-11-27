import React from "react";
import { Footer } from "./Footer";
import { TopNav } from "./TopNav";

export const Layout = ({ children }) => {
  return (
    <div>
      <TopNav />
      <div className="main-layout"> {children}</div>
      <Footer />
    </div>
  );
};
