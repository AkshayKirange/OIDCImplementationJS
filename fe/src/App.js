import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";

// s
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./Pages/SignUp";
import Resources from "./Pages/Resources";
import Downloads from "./Pages/Downloads";
import FAQs from "./Pages/FAQs";
import { LoginSuccessful } from "./Pages/LoginSuccessful";
import AnyPage from "./Pages/AnyPage";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/downloads" element={<Downloads />}></Route>
          <Route path="/FAQs" element={<FAQs />}></Route>
          <Route path="/loginSuccessful" element={<LoginSuccessful />}></Route>
          <Route path="*" element={<AnyPage />}></Route>
          {/* <Route path="/:code/:state" exact><LoginSuccessful /></Route> */}
          {/* <Route  path="/loginSuccessful/:code/:state" exact component={<LoginSuccessful/>} />; */}

          
        </Routes>
        
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
