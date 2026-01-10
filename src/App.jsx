import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Tasks from "./pages/Tasks";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />
        <div className="main">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/tasks" element={<Tasks />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
