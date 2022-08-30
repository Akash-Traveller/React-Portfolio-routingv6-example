import './App.css';
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from './pages/Home';
import Project from "./pages/Project";
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/Header';
import Demo from './pages/Demo';

function App() {
  return (
   <Container>
    <BrowserRouter>
    <Header/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/demo" element={<Demo />} />
     </Routes>
    </BrowserRouter>
   </Container>
  );
}

export default App;
