import react from 'react';
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
    </div>
  );
};

export default App;
