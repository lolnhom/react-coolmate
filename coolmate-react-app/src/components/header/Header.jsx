import React, { useEffect, useState } from "react";
import "./header.scss";
import PostList from "./Menu";
import Menu from "./Menu";
import logo1 from "../../assets/logo-coolmate.svg";

function Header() {
  const [postList, setPostList] = useState([]);
  const [index, setIndex] = useState(0);
  const handleMouseEnter = (e) => {
    e.target.style.background = "#d9d9d9";
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "#f9f86c";
  };
  const handleMouseLeave1 = (e) => {
    e.target.style.background = "#ffff";
  };

  const sales = [
    "Nhập CHAOBAN giảm 50% tối đa 100K cho đơn hàng đầu tiên",
    "ƯU ĐÃI SIÊU SỐC CHỈ TỪ 99K",
    "ƯU ĐÃI GIẢM ĐẾN 50%",
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
    <div
      className="header"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="header__title">
        <a href="#">{sales[index % sales.length]}</a>
      </div>
      <div className="header__menu">
        <div className="logo">
          <a href="#">
            <img src={logo1} alt="logo-coolmate" />
          </a>
        </div>
        <Menu posts={postList} />
      </div>
    </div>
  );
}

export default Header;
