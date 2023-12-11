import React from "react";
import { UnorderedListOutlined, PlusCircleOutlined } from "@ant-design/icons";
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
  getItem("View List", "1", <UnorderedListOutlined />),
  getItem("Add new List", "2", <PlusCircleOutlined />),
];
const Sider = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 250,
        height: "100vh",
        position: "fixed",
        zIndex: 98,
      }}
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
    />
  );
};
export default Sider;
