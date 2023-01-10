import React, { useState } from "react";
import januar from "../img/januar.jpg";
import februar from "../img/februar.jpg";
import mart from "../img/mart.jpg";
import april from "../img/april.jpg";
import maj from "../img/maj.jpg";
import jun from "../img/jun.jpg";
import jul from "../img/jul.jpg";
import avgust from "../img/avgust.jpg";
import septembar from "../img/septembar.jpg";
import oktobar from "../img/oktobar.jpg";
import novembar from "../img/novembar.jpg";
import decembar from "../img/decembar.jpg";
import jakovljevo from "../img/jakovljevo.jpg";

import "./gallery.css";

const Gallery = () => {
  let data = [
    { id: 0, imgSrc: jakovljevo },
    { id: 1, imgSrc: januar },
    { id: 2, imgSrc: februar },
    { id: 3, imgSrc: mart },
    { id: 4, imgSrc: april },
    { id: 5, imgSrc: maj },
    { id: 6, imgSrc: jun },
    { id: 7, imgSrc: jul },
    { id: 8, imgSrc: avgust },
    { id: 9, imgSrc: septembar },
    { id: 10, imgSrc: oktobar },
    { id: 11, imgSrc: novembar },
    { id: 12, imgSrc: decembar },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");

  const getImg = (imgSrc) => {
    console.log(imgSrc);
    setTempimgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="Jakovljevo" />
        {/* <div
          className="closebtn"
          onClick={() => {
            setModel(false);
          }}
        >
          <span>X</span>
        </div> */}
        <button
          className="closebtn"
          onClick={() => {
            setModel(false);
          }}
        >
          X
        </button>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img
                src={item.imgSrc}
                alt="Jakovljevo"
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
