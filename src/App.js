import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Header Footer Link
import Header from './components/Header';
import Footer from './components/Footer';

// Pages Col 
import Home from './pages/Home';

// Full Website CSS Link
import './assets/css/style.css';
import './assets/css/mobile.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;