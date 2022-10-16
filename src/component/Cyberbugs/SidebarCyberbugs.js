
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

// import React, { useState } from 'react';
// import {
//     BarsOutlined,
//     SearchOutlined,
//     PlusCircleOutlined,
// } from '@ant-design/icons';
// import { Layout, Menu } from 'antd';
// import { useDispatch, useSelector } from 'react-redux';
// import FormCreateTask from '../Forms/FormCreateTask/FormCreateTask';

// const { Sider } = Layout;

// export default function SidebarCyberbugs() {
//     const dispatch = useDispatch();

//     const [collapsed, setCollapsed] = useState(false);

//     return (
//         <div>
//             <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: '100%' }}>
//                 <div className='text-right' onClick={() => { setCollapsed(!collapsed) }}><BarsOutlined style={{ cursor: 'pointer', color: '#fff', fontSize: '20px' }} /></div>
//                 <Menu
//                     theme="dark"
//                     mode="inline"
//                     defaultSelectedKeys={['1']}
//                     items={[
//                         {
//                             key: '1',
//                             icon: <PlusCircleOutlined />,
//                             label: 'Create Task',
//                             onClick: () => {dispatch({
//                                 type: 'OPEN_FORM_CREATE_TASK',
//                                 Component: <FormCreateTask />,
//                                 title: 'Create Task'
//                             })}
//                         },
//                         {
//                             key: '2',
//                             icon: <SearchOutlined />,
//                             label: 'Search',
//                         },
//                     ]}
//                 />
//             </Sider>
//         </div>

//     )
// }
