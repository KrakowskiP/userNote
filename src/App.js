import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/List/List";
import TopNav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Create/Form";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/preview/:id" element={<div>PODGLAD</div>} />
          <Route path="/create/admin" element={<Form />} />
          <Route path="/create/user" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
