import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

// import { recievedCodeSchema } from '../signup.schema'; // it was exported as object.

function GeneralMarriage () {
    // const [shouldRedirect, setShouldRedirect] = useState(false);

    // const navigate = useNavigate();
  
    // useEffect(() => {
    //     if (shouldRedirect) {
    //         navigate('/user/home');
    //     }
    // });

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

                    // validationSchema={recievedCodeSchema}

                    onSubmit={(values, actions) => { // so that we gan gain access to the submitted information and send it to the backend.
                        console.log(values);
                        // setShouldRedirect(true);

                        actions.setSubmitting(false);
                    }}
                > 
                    {(values) => {
                        return (
                            <Form>
                                <div className='form-group mb-3'>
                                    <div className='row'>
                                        <div className='col-lg-2'>
                                            <label 
                                                htmlFor='first-name' className='form-label'>First Name
                                            </label>

                                            <Field type="fieldOne" className="form-control" id="fieldOne" name="fieldOne"  />
                                        </div>

                                        <div className='col-lg-2'>
                                            <label 
                                                htmlFor='first-name' className='form-label'>Last Name
                                            </label>

                                            <Field type="fieldTwo" className="form-control" id="fieldTwo" name="fieldTwo"  />
                                        </div>

                                        <div className='col-lg-2'>
                                            <label 
                                                htmlFor='first-name' className='form-label'>Email
                                            </label>

                                            <Field type="fieldThree" className="form-control" id="fieldThree" name="fieldThree"  />
                                        </div>

                                        <div className='col-lg-2'>
                                            <label 
                                                htmlFor='first-name' className='form-label'>Phone
                                            </label>
                                            <Field type="fieldFour" className="form-control" id="fieldFour" name="fieldFour"  />
                                        </div>
                                        <div className='col-lg-2'>
                                            <label 
                                                htmlFor='first-name' className='form-label'>Date of Birth
                                            </label>
                                            <Field type="fieldFour" className="form-control" id="fieldFour" name="fieldFour"  />
                                        </div>

                                        <div className='row'>
                                            <div role="group" aria-labelledby="checkbox-group">
                                                <label className='me-2 mt-2'>
                                                <Field type="checkbox" name="checked" value="One" />
                                                One
                                                </label>
                                                <label>
                                                <Field type="checkbox" name="checked" value="Two" />
                                                Two
                                                </label>

                                                <div>
                                                    <label>
                                                    <Field type="checkbox" name="checked" value="Three" />
                                                    Terms {`&`} conditions
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='invalid-feedback d-block'>
                                        <ErrorMessage name="fieldOne" />
                                        <ErrorMessage name="fieldTwo" />
                                        <ErrorMessage name="fieldThree" />
                                        <ErrorMessage name="fieldFour" />
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

export default GeneralMarriage;