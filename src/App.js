import './App.css';
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from './Main';
import Settings from './Settings';


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function App() {

  const { height, width } = useWindowDimensions();

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/settings" element={<div><Settings/></div>} />
        <Route path="" element={<div><Main/></div>} />
      </Routes>
    </div>
    </Router>
  );
}

// style={{width: width, height: height}}