// ICONS
import { HiHome, HiMail } from "react-icons/hi";
import { HiCog6Tooth, HiMiniNewspaper, HiMiniTrophy } from "react-icons/hi2";

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
      "fixed w-full flex justify-between items-center bg-[#132A34] px-40 z-40 shadow-lg shadow-slate-600",
    container: "flex text-neutral-200 xl:my-12 lg:my-8",
    text: "xl:text-xl lg:text-md tracking-widest hover:text-[#63C0E9] hover:scale-110 cursor-pointer",
    button: "bg-accent px-6 py-2 rounded-md",
  };

  return (
    <>
      {/* MOBILE & TABLET NAV */}
      <div id="mobile-nav" className={styles.mobileContainer}>
        <div className={styles.background}>
          <a href="/">
            <HiHome size={28} className={styles.icon} />
          </a>

          <a href="/#about">
            <HiMiniNewspaper size={28} className={styles.icon} />
          </a>

          <a href="/#classes">
            <HiMiniTrophy size={28} className={styles.icon} />
          </a>

          <a href="/#contact">
            <HiMail size={28} className={styles.icon} />
          </a>

          <a href="/#login">
            <HiCog6Tooth size={28} className={styles.icon} />
          </a>
        </div>
      </div>

      {/* TO ADD OAUTH SETTINGS LOGIN */}

      {/* DESKTOP NAV*/}
      <div className={desktopStyles.desktopContainer}>
        <div id="desktop-nav" className={desktopStyles.background}>
          <div className={desktopStyles.container}>
            <a href="/">
              <h2 className={desktopStyles.text}>HOME</h2>
            </a>
          </div>

          <div className={desktopStyles.container}>
            <a href="/#about">
              <h2 className={desktopStyles.text}>ABOUT</h2>
            </a>
          </div>

          <div className={desktopStyles.container}>
            <a href="/#classes">
              <h2 className={desktopStyles.text}>CLASSES</h2>
            </a>
          </div>

          <div className={desktopStyles.container}>
            <a href="/#contact">
              {" "}
              <h2 className={desktopStyles.text}>CONTACT</h2>
            </a>
          </div>

          <div className={desktopStyles.container}>
            <a href="/#login">
              <button className={desktopStyles.button}>LOGIN</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
