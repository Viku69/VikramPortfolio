import './App.css';
import Home from './pages/Home';
import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 100,
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
