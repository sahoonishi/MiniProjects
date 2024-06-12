import React from "react";
import "./App.css";

const Caard = ({ sData }) => {
  return sData.map((obj) => (
    
    <div className="card" key={obj.name}>
      <div className="width">
        <img src={obj.image} alt="" className="image" />
        <h1>Name: {obj.name}</h1>
        <span>
          <a href={obj.link}>
            <button className="btn">WATCH NOW</button>
          </a>
        </span>
      </div>
    </div>
  ));
};

export default Caard;
