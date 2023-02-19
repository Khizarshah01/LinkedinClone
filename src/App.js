import './App.css';
import Login from './components/login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";  
import Header from './components/Header';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<><Header /><Home /></>}/> 
   </Routes>
   </BrowserRouter>
   
    </div>
  );
}

export default App;
