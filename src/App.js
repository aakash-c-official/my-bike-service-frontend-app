import "./App.css";
import SignIn from "./components/pages/SignIn";
import SignUpForm from "./components/pages/SignUpForm";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Account from "./components/pages/Account";
import Home from "./components/pages/Home";
import SlotForm from "./components/feature/SlotForm";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUpForm />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/slotform" element={<SlotForm />} />
      </Routes>
    </div>
  );
}

export default App;
