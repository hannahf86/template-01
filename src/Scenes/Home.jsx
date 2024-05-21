// RRD
import { Link } from "react-router-dom";

// LINKS
import piano from "../assets/piano-01.jpeg";
import newsPiano from "../assets/piano-02.jpeg";

const Home = () => {
  const styles = {
    background: "bg-bkg -z-10",
    mainContainer: "pt-40 pb-20 md:mx-16 md:pl-12 ",
    title: "text-darkGreen text-4xl md:text-4xl mx-8 leading-relaxed font-bold",
    subtitle: "text-lightGreen text-lg mx-8 my-12 sm:text-center",
    callToActionLink: "mx-8 text-sm underline ",
    imageContainer: "mx-8",
    sectionHeading: "text-lg font-bold mt-12 mb-2",
    newsHeading: "text-base my-2",
    newsDescription: "text-sm text-slate-600 ",
    eventInfoLink: "flex justify-end mt-4 mb-12 text-xs underline",
  };

  return (
    <div id="/" aria-label="home page" className={styles.background}>
      <main className={styles.mainContainer} aria-label="main content">
        {/* PAGE TITLE */}
        <h1 className={styles.title}>Piano Teacher & Performer</h1>

        <h2 className={styles.subtitle}>
          Paul Feehan: award winning pianist and teacher
        </h2>

        {/* CALL TO ACTION 01 */}
        <Link to="work" className={styles.callToActionLink}>
          Find out more
        </Link>

        {/* FEATURE SECTION 01 */}
        <section id="news" aria-label="news section">
          <div className={styles.imageContainer}>
            <h3 className={styles.sectionHeading}>News</h3>
            <img src={piano} />
            <h4 className={styles.newsHeading}>
              Paul Feehan: Solo Piano Recital
            </h4>
            <p className={styles.newsDescription}>
              The Mount School, York
              <br />
              Wednesday 19th June, 19:00
            </p>
            <Link to="/" className={styles.eventInfoLink}>
              More Info
            </Link>
          </div>

          <div className={styles.imageContainer}>
            <img src={newsPiano} />
            <h4 className={styles.newsHeading}>
              Paul Feehan: Tchaikovsky Piano Concerto No. 1
            </h4>
            <p className={styles.newsDescription}>
              Sir jack Lyons Concert Hall, York
              <br />
              July 2025, 19:00
            </p>
            <Link to="/" className={styles.eventInfoLink}>
              More Info
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
