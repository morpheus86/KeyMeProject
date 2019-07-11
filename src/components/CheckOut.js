import React from "react";

const CheckOut = ({ total }) => {
  let isEnabled = total && total > 0;
  let styling = total > 0 ? "btn_active" : "btn";

  return (
    <div className={`container ${styling}`}>
      <button disabled={!isEnabled} className="checkout-btn">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CheckOut;
