import React, { useState } from "react";
import "../../App.css";
import Step from "../../common/Step";

const DirectorInfo = (props) => {
  const {
    nextStep,
    prevStep,
    handleChange,
    propertyName,
    propertyAddress,
    propertyType,
    noOfUnits,
    validatePropertyName,
    isErrorPropertyName,
    errorMessagePropertyName,
    propertyTypeOptions,
    noOfUnitsOptions,
    addPType,
    addUnits,
    
  } = props;
  console.log(props);
  const continueHandler = (e) => {
    e.preventDefault();
    const isPnameValid = validatePropertyName();
    if (isPnameValid) {
      nextStep();
    }
  };
  const [selectedPropType, setSelectedPropType] = useState(propertyType);
  const [selectedNoOfUnits, setSelectedNumberOfUnits] = useState(noOfUnits);

  const handlePropertyTypeChange = (e) => {
    setSelectedPropType(e.target.value);
    addPType(e);
  };

  const handleNoOUnitsChange = (e) => {
    setSelectedNumberOfUnits(e.target.value);
    addUnits(e);
  };
  return (
    <div className="form">
      <form>
        <Step count={1} />
        <p className="formTitle">Director Info</p>

        <div className="form-group">
          <div className="form-group__element">
            <label htmlFor="property name" className="form-group__label">
              Property Name
            </label>
            <input
              type="text"
              value={propertyName}
              name="property name"
              onChange={handleChange("propertyName")}
              onBlur={validatePropertyName}
              className="form-group__input"
            />
            <p className="error">
              {isErrorPropertyName && errorMessagePropertyName}
            </p>
          </div>

          <div className="form-group__element">
            <label htmlFor="property type" className="form-group__label">
              Property Type
            </label>
            <div className="select">
              <select
                name="select"
                onChange={handlePropertyTypeChange}
                className="form-group__input"
                value={selectedPropType}
                style={{ background: "white" }}
              >
                <option value="null">Property Type</option>
                {propertyTypeOptions}
              </select>
            </div>
          </div>

          <div className="form-group__element">
            <label htmlFor="number of units" className="form-group__label">
              Number Of Units
            </label>
            <div className="select">
              <select
                name="select"
                onChange={handleNoOUnitsChange}
                className="form-group__input"
                value={selectedNoOfUnits}
                style={{ background: "white" }}
              >
                <option value="null" >Number Of Units</option>
                {noOfUnitsOptions}
              </select>
            </div>
          </div>

          <div className="form-group__element">
            <label htmlFor="Property address" className="form-group__label">
              Property Address
            </label>
            <textarea
              type="textarea"
              value={propertyAddress}
              name="property address"
              onChange={handleChange("propertyAddress")}
              className="form-group__input"
            />
          </div>

        </div>

        <div className="buttons">
          <button
            className="buttons__button buttons__button--back"
            onClick={prevStep}
          >
            Back
          </button>
          <button
            className="buttons__button buttons__button--next"
            onClick={nextStep}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default DirectorInfo;
