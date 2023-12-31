import jwtDecode from "jwt-decode";
import { Account, Home, SocialLogin } from "./pages";
import React, { useContext, useEffect, useState } from "react";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import "./App.less";
import CreateMedia from "./pages/PinCap/CreateMedia/CreateMedia";
import Layout, { Content } from "antd/es/layout/layout";
import PinCap from "./pages/PinCap/PinCap";
import SiderCommon from "./components/sider/SiderCommon";
import HeaderCommon from "./components/header/HeaderCommon";
import ImageAi from "./pages/AITools/Images/ImageAi";
import DetailMedia from "./pages/PinCap/DetailMedia/DetailMedia";
import Dashboard from "./pages/Dashboard/Home";
import Album from "./pages/Dashboard/Album";
import AlbumDetail from "./pages/Dashboard/AlbumDetail";
import MediaReport from "./pages/Dashboard/MediaReport";
const App = () => {
  const { token } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      if (jwtDecode(token).exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        navigate("/sign-in");
      }
      navigate("/");
      setIsLogin(true);
    } else {

      // navigate("/home");
      
      setIsLogin(false);
    }
  }, [token]);
  return (
    <div className="App">
      {isLogin && 
        <>
          <HeaderCommon />
          <Layout style={{ minHeight: "90vh" }}>
            <SiderCommon />
            <Content className="main-container">
              <Routes>
                <Route path="/" element={<PinCap />} />
                <Route path="/create-media" element={<CreateMedia />} />
                <Route path="/ai" element={<ImageAi />} />
                <Route path="/media/:id" element={<DetailMedia />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/album" element={<Album />} />
                <Route path="/dashboard/album/:id" element={<AlbumDetail />} />
                {/* <Route
                  path="/dashboard/mediaReport"
                  element={<MediaReport />}
                /> */}

                {/* <Route path='/social-login' element={<SocialLogin />}/> */}
              </Routes>
            </Content>
          </Layout>
        </>}
        <Routes>
            <Route path="/sign-in" element={<Account />} />
            <Route path="/home" element={<Home />} /> 

            {/* <Route path='/social-login' element={<SocialLogin />}/> */}
          </Routes>
    </div>
    
  );
};

export default App;
