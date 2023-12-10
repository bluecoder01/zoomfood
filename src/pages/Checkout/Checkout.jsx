import React, { useState } from "react";
import Cart from "../../components/Cart/Cart";
import DetailsForm from "./DetailsForm";
import Payment from "./Payment";

function Checkout() {
  const [detailsReady, setDetailsReady] = useState(false) 
  const [paymentReady, setPaymentReady] = useState(false) 

  return (
    <div className='checkout'>
      <div className="col-1">
        <Cart onpage={false} />
      </div>
      <div className="col-2">
        <DetailsForm orderReady={detailsReady} setOrderReady={setDetailsReady}/>
        <Payment orderReady={paymentReady} setOrderReady={setPaymentReady}/>
        <button type="submit" onClick={() => console.log(detailsReady, paymentReady)} className="btn submit">Proceed</button>
      </div>
    </div>
  );
}

export default Checkout;
