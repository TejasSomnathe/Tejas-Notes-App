import { useState , useEffect} from "react"
import {useDispatch} from 'react-redux'
import authService, { AuthService } from './appwrite/auth.js'
import{login, logout} from './store/authSlice';
import './index.css'
import { Header } from "./components/Header/Header.jsx";
import {Footer} from "./components/Footer/Footer.jsx";

import './components/index.js'
import { Outlet } from "react-router-dom";


function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        diapatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])
  
return!loading ? (
  <div>
    <div>
      <Header />
      
      <main>
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
    hii

  </div>
):(null);



 
}

export default App
