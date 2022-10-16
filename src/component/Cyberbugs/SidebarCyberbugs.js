import React, { useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    VideoCameraOutlined,
    PlusOutlined,
    SearchOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

export default function SidebarCyberbugs() {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div style={{ position:'fixed',height:'100vh',zIndex:'2'}}>
            <Layout style={{height:'100%',position:'absolute'}}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="text-center">
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger text-xl text-white py-5',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                </div>
                    <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
                        <Menu.Item key='1' icon={<PlusOutlined />}>
                        Create Issue
                        </Menu.Item>
                        <Menu.Item key='2' icon={<SearchOutlined />}>
                        Search
                        </Menu.Item>
                        <Menu.Item key='3' icon={<VideoCameraOutlined/>}>
                        dsdsd
                        </Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
        </div >
    )
}
