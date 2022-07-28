import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import List from "./components/List/List";
import TopNav from "./components/Nav";

import CreateForm from "./components/Create/CreateForm";
import Preview from "./components/Preview/Preview";
import EditForm from "./components/Edit/EditForm";

function App() {
  return (
    <Router>
      <TopNav />
      <div className="App">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/preview/:id" element={<Preview />} />
          <Route path="/create/admin" element={<CreateForm />} />
          <Route path="/create/user" element={<CreateForm />} />
          <Route path="/edit/user/:id" element={<EditForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
