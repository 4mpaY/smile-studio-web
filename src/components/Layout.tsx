import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import ScrollToTop from "./ScrollToTop";

const Layout = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <main className="min-h-screen">
      <Outlet />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Layout;
