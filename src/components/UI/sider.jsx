import React, { useEffect, useState } from "react";
import { UnorderedListOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("View List", "/", <UnorderedListOutlined />),
  getItem("Add new List", "/new", <PlusCircleOutlined />),
];

const Sider = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setSelectedKeys([path]);
  }, [location.pathname]);

  const handleMenuSelect = ({ key }) => {
    setSelectedKeys([key]);
    navigate(key);
  };
  return (
    <Menu
      onSelect={handleMenuSelect}
      style={{
        width: 250,
        height: "100vh",
        position: "fixed",
        zIndex: 98,
      }}
      selectedKeys={selectedKeys}
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
    />
  );
};
export default Sider;
