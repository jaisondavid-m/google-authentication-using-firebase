import { useEffect, useState } from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import { auth} from "./firebase";

function App() {

   const [user,setUser]=useState();

   useEffect(()=>{
    const unsub = auth.onAuthStateChanged(setUser);
    return unsub;
   })

  return(
    <div>
       <BrowserRouter>
          <Routes>
             <Route path='/' element={user ? <Navigate to="/dashboard" /> : <Login />}/>
             <Route path='/dashboard' element={user ? <Dashboard/> : <Login />}/>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
