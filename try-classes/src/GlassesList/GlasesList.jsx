import React from "react";

export default function GlasesList(props) {
  const { glassesList, onChoice } = props;
  return (
    <div
      className="d-flex flex-wrap"
      style={{ backgroundColor: "white", rowGap: "50px", marginTop: "100px" }}
    >
        {glassesList.map((glasses, index) => {
            return (
            <div key={glasses.id} className="" style={{ width: "16rem", padding: "2rem" }}>
                <img src={glasses.img} alt={glasses.img} style={{ width: "100%" }} onClick={()=>onChoice(glasses)} />
            </div>
            );
        })}
    </div>
  );
}
