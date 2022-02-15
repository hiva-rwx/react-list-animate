import React, { forwardRef } from "react";
const Item = ({ item }, ref) => {
  return (
    <div ref={ref} className="item">
      <h3 style={{display:'flex',justifyContent:'space-between'}}>
        <span>{item?.text}</span>
        <span> number for filter : {item?.num}</span>
      </h3>
    </div>
  );
};
const forward = forwardRef(Item);

export default forward;
