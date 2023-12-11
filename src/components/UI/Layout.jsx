import React from "react";
import Sider from "./sider";
import { Layout } from "antd";

const { Header, Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 99,
        }}
      >
        <p style={{ color: "white" }}>စာရင်း</p>
      </Header>
      <Layout style={{ marginTop: "60px" }}>
        <Sider />
      </Layout>
      <Layout>
        <Content style={{ marginLeft: "250px", height: "100vh" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
