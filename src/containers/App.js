import logo from '../logo.svg';
import '../App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Faq from './Faq'
import Courses from './Courses'
import About from './About'
import Nav from './Nav';
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
          <Routes>
            <Route path="/courses" element={<Courses />} />
            <Route path="/faq" element={<Faq eventKey={null}></Faq>} />
            <Route path="/about" element={<About />} />
          </Routes>
        <Footer/>  
      </Router>
    </div>
  );
}

export default App;
