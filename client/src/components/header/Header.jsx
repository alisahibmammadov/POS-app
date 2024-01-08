import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Input, Badge } from "antd";
import { Link } from "react-router-dom";
const Header = () => {
  let arr = [
    {
      name: "Alisahib",
      surname: "Mammadov",
    },
    {
      name: "Alisahib",
      surname: "Mammadov",
    },
    {
      name: "Alisahib",
      surname: "Mammadov",
    },
    {
      name: "Alisahib",
      surname: "Mammadov",
    },
    {
      name: "Alisahib",
      surname: "Mammadov",
    },
    {
      name: "Alisahib",
      surname: "Mammadov",
    },
    {
      name: "Alisahib",
      surname: "Mammadov",
    },
    {
      name: "Alisahib",
      surname: "Mammadov",
    },
    {
      name: "Alisahib",
      surname: "Mammadov",
    },
    {
      name: "Alisahib",
      surname: "Mammadov",
    },
    {
      name: "Alisahib",
      surname: "Mammadov",
    },
  ];
  arr.map((item) => {
    console.log(item);
  });
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <Link to="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </Link>
        </div>
        <div className="header-search flex-1 flex justify-center items-center">
          <Input
            size="large"
            placeholder="Ürün ara..."
            prefix={<SearchOutlined />}
            className="rounded-full  max-w-[800px]"
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
          <Link
            to={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <HomeOutlined className="text-xl md:text-2xl " />
            <span className="text-[10px] md:text-xs ">Ana Sayfa</span>
          </Link>
          <Badge offset={[0, 6]} count={5} className="hidden md:flex ">
            <Link
              to={"/cart"}
              className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
            >
              <ShoppingCartOutlined className="text-xl md:text-2xl " />
              <span className="text-[10px] md:text-xs ">Sepet</span>
            </Link>
          </Badge>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <CopyOutlined className="text-xl md:text-2xl " />
            <span className="text-[10px] md:text-xs ">Faturalar</span>
          </a>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <UserOutlined className="text-xl md:text-2xl " />
            <span className="text-[10px] md:text-xs ">Musteriler</span>
          </a>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <BarChartOutlined className="text-xl md:text-2xl " />
            <span className="text-[10px] md:text-xs ">Statistikler</span>
          </a>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <LogoutOutlined className="text-xl md:text-2xl " />
            <span className="text-[10px] md:text-xs ">Çıkış</span>
          </a>
        </div>
        <Badge offset={[0, 6]} count={5} className="md:hidden flex">
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <ShoppingCartOutlined className="text-2xl " />
            <span className="text-[10px] md:text-xs ">Sepet</span>
          </a>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
