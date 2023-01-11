import React from "react";
import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34vh_Y_DL7-Dm2DAlEy0EvOD6nJ1cYtUKRw&usqp=CAU"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput "
            autoFocus={true}
          />
        </div>
        <div className="writeFromGroup">
          <textarea
            placeholder="Tell Your Story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
