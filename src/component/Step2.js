import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  bvn: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  lga: Yup.string().required('Required'),
  businessName: Yup.string().required('Required'),
  termsAndConditions: Yup.boolean().oneOf([true], 'Terms must be accepted').required('Required')
});

const Step2 = ({ back, formData, setFormData }) => {
  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: (values) => {
      setFormData(values);
      // Here, integrate with EmailJS
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', values, 'YOUR_USER_ID')
        .then((result) => {
          console.log(result.text);
          alert('Email successfully sent!');
        }, (error) => {
          console.log(error.text);
          alert('Failed to send email, please try again.');
        });
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email}/>
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="bvn">BVN</label>
      <input id="bvn" name="bvn" type="text" onChange={formik.handleChange} value={formik.values.bvn}/>
      {formik.errors.bvn ? <div>{formik.errors.bvn}</div> : null}

      <label htmlFor="state">State</label>
      <input id="state" name="state" type="text" onChange={formik.handleChange} value={formik.values.state}/>
      {formik.errors.state ? <div>{formik.errors.state}</div> : null}

      <label htmlFor="lga">L.G.A</label>
      <input id="lga" name="lga" type="text" onChange={formik.handleChange} value={formik.values.lga}/>
      {formik.errors.lga ? <div>{formik.errors.lga}</div> : null}

      <label htmlFor="businessName">Business Name</label>
      <input id="businessName" name="businessName" type="text" onChange={formik.handleChange} value={formik.values.businessName}/>
      {formik.errors.businessName ? <div>{formik.errors.businessName}</div> : null}

      <label>
        <input type="checkbox" name="termsAndConditions" checked={formik.values.termsAndConditions} onChange={formik.handleChange}/>
        Accept Terms & Conditions
      </label>
      {formik.errors.termsAndConditions ? <div>{formik.errors.termsAndConditions}</div> : null}

      <button type="button" onClick={back}>Back</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Step2;
