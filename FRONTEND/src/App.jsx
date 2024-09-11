import Home from "./assets/pages/home";
import Booking from "./assets/pages/booking";
import Events from "./assets/pages/events";
import Contact from "./assets/pages/contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  </>
}

export default App
