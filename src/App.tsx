import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';
import { routes } from './config/routes';
import { Suspense } from 'react';

// Loading component
const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="loader animate-spin rounded-full border-t-4 w-10 h-10 border-blue-400"></div>
      </div>
    </div>
  );
};

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
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {routes.map((route) => (
              <Route 
                key={route.path} 
                path={route.path} 
                element={<route.element />} 
              />
            ))}
          </Routes>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;

