import { Table } from "antd";
import MainLayout from "../../components/UI/Layout";

const dataSource = [
  {
    key: "1",
    name: "Ashein",
    title: "ဝက်သား",
    amount: 3000,
    date: "10/12/2023",
  },
  {
    key: "2",
    name: "Zon",
    title: "ကြိုး",
    amount: 10000,
    date: "24/10/2023",
  },
];

const columns = [
  {
    title: "Payer_Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    defaultSortOrder: "ascend",
    sorter: (a, b) => {
      const dateA = new Date(a.date.split("/").reverse().join("/"));
      const dateB = new Date(b.date.split("/").reverse().join("/"));
      return dateA - dateB;
    },
  },
];

const AllList = () => {
  return (
    <div>
      <MainLayout>
        <h1>All History</h1>
        <Table
          style={{ margin: "30px" }}
          dataSource={dataSource}
          columns={columns}
        />
      </MainLayout>
    </div>
  );
};
export default AllList;
