import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';


const FormikConnexion = () => {
    return (
        <Formik
            initialValues={{ prenom: '', nom: '', password: '', email: '', confirmpassword: '' }}
            validationSchema={Yup.object({
                prenom: Yup.string()
                    .required('Obligatoire'),
                nom: Yup.string()
                    .required('Obligatoire'),
                email: Yup.string()
                    .required('Obligatoire'),
                password: Yup.string()
                    .required('Obligatoire'),
                confirmpassword: Yup.string()
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
                    <label htmlFor="prenom">Prénom</label>
                    <Field name="prenom" type="text" />
                    <ErrorMessage name="prenom" />
                </div>
                <div>
                    <label htmlFor="nom">Nom de famille</label>
                    <Field name="nom" type="text" />
                    <ErrorMessage name="nom" />
                </div>
                <div>
                    <label htmlFor="email">Email ou identifiant</label>
                    <Field name="email" type="text" />
                    <ErrorMessage name="email" />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <Field name="password" type="text" />
                    <ErrorMessage name="password" />
                </div>
                <div>
                    <label htmlFor="confirmpassword">Confirmation du mot de passe</label>
                    <Field name="confirmpassword" type="text" />
                    <ErrorMessage name="confirmpassword" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default FormikConnexion