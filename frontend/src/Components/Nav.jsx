// ICONS
import { FaNewspaper } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { HiHome, HiMail } from "react-icons/hi";
import { HiMiniMusicalNote } from "react-icons/hi2";

const Nav = () => {
  const styles = {
    mobileContainer: "lg:hidden",
    background:
      "flex justify-center justify-evenly items-center fixed bottom-0 left-0 w-full bg-[#132A34] z-40",
    icon: "text-neutral-200 active:text-[#63C0E9] active:scale-110 my-6 mx-6",
  };

  const desktopStyles = {
    desktopContainer: "hidden md:hidden sm:hidden lg:block ",
    background:
      "fixed w-full flex flex-row justify-evenly z-10 bg-[#132A34] z-40 shadow-lg shadow-slate-600",
    icons: "flex flex-row content-center text-neutral-200 xl:my-12 lg:my-8",
    text: "flex items-center xl:text-xl lg:text-lg ml-3 tracking-widest hover:text-[#63C0E9] hover:scale-110 cursor-pointer",
  };

  return (
    <>
      {/* MOBILE & TABLET NAV */}
      <div id="mobile-nav" className={styles.mobileContainer}>
        <div className={styles.background}>
          <a href="/">
            <HiHome size={28} className={styles.icon} />
          </a>

          <a href="/#news">
            <FaNewspaper size={25} className={styles.icon} />
          </a>

          <a href="/#about">
            <FaUserGraduate size={28} className={styles.icon} />
          </a>

          <a href="/#teaching">
            <HiMiniMusicalNote size={28} className={styles.icon} />
          </a>

          <a href="/#contact">
            <HiMail size={28} className={styles.icon} />
          </a>
        </div>
      </div>

      {/* DESKTOP NAV*/}
      <div className={desktopStyles.desktopContainer}>
        <div id="desktop-nav" className={desktopStyles.background}>
          <div className={desktopStyles.icons}>
            <a href="/">
              <h2 className={desktopStyles.text}>
                <div className="mr-3">
                  <HiHome />
                </div>
                HOME
              </h2>
            </a>
          </div>

          <div className={desktopStyles.icons}>
            <a href="/#news">
              <h2 className={desktopStyles.text}>
                <div className="mr-3">
                  <FaNewspaper />
                </div>
                NEWS
              </h2>
            </a>
          </div>

          <div className={desktopStyles.icons}>
            <a href="/#desktop-about">
              <h2 className={desktopStyles.text}>
                <div className="mr-3">
                  <FaUserGraduate />
                </div>
                ABOUT
              </h2>
            </a>
          </div>

          <div className={desktopStyles.icons}>
            <a href="/#teaching">
              <h2 className={desktopStyles.text}>
                <div className="mr-3">
                  <HiMiniMusicalNote />
                </div>
                TEACHING
              </h2>
            </a>
          </div>

          <div className={desktopStyles.icons}>
            <a href="/#contact">
              {" "}
              <h2 className={desktopStyles.text}>
                <div className="mr-3">
                  <HiMail />
                </div>
                CONTACT
              </h2>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
