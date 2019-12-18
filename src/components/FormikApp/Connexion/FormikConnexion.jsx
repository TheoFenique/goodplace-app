import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';


const FormikConnexion = () => {
    return (
        <Formik
            initialValues={{ id: '', password: '', email: '' }}
            validationSchema={Yup.object({
                id: Yup.string()
                    .required('Obligatoire'),
                password: Yup.string()
                    .required('Obligatoire'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <div>
                    <label htmlFor="id">First Name</label>
                    <Field name="id" type="text" />
                    <ErrorMessage name="id" />
                </div>
                <div>
                    <label htmlFor="password">Last Name</label>
                    <Field name="password" type="text" />
                    <ErrorMessage name="password" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default FormikConnexion