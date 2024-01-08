import { Modal, Form, Input, Select, Button, Card } from "antd";
const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Received values of rom: ", values);
  };

  return (
    <>
      <Modal
        title="Fatura Olustur"
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Musteri Adi"
            name={"customerName"}
            rules={[
              { required: true, message: "Musteri Adi alani bos gecilemez" },
            ]}
          >
            <Input placeholder="Musteri adi yaziniz" />
          </Form.Item>
          <Form.Item
            name={"phoneNumber"}
            label="Tel No"
            rules={[{ required: true }]}
          >
            <Input placeholder="Tel No yaziniz" maxLength={11} />
          </Form.Item>
          <Form.Item
            label="Odeme Yontemi"
            name={"paymentMode"}
            rules={[{ required: true }]}
          >
            <Select placeholder="Odeme yontemi seciniz">
              <Select.Option value="Nakit">Nakit</Select.Option>
              <Select.Option value="Kredi Karti">Kredi Karti</Select.Option>
            </Select>
          </Form.Item>
          <Card>
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>549,00 tl</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam %8</span>
              <span className="text-red-600">+43,8 tl</span>
            </div>
            <div className="flex justify-between">
              <b>Toplam</b>
              <b>549,00 tl</b>
            </div>
            <div className="flex justify-end">
              <Button
                // onClick={showModal}
                className="mt-4 "
                type="primary"
                htmlType="submit"
              >
                Siparis Olustur
              </Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default CreateBill;
