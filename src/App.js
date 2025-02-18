import { Route , Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Education from './pages/Home/Education';
import AboutMe from './pages/Home/AboutMe';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </div>
  );
}

export default App;
