import Footer from "./components/Footer";
import Header from "./components/Header";
import ListMovie from "./components/ListMovie";
import './App.css';
import Login from "./components/Login";
import { Routes,Route } from "react-router-dom";
import SignUp from "./components/SignUp";





function App() {
  return (
    
    <div className="Container-fluid movie-app">
           <Header/>
            <Routes> 
              
              <Route path="/" element={
                <div className="row"> <ListMovie/> </div>
              } />
              <Route path="/Login" element={<Login/>}  />
              <Route path="/SignUp" element={<SignUp/>}  />
              
                
           </Routes>
           <Footer/>
   
    </div>
  
  );
}

export default App;
