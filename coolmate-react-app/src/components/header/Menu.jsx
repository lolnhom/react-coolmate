import React from "react";
import "./menu.scss";

function Menu({ posts = [] }) {
  return (
    <div>
      <ul className="menu">
        {posts.map((post) => (
          <li key={post.id}>
            <a href="#">{post.name}</a>
            <ul>
              {post.children?.map((pot) => {
                <a href="#">{pot.name}</a>;
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
