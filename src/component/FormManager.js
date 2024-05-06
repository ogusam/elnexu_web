import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

const FormManager = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    phoneNumber: '',
    contactAddress: '',
    email: '',
    bvn: '',
    state: '',
    lga: '',
    businessName: '',
    termsAndConditions: false
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <Step1 next={nextStep} formData={formData} setFormData={setFormData} />;
    case 2:
      return <Step2 back={prevStep} formData={formData} setFormData={setFormData} />;
    default:
      return <div>Unknown step</div>;
  }
};

export default FormManager;
