import React, { useEffect } from 'react';
import './App.scss';
import Layout from './components/Layout';
import Modal from './components/Modal';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const themeColor = localStorage.getItem("theme")

  useEffect(() => {
    document.body.className = themeColor || "theme-blue"
    navigate("/dashboard")
  }, [themeColor])

  return (
    <div className="App d-flex align-items-center">
      <Layout />
      <Modal />
    </div>
  );
}

export default App;
