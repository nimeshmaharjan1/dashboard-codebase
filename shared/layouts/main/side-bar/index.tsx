import { HomeOutlined, LogoutOutlined, SettingOutlined, UnorderedListOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const { Sider } = Layout

const MainLayoutSidebar = ({ collapsed }: { collapsed: boolean }) => {

    const router = useRouter()

    return (
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
                        children:
                            [{
                                key: 'sub-user-menu-1',
                                icon: <UnorderedListOutlined />,
                                label: 'List',
                            }, {
                                key: 'sub-user-menu-2',
                                icon: <UserAddOutlined />,
                                label: 'Add',
                            }]
                    },
                    {
                        key: '3',
                        icon: <SettingOutlined />,
                        label: 'Settings',
                    },
                    {
                        key: '4',
                        icon: <LogoutOutlined />,
                        label: 'Logout'
                    }
                ]}
                onClick={(value) => {
                    const { key } = value;
                    switch (key) {
                        case '1':
                            router.push('/');
                            break;
                        case 'sub-user-menu-1':
                            router.push('/users')
                            break;
                        case 'sub-user-menu-2':
                            router.push('/users/create')
                            break;
                        case '3':
                            router.push('/settings')
                            break;
                        case '4':
                            signOut()
                            break;
                    }
                }}
            />
        </Sider>
    )
}

export default MainLayoutSidebar