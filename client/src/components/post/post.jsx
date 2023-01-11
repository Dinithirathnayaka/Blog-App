import React from "react";
import "./post.css";

export default function post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://w0.peakpx.com/wallpaper/39/757/HD-wallpaper-mountain-landscape-pretty-grass-beautiful-snowy-mountain-nice-green-wildflowers-peaks-flowers-hills-lovely-natue-greenery-delight-sky-freshness-slope-meadow-landscape.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, facere?
        Voluptas ex doloremque temporibus? At dolore, aperiam debitis sed
        eveniet tempora laudantium odit quis, nesciunt voluptatibus laborum
        similique corrupti eos aliquid ad iusto?
      </p>
    </div>
  );
}
