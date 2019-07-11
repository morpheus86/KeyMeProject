import React from "react";

const CheckOut = ({ total }) => {
  let isEnabled = total && total > 0;
  let styling = total > 0 ? "btn_active" : "btn";
  let checkOutStyle = total > 0 ? "checkout-btn" : "checkout-inactive";
  return (
    <div className={`container ${styling}`}>
      <button disabled={!isEnabled} className={checkOutStyle}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CheckOut;
