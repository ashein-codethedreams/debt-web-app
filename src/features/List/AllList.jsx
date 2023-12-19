import { Table } from "antd";
import MainLayout from "../../components/UI/Layout";
import { useEffect, useState } from "react";

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
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchLists = async () => {
      const response = await fetch(
        "https://expense-app-562ec-default-rtdb.firebaseio.com/lists.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!!!");
      }

      const responseData = await response.json();
      const loadedLists = [];
      for (const key in responseData) {
        loadedLists.push({
          key: key,
          id: key,
          title: responseData[key].item_name,
          name: responseData[key].payer_name,
          date: responseData[key].date,
          amount: responseData[key].amount,
        });
      }

      setLists(loadedLists);
      setIsLoading(false);
    };

    fetchLists().catch((error) => {
      setIsLoading(false);
      console.log(error.message);
    });
  }, []);

  return (
    <div>
      <MainLayout>
        <p className="text-lg font-semibold">All History</p>
        {isLoading ? (
          <p className="p-5">Loading...</p>
        ) : (
          <Table
            style={{ margin: "30px" }}
            dataSource={lists}
            columns={columns}
          />
        )}
      </MainLayout>
    </div>
  );
};
export default AllList;
