import React from "react";

function FormSteps() {
  const steps = [
    { step: "details", stepName: "Customer Details" },
    { step: "payment", stepName: "Payment" },
    { step: "summary", stepName: "Summary" },
  ];

  return (
    <div className="form-steps">
      {steps.map((step, i) => {
        return (
          <div className="step">
            <span>i</span>
            <span className="label">{step.stepName}</span>
          </div>
        );
      })}
      <div className="indicator"></div>
    </div>
  );
}

export default FormSteps;
