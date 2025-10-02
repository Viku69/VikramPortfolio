import './App.css';
import Home from './pages/Home';
import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Initialize AOS after a small delay to prevent layout shifts
    const timer = setTimeout(() => {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 0,
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
      });
      
      // Add class to body to indicate AOS is ready
      document.body.classList.add('aos-ready');
    }, 100);

    return () => clearTimeout(timer);
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
