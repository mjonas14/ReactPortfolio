import "./App.css";
import { 
  Navbar, 
  AboutMe, 
  Portfolio, 
  Contact, 
  Resume } from "./components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <>
        <Navbar />
        <Routes>
          <Route 
            path="/about-me" 
            element={<AboutMe />} />
          <Route 
            path="/portfolio" 
            element={<Portfolio />} />
          <Route 
            path="/contact" 
            element={<Contact />} />
          <Route 
            path="/resume" 
            element={<Resume />} />
        </Routes>
        </>
      </Router>
    </div>
  );
};

export default App;
