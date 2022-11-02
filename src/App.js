import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import WeatherApp from "./components/WeatherApp";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/weather" element={<WeatherApp />}/>
          <Route path="*" element={<p>Not Found.. Check your url</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
