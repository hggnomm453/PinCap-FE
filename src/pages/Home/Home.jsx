import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./index.less";
import { Layout } from "antd";
import HeaderCommon from "../../components/header/HeaderCommon";
import SiderCommon from "../../components/sider/SiderCommon";
import PinCap from "../PinCap/PinCap";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return <div></div>;
};

export default Home;
