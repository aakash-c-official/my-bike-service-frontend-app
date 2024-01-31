import "./App.css";
import SignIn from "./components/pages/SignIn";
import SignUpForm from "./components/pages/SignUpForm";
import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Account from "./components/pages/Account";
import Home from "./components/pages/Home";
import SlotForm from "./components/feature/SlotForm";
import AddCenterForm from "./components/feature/AddCenterForm";
import Missing from "./components/pages/Missing";
import LayoutOutlet from "./components/pages/LayoutOutlet";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import BookingsPage from "./components/pages/BookingsPage";
import LandingPage from "./components/pages/LandingPage";
axios.defaults.baseURL = "http://localhost:1337";
axios.defaults.withCredentials=true;
function App() {
  return (
    <div className="App bg-red-100 ">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<LayoutOutlet />}>
          <Route path="/landingpage" element={<LandingPage />}/>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUpForm />} />
            //need to protect
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route path="/account/:subpage?" element={<Account />} />
            <Route path="/account/:subpage/:action" element={<Account />} />
            <Route path="/account/services/:id" element={<AddCenterForm />} />

            <Route path="/slotform" element={<SlotForm />} />
            <Route path="/slotform/:id" element={<SlotForm />} />
            <Route path="/addcenterform" element={<AddCenterForm />} />
            //catch all page
            <Route path="/*" element={<Missing />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}



export default App;
