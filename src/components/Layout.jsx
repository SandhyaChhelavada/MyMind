import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // ✅ ADD THIS

const Layout = () => (
  <>
    <Navbar />
    <main className="pt-5">
      <Outlet />
    </main>
  </>
);

export default Layout;
