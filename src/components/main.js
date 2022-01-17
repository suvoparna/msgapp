import Page from "./page";
import Login from "./login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div className="main-contanier">
        <Routes>
          <Route path="/" exact element={<Page />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
