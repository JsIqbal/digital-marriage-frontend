import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { recievedCodeSchema } from '../signup.schema'; // it was exported as object.

function Confirmation () {
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const navigate = useNavigate();
  
    useEffect(() => {
        if (shouldRedirect) {
            navigate('/user/mobile/registration/welcome/profile');
        }
    });

    return (
        <div className='row mt-4'>
            <div className='col-lg-12'>
                <div className='registration-header'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label htmlFor='fieldOne'>
                                <h1>স্বাগতম</h1>
                                <p>+৮৮০১-৪০৩২২৯৪৭৯ নম্বরে পাঠানো কোডটি প্রবেশ করুন।</p> 
                            </label>
                        </div>
                    </div>
                </div>
                <Formik //formik has many props.
                    initialValues={{
                        fieldOne: "",
                        fieldTwo: "",
                        fieldThree: "",
                        fieldFour: ""
                    }} 

                    validationSchema={recievedCodeSchema}

                    onSubmit={(values, actions) => { // so that we gan gain access to the submitted information and send it to the backend.
                        console.log(values);
                        setShouldRedirect(true);

                        actions.setSubmitting(false);
                    }}
                > 
                    {(formikprops) => {
                        return (
                            <Form>
                                <div className='form-group mb-3'>
                                    <div className='row'>
                                        <div className='col-lg-1'>
                                            <Field type="fieldOne" className="form-control" id="fieldOne" name="fieldOne"  />
                                        </div>

                                        <div className='col-lg-1'>
                                            <Field type="fieldTwo" className="form-control" id="fieldTwo" name="fieldTwo"  />
                                        </div>

                                        <div className='col-lg-1'>
                                            <Field type="fieldThree" className="form-control" id="fieldThree" name="fieldThree"  />
                                        </div>

                                        <div className='col-lg-1'>
                                            <Field type="fieldFour" className="form-control" id="fieldFour" name="fieldFour"  />
                                        </div>
                                    </div>
                                    <div className='invalid-feedback d-block'>
                                        <ErrorMessage name="fieldOne" />
                                        <ErrorMessage name="fieldTwo" />
                                        <ErrorMessage name="fieldThree" />
                                        <ErrorMessage name="fieldFour" />
                                    </div>
                                </div>
                                <div className='resend-request'>
                                    <span>
                                        <p>Didn't recieved the code? 
                                            <Link>Resend</Link>
                                        </p>
                                    </span>
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

export default Confirmation;