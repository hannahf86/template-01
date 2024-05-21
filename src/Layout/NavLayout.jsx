// RRD
import { NavLink, Outlet } from "react-router-dom";

// REACT
import { useState } from "react";

// ICONS
import { MdPiano } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

const NavLayout = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const styles = {
    imageContainer:
      "bg-white py-6 w-screen fixed flex justify-between items-center z-40",
    image: "ml-8",
    logoText: "text-black text-md pl-2 ",
    hamburger:
      "relative md:hidden text-black mr-8 inline-flex w-full justify-center px-3 py-2 ",

    dropdownContainer: "relative text-left bg-black/70 h-screen",
    dropdown:
      "absolute top-20 w-screen origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
    dropdownItem:
      "text-gray-700 block px-8 py-6 text-sm active:bg-blue-300 active:text-white ",
    closeHamburger:
      "md:hidden text-black mr-6 absolute top-2 right-0 cursor-pointer",

    desktopContainer: "md:block hidden fixed top-[25%] z-10",
    desktopLinks:
      "m-4 p-4 rounded-full bg-normalGreen hover:outline outline-offset-2 active:bg-darkGreen focus:bg-accent focus:outline focus:outline-accent text-white",
  };

  return (
    <div id="navbar" aria-label="navigation menu">
      <header id="header">
        {/* LOGO CONTAINER */}
        <div className={styles.imageContainer} aria-label="pf publishing logo">
          <NavLink to="/">
            <div className="flex items-center ml-8">
              <MdPiano size={30} />
              <div className={styles.logoText}>PF Publishing</div>
            </div>
          </NavLink>

          {/* MOBILE MENU */}
          <div className="z-[99]">
            <button
              type="button"
              onClick={handleNav}
              size={30}
              className={styles.hamburger}
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true">
              <HiMenu size={24} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {nav ? (
          <>
            <div id="mobile nav" className={styles.dropdownContainer}>
              <div
                className={styles.dropdown}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button">
                <div className="py-1" role="none">
                  <NavLink
                    to="#"
                    className={styles.dropdownItem}
                    role="menuitem"
                    id="menu-item-0">
                    Home
                  </NavLink>

                  <NavLink
                    to="#"
                    className={styles.dropdownItem}
                    role="menuitem"
                    id="menu-item-1">
                    Work
                  </NavLink>

                  <NavLink
                    to="#"
                    className={styles.dropdownItem}
                    role="menuitem"
                    id="menu-item-2">
                    About
                  </NavLink>

                  <NavLink
                    to="#"
                    className={styles.dropdownItem}
                    role="menuitem"
                    id="menu-item-2">
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {/* TABLET AND DESKTOP MENU */}
        <div className={styles.desktopContainer}>
          <section className="flex flex-col">
            <NavLink to="/" className={styles.desktopLinks}>
              <span>Home</span>
            </NavLink>

            <NavLink to="themes" className={styles.desktopLinks}>
              <span>Work</span>
            </NavLink>

            <NavLink to="contact" className={styles.desktopLinks}>
              <span>Contact</span>
            </NavLink>
          </section>
        </div>
      </header>

      {/* DO NOT FORGET OUTLET!! */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavLayout;
