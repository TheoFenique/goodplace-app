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
                    <label htmlFor="prenom">First Name</label>
                    <Field name="prenom" type="text" />
                    <ErrorMessage name="prenom" />
                </div>
                <div>
                    <label htmlFor="nom">Last Name</label>
                    <Field name="nom" type="text" />
                    <ErrorMessage name="nom" />
                </div>
                <div>
                    <label htmlFor="email">Last Name</label>
                    <Field name="email" type="text" />
                    <ErrorMessage name="email" />
                </div>
                <div>
                    <label htmlFor="password">Last Name</label>
                    <Field name="password" type="text" />
                    <ErrorMessage name="password" />
                </div>
                <div>
                    <label htmlFor="confirmpassword">Last Name</label>
                    <Field name="confirmpassword" type="text" />
                    <ErrorMessage name="confirmpassword" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default FormikConnexion