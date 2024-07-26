import React, { useContext, useState } from "react";
import Cart from "../../components/Cart/Cart";
import DetailsForm from "./DetailsForm";
import Payment from "./Payment";
import Loader from "../../components/ui/Loader";
import { useNavigate } from "react-router-dom";
import CartContext from "../../contexts/CartContext";

function Checkout() {
  const [detailsReady, setDetailsReady] = useState(false);
  const [paymentReady, setPaymentReady] = useState(false);
  const [validating, setValidating] = useState(false);
  const {setItems} = useContext(CartContext)

  const navigate = useNavigate();

  const validate = () => {
    setValidating(true);

    if (paymentReady & detailsReady) {
      setTimeout(() => {
        setValidating(false);
        setItems([])
        navigate("/");
      }, 4000);
    } else {
      setValidating(false);
    }
  };

  return (
    <div className="checkout">
      <div className="col-1">
        <Cart onpage={false} />
      </div>
      <div className="col-2">
        <DetailsForm
          orderReady={detailsReady}
          setOrderReady={setDetailsReady}
        />
        <Payment orderReady={paymentReady} setOrderReady={setPaymentReady} />
        <button type="submit" onClick={validate} className="btn submit">
          Proceed
        </button>
      </div>
      {validating && <Loader message={"Validating Payment"} />}
    </div>
  );
}

export default Checkout;
