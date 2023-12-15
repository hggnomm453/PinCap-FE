import { Avatar, Button, Col, Row } from 'antd'
import jwtDecode from 'jwt-decode';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import "./index.less";

const HeaderCommon = () => {
  const [name, setName] = useState("");
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();  
  const [collapseMenu, setCollapseMenu] = useState(false);
  useEffect(() => {
      if(token) {
        setName(jwtDecode(token).name) || setName(jwtDecode(token).sub)
      }
  }, [])

  const logoutHandle = () => {
    localStorage.removeItem('token');
    navigate('/sign-in')
  }
  return (
    <Row className='main-header'>
      <Col className='title'>
          PINCAP
      </Col>  
      <Col>
        <Avatar icon="user" />
        <Button onClick={() => logoutHandle()}>
          Logout
        </Button>
      </Col>
    </Row>
  )
}

export default HeaderCommon