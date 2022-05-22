import './App.css';
import Navbar from './Components/Appbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Components/pages/Home';
import About from './Components/pages/About'
import SignUp from './Components/pages/SignUp'
import Login from './Components/pages/Login';
import Logout from './Components/pages/Logout'

function App() {
  return (
    <div>
      <Router>
      
<Routes>
    
  <Route  path='/' element={<Navbar/>} />
  <Route  path='Login' element={<Login/>} /> 
  <Route path='/Home' element={<Home/>} />
  <Route path='Logout' element={<Logout/>}/>
  <Route path='/about' element={<About/>} />
  <Route path='/SignUp' element={<SignUp/>}/>

</Routes>

      </Router>

    
    
    
    </div>
  );
}

export default App;
