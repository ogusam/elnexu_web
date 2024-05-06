import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  middleName: Yup.string(),
  lastName: Yup.string().required('Required'),
  dob: Yup.date().required('Required'),
  phoneNumber: Yup.string().required('Required'),
  contactAddress: Yup.string().required('Required')
});

const Step1 = ({ next, formData, setFormData }) => {
  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: values => {
      setFormData(values);
      next();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" onChange={formik.handleChange} value={formik.values.firstName}/>
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="middleName">Middle Name</label>
      <input id="middleName" name="middleName" type="text" onChange={formik.handleChange} value={formik.values.middleName}/>

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" name="lastName" type="text" onChange={formik.handleChange} value={formik.values.lastName}/>
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      <label htmlFor="dob">Date of Birth</label>
      <input id="dob" name="dob" type="date" onChange={formik.handleChange} value={formik.values.dob}/>
      {formik.errors.dob ? <div>{formik.errors.dob}</div> : null}

      <label htmlFor="phoneNumber">Phone Number</label>
      <input id="phoneNumber" name="phoneNumber" type="text" onChange={formik.handleChange} value={formik.values.phoneNumber}/>
      {formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}

      <label htmlFor="contactAddress">Contact Address</label>
      <input id="contactAddress" name="contactAddress" type="text" onChange={formik.handleChange} value={formik.values.contactAddress}/>
      {formik.errors.contactAddress ? <div>{formik.errors.contactAddress}</div> : null}

      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;
