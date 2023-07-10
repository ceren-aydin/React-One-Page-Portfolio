import './App.css';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Contact from './components/contact/contact';


function App() {
  return (
    <div className='app'>
      <Intro />
      <About />
      <Contact />
    </div>
  );
}

export default App;
