import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
} from "antd";
import MainLayout from "../../components/UI/Layout";
import { useState } from "react";

const NewList = () => {
  const [form] = Form.useForm();
  const [isModal, setIsModal] = useState(false);

  const closeModal = () => {
    setIsModal(false);
  };
  const handleOnAdd = (data) => {
    console.log(data);
    form.resetFields();
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
              name="name"
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
              name="person"
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
                    value: 0,
                    label: "Zon",
                  },
                  {
                    value: 1,
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
