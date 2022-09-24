import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, redirect, useNavigate } from 'react-router-dom';

import { loginSchema } from '../signup.schema'; // it was exported as object.

function MoblieRegistration () {
    // const shouldRedirect = true;

    // const navigate = useNavigate();
  
    // useEffect(() => {
    //   if (shouldRedirect) {
    //     navigate('/home');
    //   }
    // });

    return (
        <div className='row mt-4'>
            <div className='col-lg-12'>
                <div className='registration-header'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label htmlFor='mobile'>
                                <h1>মোবাইল নাম্বার</h1>
                                <p>দিয়ে সাইন আপ করুন</p>
                            </label>
                        </div>
                    </div>
                </div>
                <Formik //formik has many props.
                    initialValues={{
                        mobile: "+8801-403229479"
                    }} 

                    validationSchema={loginSchema}

                    onSubmit={(values, actions) => { // so that we gan gain access to the submitted information and send it to the backend.
                        console.log(values);
                        
                        console.log(redirect)

                        actions.setSubmitting(false);
                    }}
                > 
                    {(formikprops) => {
                        return (
                            <Form>
                                <div className='form-group mb-3'>
                                    <Field type="mobile" className="form-control" id="mobile" name="mobile"  />
                                    <div className='invalid-feedback d-block'>
                                        <ErrorMessage name="mobile" />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary my-button"
                                    >CONTINUE
                                </button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default MoblieRegistration;