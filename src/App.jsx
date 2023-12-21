import jwtDecode from 'jwt-decode';
import { Account, Home, SocialLogin } from './pages'
import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext';
import Dashboard from './pages/Dashboard/Home';
import Album from './pages/Dashboard/Album';
import AlbumDetail from './pages/Dashboard/AlbumDetail';
import MediaReport from './pages/Dashboard/MediaReport';
const App = () => {
  const { token } = useContext(AuthContext);
  const [isReady, setIsReady] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if(token) {
  //     if(jwtDecode(token).exp < Date.now() / 1000 ) {
  //       localStorage.removeItem("token");
  //       navigate("/sign-in");
  //     }
  //     navigate("/");
  //   } 
  //   else 
  //   {
  //     navigate("/sign-in");
  //   }  
  // }, [token] )

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/sign-in' element={<Account />}/>
      <Route path='/social-login' element={<SocialLogin />}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/dashboard/album' element={<Album/>}/>
      <Route path='/dashboard/album/:id' element={<AlbumDetail />} />
      <Route path='/dashboard/mediaReport' element={<MediaReport/>}/>

    </Routes>
  )
}

export default App

