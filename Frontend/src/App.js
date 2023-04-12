import { Routes , Route } from 'react-router-dom';
import './App.css';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';
import Home from './routes/Home';
import FormComponent from './component/FormComponent';
import OTP from './component/OTP';
import ForgotPassword from './component/ForgotPassword';
import AfterHomePage from './component/HomePage/Home';
import Profile from './component/UserProfile/UserProfile';
// import Chat from './component/Chat';
function App() {
  return (
    <div className="App">

    <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/service" element={<Service/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/FormComponent" element={<FormComponent/>}/>
          <Route exact path="/OTP" element={<OTP/>}/>
          <Route exact path="/ForgotPassword" element={<ForgotPassword/>}/>
          <Route exact path="/AfterHomePage" element={<AfterHomePage/>}/>
          <Route exact path="/UserProfile" element={<Profile/>}/>
          {/* <Route exact path="/Chat" element={<Chat/>}/> */}

    </Routes> 
    </div>
  );
}

export default App;
