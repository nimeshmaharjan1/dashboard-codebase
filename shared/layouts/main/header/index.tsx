import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Layout, Row } from "antd";
import React, { Dispatch, SetStateAction } from "react";

const { Header } = Layout;

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
    )
}

export default MainLayoutHeader