import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
function Login(){
    return<>
        <div className="mt-5" style={{marginLeft:"40%"}}>
        <h1>Login Page</h1>
            <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                <div className="Container">
                    <div className="form-group">
                        <label for="email"><b>Email:</b></label><br/>
                        <Field  type="email"  name="email"  />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div className="form-group">
                        <label for="pass"><b>password:</b></label><br/>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </div>
                </Form>
            )}
            </Formik>
        </div>
    </>;
}
export default Login;