import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div>MENU</div>
        <Routes>
          <Route path="/" element={<div>LIST</div>} />
          <Route path="/preview" element={<div>PODGLAD</div>} />
          <Route path="/admin/create" element={<div>UTWORZ ADMINA</div>} />
          <Route path="/user/create" element={<div>UTWORZ ADMINA</div>} />
        </Routes>
      </div>
      ;
    </Router>
  );
}

export default App;
