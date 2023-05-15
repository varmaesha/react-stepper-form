import React, { useState } from "react";
import BorrowerCompanyInfo from "../pages/CompanyInfo/BorrowerComponyInfo";
import DirectorInfo from "../pages/DirectorInfo/DirectorInfo";
import FinancialInfo from "../pages/FinancialInfo/FinancialInfo";

const pTypeOptions = ["Own House", "Rented"];
const unitsData = ["1", "2"];

const Form = () => {
  const [step, setStep] = useState(1);
  const [propertyName, setPropertyName] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [noOfUnits, setNoOfUnits] = useState("");
  const [attachment, setAttachment] = useState();
  const [isErrorPropertyName, setIsErrorPropertyName] = useState(true);
  const [errorMessagePropertyName, setErrorMessagePropertyName] = useState("");

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    const value = e.target.value;
    if (input === "propertyName") {
      setPropertyName(value);
      if (value.length >= 1) {
        setIsErrorPropertyName(false);
      }
    } else if (input === "propertyAddress") {
      setPropertyAddress(value);
    } else if (input === "propertyFiles") {
      setAttachment(value);
    }
  };

  const addUnits = (e) => setNoOfUnits(e.target.value);

  const addPType = (e) => setPropertyType(e.target.value);

  const validatePropertyName = () => {
    if (propertyName.length < 2) {
      setIsErrorPropertyName(true);
      setErrorMessagePropertyName(
        "Type your first name (at least 2 characters)"
      );
      return false;
    }
    return true;
  };

  const submitData = (e) => {
    e.preventDefault();
    alert("Data sent");
  };


  const chosenProptType = propertyType;
  const choseUnits = noOfUnits;
  const propertyTypeOptions = pTypeOptions.map((el, index) => (
    <option key={index} value={el}>
      {el}
    </option>
  ));

  const noOfUnitsOptions = unitsData.map((el, index) => (
    <option key={index} value={el}>
      {el}
    </option>
  ));
 

  switch (step) {
    case 1:
      return (
        <BorrowerCompanyInfo
          nextStep={nextStep}
          handleChange={handleChange}
          propertyName={propertyName}
          propertyType={propertyType}
          propertyAddress={propertyAddress}
          attachment={attachment}
          setPropertyType={setPropertyType}
          noOfUnits={noOfUnits}
          validatePropertyName={validatePropertyName}
          isErrorPropertyName={isErrorPropertyName}
          errorMessagePropertyName={errorMessagePropertyName}
          propertyTypeOptions={propertyTypeOptions}
          noOfUnitsOptions={noOfUnitsOptions}
          addPType={addPType}
          addUnits={addUnits}
        />
      );
      case 2:
        return (
          <DirectorInfo
            nextStep={nextStep}
            handleChange={handleChange}
            propertyName={propertyName}
            propertyType={propertyType}
            propertyAddress={propertyAddress}
            attachment={attachment}
            setPropertyType={setPropertyType}
            noOfUnits={noOfUnits}
            validatePropertyName={validatePropertyName}
            isErrorPropertyName={isErrorPropertyName}
            errorMessagePropertyName={errorMessagePropertyName}
            propertyTypeOptions={propertyTypeOptions}
            noOfUnitsOptions={noOfUnitsOptions}
            addPType={addPType}
            addUnits={addUnits}
            prevStep={prevStep}
          />
        );
    case 3:
      return (
        <FinancialInfo
          nextStep={nextStep}
          prevStep={prevStep}
          propertyName={propertyName}
          propertyAddress={propertyAddress}
          fileSelected={attachment}
          choseUnits={choseUnits}
          chosenProptType={chosenProptType}
          submitData={submitData}
        />
      );
    default:
      return null;
  }
};
export default Form;
