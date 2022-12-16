import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Input, Layout, Row } from "antd";
import React, { Dispatch, SetStateAction } from "react";

const { Header } = Layout;
const { Search } = Input

interface Props {
    collapsed: boolean;
    setCollapsed: Dispatch<SetStateAction<boolean>>
}

const MainLayoutHeader: React.FC<Props> = ({ collapsed, setCollapsed }) => {
    return (
        <Header
            className="site-layout-background"
            style={{
                padding: 0,
            }}
        >
            <Row style={{ paddingRight: 20 }}>
                <Col xs={18}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}</Col>
                <Col xs={6}>
                    <Row gutter={12} className="h-full" justify={'space-between'}>
                        <Col xs={20}>
                            <Row align={'middle'} className="h-full">
                                <Search placeholder="input search text" enterButton />
                            </Row>
                        </Col>
                        <Col xs={4}>
                            <Row align={'middle'} className="h-full">
                                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Header >
    )
}

export default MainLayoutHeader