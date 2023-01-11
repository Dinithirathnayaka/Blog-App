import React from "react";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img
          className="headerImg"
          src="https://media.istockphoto.com/id/537897636/vector/spring-grass.jpg?s=612x612&w=0&k=20&c=GPfgUcq6X5-NZDBSTlkQ9wWFlLSLoHjdpEh8eWSdNlI="
          alt=""
        />
      </div>
    </>
  );
}
