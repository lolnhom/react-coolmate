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
                              <a href="#" className="type">
                                <p>{pt.name}</p>
                                <p> {pt.note}</p>
                              </a>
                              <a href="#" className="list-type">
                                <ul>
                                  {pt?.children?.map((p) => {
                                    return (
                                      <li key={p.id}>
                                        <a href="#">{p.type}</a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </a>
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
