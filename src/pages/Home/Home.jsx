import React from 'react'
import { useLocation } from 'react-router-dom'
import "./index.less"
import { Layout } from 'antd';
import HeaderCommon from '../../components/header/HeaderCommon';
import SiderCommon from '../../components/sider/SiderCommon';
import PinCap from '../PinCap/PinCap';

const Home = () => {
  const location = useLocation();

  return (
    <div >
      <HeaderCommon />
      <Layout>
        <SiderCommon />
        <div className='main-container'>
          <PinCap />
        </div>
      </Layout>
    </div>

  )
}

export default Home