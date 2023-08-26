import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./register/Register";
import Profile from "./components/profile/Profile";
import Forgot from "./components/forgot/Forgot";
import Forgotid from "./components/forgotid/Forgotid";
import EditUser from "./components/Edituser/EditUser";
import Booking from "./components/Bookings/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edituser" element={<EditUser />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/forgotid" element={<Forgotid />} />
        <Route path="/hotels/room/book/:roomid" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
