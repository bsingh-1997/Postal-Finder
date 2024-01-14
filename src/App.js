import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
