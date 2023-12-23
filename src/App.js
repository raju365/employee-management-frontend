import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import EditEmployee from "./components/employee/EditEmployee";
import AddEmployee from "./components/employee/AddEmployee";
import ViewEmployee from "./components/employee/ViewEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addEmployee" element={<AddEmployee />} />
          <Route exact path="/editEmployee/:eid" element={<EditEmployee />} />
          <Route exact path="/viewEmployee/:eid" element={<ViewEmployee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
