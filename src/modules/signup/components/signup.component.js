import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../signup.schema'; // it was exported as object.
import { Link } from 'react-router-dom';

function Signup () {
  return (
    <div className='container ' style={{marginTop: "12%"}} >
        <Formik //formik has many props.
            // initialValues={{
            //     email: "",
            //     password: ""
            // }} 

            validationSchema={loginSchema}

            onSubmit={(values, actions) => { // so that we gan gain access to the submitted information and send it to the backend.
                console.log(values);
                actions.setSubmitting(false);
            }}
        > 
            {(formikprops) => {
                return (
                    <Form className='text-center'>
                        <Link to={'/user/mobile/registration'} type="submit" className="btn btn-primary">CONTINUE WITH MOBILE NUMBER</Link>
                    </Form>
                )
            }}
        </Formik>
    </div>
  )
}

export default Signup;