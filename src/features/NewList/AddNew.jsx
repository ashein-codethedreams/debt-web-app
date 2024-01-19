import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import MainLayout from "../../components/UI/Layout";
import { useState } from "react";
import { useNavigate } from "react-router";

const NewList = () => {
  const [form] = Form.useForm();
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const closeModal = () => {
    setIsModal(false);
  };

  const handleOnAdd = async (data) => {
    const response = await fetch(
      "https://expense-app-562ec-default-rtdb.firebaseio.com/lists.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      setIsModal(false);
      form.resetFields();
      navigate("/");
    } else {
      setIsModal(false);
      console.log(response);
    }
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
          footer={
            <Button form="form" htmlType="submit">
              Submit
            </Button>
          }
          onCancel={closeModal}
          title={"Add new list"}
        >
          <br />
          <Form
            form={form}
            id="form"
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
              name="item_name"
              rules={[
                {
                  required: true,
                  message: "can't be blank!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="ပေးချေသူ"
              name="payer_name"
              rules={[
                {
                  required: true,
                  message: "can't be blank!",
                },
              ]}
            >
              <Select
                placeholder="Choose Payer"
                options={[
                  {
                    value: "Zon",
                    label: "Zon",
                  },
                  {
                    value: "Ashein",
                    label: "Ashein",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="ရက်စွဲ"
              name="date"
              rules={[
                {
                  required: true,
                  message: "can't be blank!",
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
                  pattern: /^\d+$/,
                  message: "must be number!",
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
