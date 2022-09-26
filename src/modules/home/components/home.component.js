import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { loginSchema } from '../signup.schema'; // it was exported as object.
import { Link, useNavigate } from 'react-router-dom';

function Home () {
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const navigate = useNavigate();
  
    useEffect(() => {
        if (shouldRedirect) {
            navigate('/user/home/general/marriage');
        }
    });

    return (
        <div className='row text-center'>
            <Formik //formik has many props.
                initialValues={{
                    email: "",
                    password: ""
                }} 

                // validationSchema={loginSchema}

                onSubmit={(values, actions) => { // so that we gan gain access to the submitted information and send it to the backend.
                    setShouldRedirect(true);
                    console.log(values);
                    actions.setSubmitting(false);
                }}
            > 
                {(formikprops) => {
                    return (
                        <Form className='text-center col-lg-12'>
                            <div className='row'>
                                <Dropdown className='mb-2 col-lg-2 ms-auto'>
                                    <Dropdown.Toggle variant="success react-button" id="dropdown-basic">
                                        বিয়ে
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown className='mb-2'>
                                            <Dropdown.Toggle variant="success react-button" id="dropdown-basic">
                                                বিয়ে
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <button className='dropdown-button' type='submit' >সাধারন বিয়ে</button>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown className='mb-2'>
                                            <Dropdown.Toggle variant="success react-button" id="dropdown-basic">
                                                বৈবাহিক সনদ
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <button className='dropdown-button' type='submit' href="#/action-1">Action</button>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown className='mb-2'>
                                            <Dropdown.Toggle variant="success react-button" id="dropdown-basic">
                                                বৈবাহিক অবস্থা যাচাই 
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <button className='dropdown-button' type='submit' href="#/action-1">Action</button>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown className='mb-2'>
                                            <Dropdown.Toggle variant="success react-button" id="dropdown-basic">
                                                তালাক
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <button className='dropdown-button' type='submit' href="#/action-1">Action</button>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className='mb-2 col-lg-2'>
                                    <Dropdown.Toggle variant="success react-button" id="dropdown-basic">
                                        হোটেল 
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown className='mb-2'>
                                            <Dropdown.Toggle variant="success react-button" id="dropdown-basic">
                                                বিয়ে
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <button className='dropdown-button' type='submit' href="#/action-1">Action</button>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className='mb-2 col-lg-2 me-auto'>
                                    <Dropdown.Toggle variant="success react-button" id="dropdown-basic">
                                        ব্যাংক
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown className='mb-2'>
                                            <Dropdown.Toggle variant="success react-button" id="dropdown-basic">
                                                বিয়ে
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <button className='dropdown-button' type='submit' href="#/action-1">Action</button>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default Home;