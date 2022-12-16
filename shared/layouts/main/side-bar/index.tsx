import { HomeOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
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
                                icon: null,
                                label: 'User List',
                            }, {
                                key: 'sub-user-menu-2',
                                icon: null,
                                label: 'Item Two',
                            }]
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
                        case 'sub-user-menu-1':
                            router.push('/users')
                            break;
                        case '3':
                            router.push('/settings')
                            break;
                    }
                }}
            />
        </Sider>
    )
}

export default MainLayoutSidebar