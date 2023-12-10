import React, { useEffect, useState } from "react";
import InputField from "../../components/ui/InputField";
import Location from "./Location";
import "./index.scss"

function DetailsForm({orderReady, setOrderReady}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameValid(event.target.value.trim() !== "");
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setPhoneValid(/^(\+234|0)[789][01]\d{8}$/.test(event.target.value));
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value));
  };

  const handleSubmit = () => {
    setNameValid(name.trim() !== "");
    setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    setPhoneValid(/^(\+234|0)[789][01]\d{8}$/.test(phone));
  };


  useEffect(()=> {

    if(orderReady)
      setOrderReady(false)

    if(nameValid &  emailValid & phoneValid){
      setOrderReady(true)
    }
  })

  return (
    <div className="details-form">
      <h3 className="title">Who's eating Today?</h3>

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit()}}>
        <div className="contact-details">
          <InputField
            field={"name"}
            label={"Full Name"}
            onChange={handleNameChange}
            type={"text"}
            value={name}
            isValid={nameValid}
            errorMessage='Name is required'
          />
          <InputField
            field={"email"}
            label={"Email"}
            onChange={handleEmailChange}
            type={"email"}
            value={email}
            isValid={emailValid}
            errorMessage='Input a valid email'
          />
          <InputField
            field={"phone"}
            label={"Phone Number"}
            onChange={handlePhoneChange}
            type={"tel"}
            value={phone}
            isValid={phoneValid}
            errorMessage='Input a valid Phone No.'
          />
        </div>
      </form>
      <Location />
    </div>
  );
}

export default DetailsForm;
