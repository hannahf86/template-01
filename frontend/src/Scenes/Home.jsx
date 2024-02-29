const Home = () => {
  const styles = {
    background: "h-screen",
    title: "text-center text-accent text-7xl pt-40",
    subtitle: "text-center text-accent text-3xl",
  };

  return (
    <div id="/" className={styles.background}>
      <h1 className={styles.title}>Home</h1>
      <h2 className={styles.subtitle}>This is a test yo!</h2>
    </div>
  );
};

export default Home;
