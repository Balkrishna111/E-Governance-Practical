import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Report from "./pages/report/Report";
import Admin from "./pages/admin/Admin";
import { ToastContainer, toast } from "react-toastify";
import ReportDetails from "./pages/admin/ReportDetails";
import Login from "./pages/auth/Login";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/report' element={<Report />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin/report/details' element={<ReportDetails />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
