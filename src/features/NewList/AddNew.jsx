import { Button, DatePicker, Form, Input, Modal } from "antd";
import MainLayout from "../../components/UI/Layout";
import { useState } from "react";

const NewList = () => {
  const [isModal, setIsModal] = useState(false);

  const closeModal = () => {
    setIsModal(false);
  };
  const handleOnAdd = (data) => {
    console.log(data);
  };
  return (
    <div>
      <MainLayout>
        <p className="text-lg font-semibold">New List Adding Form</p>
        <br />
        <Button
          onClick={() => setIsModal(true)}
          className="float-left ml-5 rounded-sm border-emerald-400 bg-emerald-600 text-white"
        >
          စာရင်းအသစ် ထည့်မည်
        </Button>
        <Modal
          open={isModal}
          footer={<Button htmlType="submit">Submit</Button>}
          onCancel={closeModal}
          title={"Add new list"}
        >
          <br />
          <Form
            colon={false}
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={handleOnAdd}
          >
            <Form.Item
              label="ပစ္စည်း"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="ပေးချေသူ"
              name="person"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="ရက်စွဲ"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
              label="ပမာဏ"
              name="amount"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </MainLayout>
    </div>
  );
};
export default NewList;
