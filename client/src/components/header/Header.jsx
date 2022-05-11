import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const user = false;
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          React <em>blog</em>
        </Link>
      </h1>
      <nav className="menu">
        <h2 className="ir_so">메인 메뉴</h2>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/single">single</Link>
          </li>
          <li>
            <Link to="/write">WRITE</Link>
          </li>
          <li>
            <Link to="/setting">setting</Link>
          </li>
          {user && (
            <li>
              <a href="/">logout</a>
            </li>
          )}
        </ul>
      </nav>
      <div className="member">
        <span className="ir_so">회원 정보 영역</span>
        {user ? (
          <>
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="me"
            />
            <span>갸아악님 반가워요!</span>
          </>
        ) : (
          <>
            <ul>
              <li>
                <Link to="/register">register</Link>
              </li>
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
