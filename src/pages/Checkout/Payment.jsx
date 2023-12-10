import {
  faCreditCard,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import InputField from "../../components/ui/InputField";

function Payment({orderReady, setOrderReady}) {
  const [selected, setSelected] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberValid, setCardNumberValid] = useState(true);
  const [expiryYear, setExpiryYear] = useState("");
  const [expiryYearValid, setExpiryYearValid] = useState(true);
  const [expiryMonthValid, setExpiryMonthValid] = useState(true);
  const [expiryMonth, setExpiryMonth] = useState("");
  const [cvv, setCvv] = useState("");
  const [cvvValid, setCvvValid] = useState(true);

  const optionChange = (event) => {
    setSelected(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
    setCardNumberValid(/^\d{16}$/.test(event.target.value));
  };

  const handleExpiryMonthChange = (event) => {
    setExpiryMonth(event.target.value);
    setExpiryMonthValid(
      /^\d{1,2}$/.test(event.target.value) &&  parseInt(event.target.value) < 13
    );
  };

  const handleExpiryYearChange = (event) => {
    setExpiryYear(event.target.value);
    setExpiryYearValid( /^\d{4}$/.test(event.target.value) && parseInt(event.target.value) > 2023
    );
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
    setCvvValid(/^\d{3}$/.test(event.target.value));
  };

  useEffect(()=> {

    if(orderReady)
      setOrderReady(false)

    if(cardNumberValid &  expiryMonthValid & expiryYearValid & cvvValid){
      setOrderReady(true)
    }
  })

  return (
    <div className="payment-details">
      <h3 className="title">Choose Payment Method</h3>
      <form>
        <label>
          <input
            type="radio"
            name="method"
            value="credit-card"
            onChange={optionChange}
            defaultChecked
          />
          <FontAwesomeIcon icon={faCreditCard} />
          Card
        </label>

        <label>
          <input
            type="radio"
            name="method"
            value="pay-on-delivery"
            checked={selected === "pay-on-delivery"}
            onChange={optionChange}
          />
          <FontAwesomeIcon icon={faHandHoldingDollar} />
          Pay on deliery
        </label>
      </form>

      {selected === "pay-on-delivery" ? (
        ''
      ) : (
        <div className="card-details">
          <form>
            <InputField
              type="text"
              field='card-number'
              label="Card Number"
              value={cardNumber}
              onChange={handleCardNumberChange}
              isValid={cardNumberValid}
              errorMessage="Invalid card number. Please enter 16 digits."
            />

            <InputField
              type="text"
              field='expiry-month'
              label="Expiry Month"
              value={expiryMonth}
              onChange={handleExpiryMonthChange}
              isValid={expiryMonthValid}
              errorMessage="Invalid expiry month. Please enter a valid month."
            />

            <InputField
              type="text"
              field='expiry-year'
              label="Expiry Year"
              value={expiryYear}
              onChange={handleExpiryYearChange}
              isValid={expiryYearValid}
              errorMessage="Invalid expiry year. Please enter a valid year."
            />

            <InputField
              type="text"
              field='cvv'
              label="CVV"
              value={cvv}
              onChange={handleCvvChange}
              isValid={cvvValid}
              errorMessage="Invalid CVV. Please enter 3 digits."
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default Payment;
