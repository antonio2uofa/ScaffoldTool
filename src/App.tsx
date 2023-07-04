import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import FirebasePage from "./components/FirebasePage";
import Create from "./components/CreateButton";

function App() {
  return (
    <>
      <Router>
        <Navbar links={["/"]} titles={["Home"]} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/firebase-connection" element={<FirebasePage />}></Route>
        </Routes>
      </Router>
      <Create Title={} Description={} DueDate={} Priority={} Status={}></Create>
    </>
  );
}

export default App;
