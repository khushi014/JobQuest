import Navbar from './Navbar';
import Footer from './Footer';
import Routing from './Routing';
import './App.css';
import './css/styles.css'
import MyComponent from './pages/jwtexp/MyComponent';

function App() {
  return (
    <div className="App">
      <MyComponent/>
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
