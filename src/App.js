import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/pages/SignIn";
import SignUpForm from "./components/pages/SignUpForm";
import Footer from "./views/Footer";
import Header from "./views/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Account from "./components/pages/Account";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUpForm />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
