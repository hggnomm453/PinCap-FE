import React, { useEffect, useState } from 'react'
import { Header, Sidebar, TableCampaign } from '../index'
import { Col, Layout, Row } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "CrowdWork Dummy"
  }, [])
  return (
    <Layout className='main-layout' >
      <Sidebar className='sidebar-layout' />
      <Row className='home-layout' >
        <Header/>
        {/* <TableCampaign/> */}
      </Row>
    </Layout>

  )
}

export default Home