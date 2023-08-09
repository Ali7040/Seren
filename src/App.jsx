
import './App.css';
import  Hero  from './components/Hero.jsx';
import TopMenu from './components/TopMenu.jsx';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <div className=" bg-hero-bg bg-cover bg-no-repeat bg-center">
        <TopMenu />
        <Hero />
        <Main />
      </div>
    </div>
  );
}

export default App;
