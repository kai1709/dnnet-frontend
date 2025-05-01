"use client";
import { Drawer, Radio } from "antd";
import Cookies from "js-cookie";
import { MenuIcon, User } from "lucide-react";
import { useEffect, useState } from "react";

const themes = ["", "dark", "light-1", "light-2"];
const Header = () => {
  const [openNavigateSideBar, setOpenNavigateSideBar] = useState(false);
  const [openUserSideBar, setOpenUserSideBar] = useState(false);
  const [activeClass, setActiveClass] = useState(false);
  const [theme, setTheme] = useState(Cookies.get("THEME_LAYOUT") || "");
  const scrollCheck = () => {
    setActiveClass(window.scrollY !== 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollCheck);

    return () => {
      window.removeEventListener("scroll", scrollCheck);
    };
  }, []);

  const HeaderContext = () => (
    <>
      <div
        onClick={() => setOpenNavigateSideBar(true)}
        className="cursor-pointer text-head-line"
      >
        <MenuIcon />
      </div>
      <div className="flex-1 text-center flex items-center justify-center">
        <img src="/logo.png" />
      </div>
      <div
        className="cursor-pointer text-head-line"
        onClick={() => setOpenUserSideBar(true)}
      >
        <User />
      </div>
    </>
  );

  const onSelectTheme = (key: string) => {
    if (themes.indexOf(key) === -1) return;
    setTheme(key);
    toggleTheme(key);
  };

  const toggleTheme = (value: string) => {
    Cookies.set("THEME_LAYOUT", value, { expires: 365 * 10 });
    document.documentElement.className = value;
  };

  return (
    <>
      <Drawer
        title={null}
        placement="left"
        closable={false}
        onClose={() => setOpenNavigateSideBar(false)}
        open={openNavigateSideBar}
        key="left"
        className="user-drawer"
      >
        <div className="w-full py-4 px-4 cursor-pointer menu-button">
          Thời sự
        </div>
        <div className="w-full py-4 px-4 cursor-pointer menu-button">
          Tin Vắn
        </div>
        <div className="w-full py-4 px-4 cursor-pointer menu-button">
          Kinh Doanh
        </div>
        <div className="w-full py-4 px-4 cursor-pointer menu-button">
          Chuyên Mục
        </div>
        <div className="w-full py-4 px-4 cursor-pointer menu-button">
          Cộng Đồng
        </div>
      </Drawer>

      <Drawer
        title={null}
        placement="right"
        closable={false}
        onClose={() => setOpenUserSideBar(false)}
        open={openUserSideBar}
        key="right"
        className="user-drawer bg-main-background"
      >
        <div className="w-full py-4 px-4 cursor-pointer menu-button">
          Login / Sign Up
        </div>
        <div className="w-full py-4 px-4 cursor-pointer menu-button">
          Themes
        </div>
        <div className="py-4 px-4">
          <Radio.Group
            style={{}}
            onChange={(value) => {
              onSelectTheme(value.target.value);
            }}
            value={theme}
            options={[
              { value: "", label: "Light" },
              { value: "dark", label: "Dark" },
              { value: "light-1", label: "Vintage" },
              { value: "light-2", label: "Navy" },
            ]}
          />
        </div>
      </Drawer>
      <div
        className={`flex px-6 py-4 items-center border-b-[4px] border-b-grey-2 w-full bg-main-background max-w-[1280px]`}
        style={
          activeClass ? { position: "fixed", zIndex: 999 } : { display: "none" }
        }
      >
        <HeaderContext />
      </div>
      <div
        className={`flex px-6 py-4 items-center border-b-[4px] border-b-grey-2`}
      >
        <HeaderContext />
      </div>
    </>
  );
};

export default Header;
