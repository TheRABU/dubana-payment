import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <div className=" bg-slate-100">
        <Navbar />
        <div className="min-h-[calc(100vh-6rem-400px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
