import { Button } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

const CartTotals = () => {
  return (
    <div className="cart h-screen  max-h-[calc(100vh_-_90px)] flex flex-col ">
      <h2 className="bg-blue-600 text-center font-bold text-white py-4 tracking-wide">
        Sepetteki Ürünler
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3 py-2 pt-2 overflow-y-auto">
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col ml-2">
              <b>Elma</b>
              <span>12tl x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <Button
              type="primary"
              size="small"
              className="w-full  !rounded-full"
              icon={<PlusCircleOutlined />}
            />
            <span className="font-bold">1</span>
            <Button
              type="primary"
              size="small"
              className="w-full  !rounded-full"
              icon={<MinusCircleOutlined />}
            />
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col ml-2">
              <b>Elma</b>
              <span>12tl x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <Button
              type="primary"
              size="small"
              className="w-full  !rounded-full"
              icon={<PlusCircleOutlined />}
            />
            <span className="font-bold">1</span>
            <Button
              type="primary"
              size="small"
              className="w-full  !rounded-full"
              icon={<MinusCircleOutlined />}
            />
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col ml-2">
              <b>Elma</b>
              <span>12tl x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <Button
              type="primary"
              size="small"
              className="w-full  !rounded-full"
              icon={<PlusCircleOutlined />}
            />
            <span className="font-bold">1</span>
            <Button
              type="primary"
              size="small"
              className="w-full  !rounded-full"
              icon={<MinusCircleOutlined />}
            />
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col ml-2">
              <b>Elma</b>
              <span>12tl x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <Button
              type="primary"
              size="small"
              className="w-full  !rounded-full"
              icon={<PlusCircleOutlined />}
            />
            <span className="font-bold">1</span>
            <Button
              type="primary"
              size="small"
              className="w-full  !rounded-full"
              icon={<MinusCircleOutlined />}
            />
          </div>
        </li>
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>99tl</span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV %8</b>
            <span className="text-red-700">+7 tl</span>
          </div>
        </div>
        <div className="border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500">Genel Toplam</b>
            <span className="text-xl">99tl</span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button type="primary" size="large" className="w-full">
            Sipariş Oluştur
          </Button>
          <Button
            type="primary"
            size="large"
            className="w-full mt-2"
            danger
            icon={<ClearOutlined />}
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
