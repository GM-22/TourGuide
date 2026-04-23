import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router";

const Root = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <main>
      <Header isHome={isHome} />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Root;