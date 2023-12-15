import { VideoCameraOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import MenuItem from 'antd/es/menu/MenuItem'
import React from 'react'
import { Link } from 'react-router-dom'
import "./index.less"

const SiderCommon = () => {
    return (
        <Sider className='siderbar' width="15%">
            <Menu>
                <Menu.Item key='1' icon={<VideoCameraOutlined />}>
                    <Link to='/album'>My Album</Link>
                </Menu.Item>
                <Menu.SubMenu 
                    mode="inline"
                    title="My Media"
                    defaultSelectedKeys={['1']}

                >
                    <Menu.Item>Images</Menu.Item>
                    <Menu.Item>Videos</Menu.Item>
                </Menu.SubMenu >
            </Menu>
        </Sider>
    )
}

export default SiderCommon