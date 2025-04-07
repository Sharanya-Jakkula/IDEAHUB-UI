// Dashboard.jsx
import React from "react";
import { Layout, Menu, Typography } from "antd";
import "antd/dist/reset.css";
import './Dashboard.css'
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

export default function Dashboard() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} style={{ backgroundColor: "#6a0dad" }}>
        <div style={{ padding: "16px", color: "white", textAlign: "center" }}>
          <Title level={3} style={{ color: "white" }}>
            IdeaHub
          </Title>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ backgroundColor: "#6a0dad" }}
          items={[
            { key: "1", label: "Dashboard" },
            { key: "2", label: "My Ideas" },
            { key: "3", label: "Contribute" },
            { key: "4", label: "Logout" },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "white", paddingLeft: 24 }}>
          <Title level={4} style={{ margin: 0, color: "#6a0dad" }}>
            Dashboard
          </Title>
        </Header>
        <Content style={{ margin: "24px", backgroundColor: "#f5f5f5", padding: "24px" }}>
          <p>This is your main dashboard content area.</p>
        </Content>
      </Layout>
    </Layout>
  );
}
