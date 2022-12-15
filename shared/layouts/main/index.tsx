import {
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Avatar, Col, Layout, Menu, Row } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const { Header, Sider, Content } = Layout;

type IProps = {
    children: React.ReactNode
}

const MainLayout: React.FC<IProps> = ({ children }) => {

    const router = useRouter()

    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout className="layout">
            <Sider theme='light' trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    LOGO
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: 'Users',
                        },
                        {
                            key: '3',
                            icon: <SettingOutlined />,
                            label: 'Settings',
                        },
                    ]}
                    onClick={(value) => {
                        const { key } = value;
                        switch (key) {
                            case '1':
                                router.push('/');
                                break;
                            case '2':
                                router.push('/users')
                                break;
                            case '3':
                                router.push('/settings')
                                break;
                        }
                    }}
                />
            </Sider>
            <Layout className="site-layout" style={{ minHeight: '100vh' }}>
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    <Row>
                        <Col xs={22}>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            })}</Col>
                        <Col xs={2}>
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Col>
                    </Row>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout;