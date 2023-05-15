import React from 'react';
import '../../App.css';
import Step from '../../common/Step';

const FinancialInfo = (props) => {
  const {nextStep,
    prevStep,
    propertyName,
    choseUnits,
    chosenProptType,
    propertyAddress,
    fileSelected,
    submitData}=props;
  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handleBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className='form'>
      <div>
        <Step count={2}/>

        <div className='summary'>
          <h2 className='summary__heading'>Confirm your Property Details - I</h2>
          <div>
            <div>
              <p><span className='summary__item-title'>Property Name:</span> { propertyName }</p>
            </div>
            <div>
              <p><span className='summary__item-title'>Property Type:</span> { chosenProptType }</p>
            </div>
            <div>
              <p><span className='summary__item-title'>No Of Units:</span> { choseUnits }</p>
            </div>
          </div>
        </div>

        <div className='summary'>
          <h2 className='summary__heading'>Confirm your Property Details - II</h2>
          <div>
            <div>
              <p><span className='summary__item-title'>Property Address:</span> { propertyAddress }</p>
            </div>
            <div>
              <div><span className='summary__item-title'>Files:</span> { fileSelected }</div>
            </div>
          </div>
        </div>

        <div className='buttons'>
          <button className='buttons__button buttons__button--back' onClick={handleBack}>Back</button>
          <button className='buttons__button buttons__button--next' type='submit' onClick={handleNext}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default FinancialInfo;
