import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Forms/Register";
import SignIn from "./pages/Forms/SignIn";
import Load from "./pages/Load/Load";
import CreateDriver from "./pages/Driver/CreateDriver";
import Drivers from "./pages/Driver/Drivers";
import CreateTractor from "./pages/Tractor/CreateTractor";
import Tractors from "./pages/Tractor/Tractors";
import CreateTrailer from "./pages/Trailer/CreateTrailer";
import Trailers from "./pages/Trailer/Trailers";
import React from "react";
import { useState } from "react";
import UpdateTractor from "./pages/Other/UpdateTractor";

export const AccountActive = React.createContext(null);

function App() {
  const [activeAccount, setActiveAccount] = useState({});

  return (
    <AccountActive.Provider value={{ activeAccount, setActiveAccount }}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/register" replace />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/pages/profile" element={<Profile />} />
          <Route path="/pages/loads/list" element={<Load />} />
          <Route path="/pages/drivers/create" element={<CreateDriver />} />
          <Route path="/pages/drivers/drivers" element={<Drivers />} />
          <Route path="/pages/tractors/create" element={<CreateTractor />} />
          <Route path="/pages/tractors/tractors" element={<Tractors />} />
          <Route
            path="/pages/tractors/tractors/update"
            element={<UpdateTractor />}
          />
          <Route path="/pages/trailers/create" element={<CreateTrailer />} />
          <Route path="/pages/trailers/trailers" element={<Trailers />} />
        </Routes>
      </Router>
    </AccountActive.Provider>
  );
}

export default App;
