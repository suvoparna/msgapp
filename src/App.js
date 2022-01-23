import "./App.css";
import Login from "./components/login";
import Header from "./components/header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Reg from "./components/reg";

function App() {
  localStorage.removeItem("email");
  localStorage.removeItem("login");

  return (
    <div className="main">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/reg" exact element={<Reg />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
