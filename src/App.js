import react from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

const styles = {
  container: {
      height: "100vh",
      width: "100vw",
  },
};


const App = () => {
  return (
    <div style={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
