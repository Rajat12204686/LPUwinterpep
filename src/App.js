import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './Navbar';
import Home from './Home';
import FormAction from './FormAction';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<Home />} /> {/* Replace component prop with element */}
          <Route path="/form" element={<FormAction />} /> {/* Replace component prop with element */}
        </Routes> {/* Replace Switch with Routes */}
      </div>
    </Router>
  );
};

export default App;
