import { Avatar, Button, Col, Row } from "antd";
import jwtDecode from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./index.less";
import { Logo } from "../../assets/img";

const HeaderCommon = () => {
  const [name, setName] = useState("");
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [collapseMenu, setCollapseMenu] = useState(false);
  useEffect(() => {
    if (token) {
      setName(jwtDecode(token).name) || setName(jwtDecode(token).sub);
    }
  }, []);

  const logoutHandle = () => {
    localStorage.removeItem("token");
    navigate("/home");
    window.location.reload(true);
  };
  const loginHandle = () => {
    navigate("/sign-in");
  };
  return (
    <Row className="main-header">
      <Col
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Logo} alt="" />
      </Col>
      <Col>
        {/* <Avatar icon="user" /> */}
        {token ? <Button onClick={() => logoutHandle()}>Logout</Button> : <Button onClick={() => loginHandle()}>Login</Button>}
        {}
      </Col>
    </Row>
  );
};

export default HeaderCommon;
