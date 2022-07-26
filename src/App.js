import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/List/List";
import CreateUser from "./components/Create/CreateUser";
import TopNav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/preview/:id" element={<div>PODGLAD</div>} />
          <Route path="/admin/create" element={<CreateUser />} />
          <Route path="/user/create" element={<div>UTWORZ ADMINA</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
