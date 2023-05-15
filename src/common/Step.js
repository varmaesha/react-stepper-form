import React from "react";
import { Stepper } from "react-form-stepper";

const Step = ({ count }) => (
  <Stepper
    steps={[
      { label: "Borrower Company Info" },
      { label: "Director Info" },
      { label: "Financial Info" },
    ]}
    activeStep={count}
    styleConfig={{
      activeBgColor: "#2b7cff",
      activeTextColor: "#fff",
      inactiveBgColor: "#fff",
      inactiveTextColor: "#2b7cff",
      completedBgColor: "#fff",
      completedTextColor: "#2b7cff",
      size: "3em",
    }}
    className={"stepper"}
    stepClassName={"stepper__step"}
  />
);
export default Step;
