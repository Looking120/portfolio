
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import SkillsSection from './components/skillsSection/SkillsSection';
function App() {
  return (
  <>
    <Header />
    <div className="main">
        <Home />
        <About />
        <SkillsSection />
    </div>
  </>
  );
}

export default App;
