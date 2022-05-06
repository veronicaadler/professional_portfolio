import './App.css';
import HomeComponent from './components/home/HomeComponent';
import AboutComponent from './components/about/AboutComponent';
import SkillsComponent from './components/about/SkillsComponent';

function App() {
  return (
    <div className="App">
      <HomeComponent />
      <AboutComponent />
      <SkillsComponent />
    </div>
  );
}

export default App;
