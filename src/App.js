import './App.css';
import Login from './components/login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import { getUserAuth } from './actions'; 
import Header from './components/Header';
import Home from './components/Home';
import { useEffect } from 'react';
import { connect } from 'react-redux';
function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
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

const mapStateToProps = (state) =>{
  return {};
}

const mapDispatchToProps = (dispatch) =>({
  getUserAuth: () => dispatch(getUserAuth()),
});
export default connect(mapStateToProps,mapDispatchToProps)(App);

