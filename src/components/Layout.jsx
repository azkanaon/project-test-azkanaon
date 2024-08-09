import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Logo from "../assets/suitmedia-logo.png";

const Layout = () => {
  const links = [
    { path: "/work", label: "Work" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/", label: "Ideas" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
  ];

  const [activePath, setActivePath] = useState("/");
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollYValue, setScrollYValue] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < scrollYValue) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setScrollYValue(window.scrollY);
    });
  }, [scrollYValue]);

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-screen transition-all duration-300 z-50  bg-[#f8671f] ${
          showNavbar && scrollYValue > 0 ? "opacity-80" : "opacity-0"
        } ${showNavbar && scrollYValue === 0 && "opacity-100"}`}
      >
        <nav className="h-16">
          <div className="h-full flex justify-between items-center w-9/12 m-auto">
            {/* Start Navbar sebelah kiri */}
            <div className="overflow-hidden">
              <Link to={"#"}>
                <img src={Logo} width={110} alt="logo" />
              </Link>
            </div>
            {/* End Navbar sebelah kiri */}

            {/* Start Navbar sebelah kanan */}
            <ul className="flex items-center h-10">
              {links.map((link) => (
                <li
                  key={link.path}
                  className={` h-5/6 text-white mx-3 transition-all ${
                    activePath === link.path
                      ? "border-b-4 rounded-sm"
                      : "border-none"
                  }`}
                >
                  <Link to={link.path} onClick={() => setActivePath(link.path)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* End Navbar sebelah kanan */}
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
