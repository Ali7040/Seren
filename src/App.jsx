
import './App.css';
import  Hero  from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <div className=" bg-hero-bg bg-cover bg-no-repeat bg-center">
        <Navbar />
      <Hero />
      
      </div>
    </div>
  );
}

export default App;
