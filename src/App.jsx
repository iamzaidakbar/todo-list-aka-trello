import React, { useEffect } from 'react';
import './App.scss';
import Layout from './components/Layout';
import Modal from './components/Modal';

function App() {
  const themeColor = localStorage.getItem("theme")

  useEffect(() => {
    document.body.className = themeColor || "theme-blue"
  }, [themeColor])

  return (
    <div className="App d-flex align-items-center">
      <Layout />
      <Modal />
    </div>
  );
}

export default App;
