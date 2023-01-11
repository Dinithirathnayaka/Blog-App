import React from "react";
import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34vh_Y_DL7-Dm2DAlEy0EvOD6nJ1cYtUKRw&usqp=CAU"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur .
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuther">
            Author : <b>Dinithi</b>
          </span>
          <span className="singlePostDate">1 hours ago</span>
        </div>

        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          voluptate. Temporibus aut quo veniam hic sint, corporis aliquam nisi
          laudantium delectus nulla, perspiciatis dolor est nam adipisci
          expedita quod et molestias omnis quisquam eveniet numquam, autem optio
          praesentium dolore. Consectetur iure ipsa, at aliquid, ducimus
          molestias quam corporis labore, repellat dolores consequuntur enim
          quod nam? Commodi ex harum et aliquam asperiores quisquam debitis sed
          possimus maxime nihil! Reprehenderit odit possimus, earum architecto
          dignissimos aliquid nulla nisi laboriosam labore perspiciatis? Laborum
          ipsum neque est cum perspiciatis? Eveniet pariatur velit, repellendus
          qui id atque voluptatibus aliquid, porro quisquam fugit consequuntur?
          Magni, odio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique, voluptate. Temporibus aut quo veniam hic sint, corporis
          aliquam nisi laudantium delectus nulla, perspiciatis dolor est nam
          adipisci expedita quod et molestias omnis quisquam eveniet numquam,
          autem optio praesentium dolore. Consectetur iure ipsa, at aliquid,
          ducimus molestias quam corporis labore, repellat dolores consequuntur
          enim quod nam? Commodi ex harum et aliquam asperiores quisquam debitis
          sed possimus maxime nihil! Reprehenderit odit possimus, earum
          architecto dignissimos aliquid nulla nisi laboriosam labore
          perspiciatis? Laborum ipsum neque est cum perspiciatis? Eveniet
          pariatur velit, repellendus qui id atque voluptatibus aliquid, porro
          quisquam fugit consequuntur?
        </p>
      </div>
    </div>
  );
}
