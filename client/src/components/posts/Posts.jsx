import React from "react";
import Post from "../post/Post";

function Posts() {
  return (
    <section className="blog__posts">
      <Post img={`https://source.unsplash.com/800x580/?blog,dog`} />
      <Post img={`https://source.unsplash.com/800x580/?blog,water`} />
      <Post img={`https://source.unsplash.com/800x580/?blog,cookie`} />
      <Post img={`https://source.unsplash.com/800x580/?blog,time`} />
      <Post img={`https://source.unsplash.com/800x580/?blog,Girl`} />
      <Post img={`https://source.unsplash.com/800x580/?blog,hot`} />
    </section>
  );
}

export default Posts;
