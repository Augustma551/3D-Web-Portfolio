import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/navbar';
import {Home, About, Projects, Contact} from './pages/index'

function App() {
  return (
    <main className="h-full">
      <Router>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  ); 
}

export default App;
