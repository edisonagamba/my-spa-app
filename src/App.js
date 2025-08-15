// App.js - Framework Comparison SPA by Edison Gamba
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import ReactFramework from './components/ReactFramework';
// import AngularFramework from './components/AngularFramework';
// import EmberFramework from './components/EmberFramework';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-900">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/react" element={<ReactFramework />} />
            <Route path="/angular" element={<AngularFramework />} />
            <Route path="/ember" element={<EmberFramework />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
