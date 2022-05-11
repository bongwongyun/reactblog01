import React from "react";
import { Link } from "react-router-dom";

function Post({ img }) {
  return (
    <article className="post">
      <Link to="/">
        <figure className="post__header" aria-hidden="true">
          <img src={img} alt="" />
        </figure>
        <div className="post__body">
          <span className="post__cate">category</span>
          <div className="post__title">title</div>
          <div className="post__desc">desc</div>
          <div className="post__info">
            <span className="author">봉원균</span>
            <span className="date">2022-05-11</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Post;
