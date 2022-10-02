import React from "react";
import "./menu.scss";

function Menu({ posts = [] }) {
  return (
    <div id="wrapper">
      <nav className="menu">
        <ul className="clearfix">
          {posts.map((post) => (
            <li key={post.id}>
              <a href="#">{post.name}</a>
              <ul className="sub-menu">
                {post?.children?.map((pot) => {
                  return (
                    <li key={pot.id}>
                      <a href="#" className="sub-menu__link">
                        {pot.name}
                      </a>
                      <ul>
                        {pot?.children?.map((pt) => {
                          return (
                            <li key={pt.id} className="sub-menu__list2">
                              <a href="#">{pt.name}</a>
                              <div>
                                <a href="#">{pt.children}</a>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
