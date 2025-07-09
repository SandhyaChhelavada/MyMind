import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // ✅ ADD THIS
import Footer from "./Footer";

const Layout = () => (
  <>
    <Navbar />
    <main className="pt-5">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
