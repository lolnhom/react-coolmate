import React, { useEffect, useState } from "react";
import account from "../../assets/image/icon-account.svg";
import cart from "../../assets/image/icon-cart.svg";
import logo1 from "../../assets/image/logo-coolmate.svg";
import search from "../../assets/image/icon-search.svg";
import "./header.scss";
import Menu from "./Menu";
import ModalUser from "../slide/Modal";

function Header() {
  const [postList, setPostList] = useState([]);
  const [index, setIndex] = useState(0);
  const handleMouseEnter = (e) => {
    e.target.style.background = "#d9d9d9";
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "#f9f86c";
  };

  const sales = [
    "Nhập CHAOBAN giảm 50% tối đa 100K cho đơn hàng đầu tiên",
    "ƯU ĐÃI SIÊU SỐC CHỈ TỪ 99K",
    "ƯU ĐÃI GIẢM ĐẾN 50%",
    "ƯU ĐÃI ĐỒ MẶC HÀNG NGÀY GIẢM ĐẾN 20%",
  ];
  useEffect(() => {
    async function fetchPostList() {
      const requestUrl = "http://localhost:3333/menu";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setPostList(responseJSON);
    }
    fetchPostList();
  }, []);
  useEffect(() => {
    const tick = () => setIndex((i) => i + 1);
    const id = setInterval(tick, 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="header">
      <div
        className="header__title"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href="#">{sales[index % sales.length]}</a>
      </div>
      <div className="header__menu">
        <div className="logo">
          <a href="#">
            <img src={logo1} alt="logo-coolmate" />
          </a>
        </div>
        <Menu posts={postList} className="menuList" />
        <div className="social">
          <img src={search} alt="search-icon" />
          {/* <img src={account} alt="account-icon" /> */}
          <ModalUser />
          <img src={cart} alt="cart-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
