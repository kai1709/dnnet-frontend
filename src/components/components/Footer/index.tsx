import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#555]">
      <div className="p-4">
        <Link href="/">
          <img src="/logo.png" className="hidden md:block" />
          <img src="/logo-mobile.png" className="block md:hidden" />
        </Link>
      </div>
      <div className="text-center text-sm text-[#fff] h-[100px]">
        Menu - Liên hệ
      </div>
    </div>
  );
};

export default Footer;
