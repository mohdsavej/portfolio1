import './App.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Experience" element={<Experience/>} />


      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
