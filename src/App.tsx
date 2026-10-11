// npm run dev
import './App.css';
import { etfHoldings } from './data/financialData';
import { useState, useEffect } from 'react';
import type { ETF } from './types/finance';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Investments from './pages/Investments';
import Properties from './pages/Properties';
import Mortgage from './pages/Mortgage';
import Projections from './pages/Projections';
import Navigation from './components/UI/Navigation';

function App() {

  const key = 'etfHoldings';
  const themeKey = 'theme';

  const [etfs, setEtfs] = useState<ETF[]>(() => {
    const savedData = localStorage.getItem(key);
    if (savedData) {
      try {
        return JSON.parse(savedData);
      }
      catch {
        return etfHoldings;
      }
    }
    else {
      return etfHoldings;
    }
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem(themeKey);
    return savedTheme === 'dark';
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(
        key,
        JSON.stringify(etfs)
      );
    }
    catch (error) {
      console.error(error);
    }
  }, [etfs]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        themeKey,
        isDarkMode ? 'dark' : 'light'
      );
    }
    catch (error) {
      console.error(error);
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.body.classList.toggle(
      'dark-mode',
      isDarkMode
    );
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(previousMode => !previousMode);
  }

  function addETF(newETF: ETF) {
    setEtfs([...etfs, newETF]);
  }

  function updateETF(updatedETF: ETF) {
    setEtfs(
      etfs.map((existingETF) => {
        if (existingETF.id === updatedETF.id) {
          return updatedETF;
        }
        else {
          return existingETF;
        }
      })
    );
  }


  function deleteETF(ETFtoDeleteId: number) {
    setEtfs(
      etfs.filter((etf) => {
        return etf.id !== ETFtoDeleteId;
      })
    );
  }


  return (
    <BrowserRouter basename="/finance-dashboard">
      <Navigation
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <Routes>
        <Route
          path='/'
          element={
            <Dashboard
              etfs={etfs}
            />
          }
        />

        <Route
          path='/investments'
          element={
            <Investments
              etfs={etfs}
              onAddETF={addETF}
              onUpdateETF={updateETF}
              onDeleteETF={deleteETF}
            />
          }
        />

        <Route
          path='/properties'
          element={<Properties />}
        />

        <Route
          path='/mortgage'
          element={<Mortgage />}
        />

        <Route
          path='/projections'
          element={<Projections />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;