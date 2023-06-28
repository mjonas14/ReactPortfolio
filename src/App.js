import './App.css';
import { 
  Navbar, 
  AboutMe, 
  Portfolio, 
  Contact, 
  Resume 
} from './components';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
