import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Posts from "../../components/posts/Posts";

function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Posts />
      </main>
      <Footer />
    </>
  );
}

export default Home;
