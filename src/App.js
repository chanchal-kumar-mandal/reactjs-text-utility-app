import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import AboutUs from './Components/AboutUs';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="Advanced App"/>
        <Routes>
          
          <Route exact path="/" element={
            <TextForm heading="Enter the text to analyze below"/>} >
          </Route>
          <Route exact path="/about" element={<AboutUs />} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
