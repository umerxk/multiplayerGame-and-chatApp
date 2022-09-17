import React from "react";
import { Login, Register } from "./components/signup";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Dashboar from "./components/dashboard";
import Chat from "./components/chat/Chat";
import Navbar from "./components/navbar/Navbar";
import Inbox from "./components/Inbox";
import Vote from "./components/vote/Vote";
import Bags from "./components/bags/window";
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboar />} />
          </Route>
          
          <Route path="/chat/:id/:name" element={<Chat />} />
          <Route path="/inbox/:id/:name" element={<Inbox />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/nike" element={<Bags />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
