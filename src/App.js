import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from './Main';
import Settings from './Settings';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/travel-companion/settings" element={<div><Settings /></div>} />
        <Route path="/travel-companion/" element={<div><Main /></div>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;