const Home = () => {
  const styles = {
    title: "text-center text-accent text-7xl pt-40",
    subtitle: "text-center text-accent text-3xl",
  };

  return (
    <div id="/">
      <h1 className={styles.title}>Home</h1>
      <h2 className={styles.subtitle}>This is a test yo!</h2>
    </div>
  );
};

export default Home;
