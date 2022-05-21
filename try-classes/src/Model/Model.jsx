import React from "react";
import "./Model.css";
export default function Model(props) {
  const {glassesChoiced} = props;
  
  return (
    <div className="container Model">
      <div className="row justify-content-between">
        <div className="col-sm-4 col-lg-4 col-12">
          <img
            src="/img/model.jpg"
            alt="/img/model.jpg"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-sm-4 col-lg-4 col-12 ModelGlasses">
          <img
            src="/img/model.jpg"
            alt="/img/model.jpg"
            style={{ width: "100%" }}
          />
          <div className="wearGlasses">
            <img
              src={glassesChoiced.img}
              alt={glassesChoiced.img}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
