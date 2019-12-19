import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import * as Yup from 'yup';

const StyledFormikConnexion = styled.div`
padding-left:20px;
padding-right: 20px;
a{
        width:100%;
        margin-top:5vh;
    }
    .forgotpassword{
        text-decoration: none;
        color: #3498DB;
        font-size:14px;
    }
textarea:focus, input:focus{
    outline: none;
    border: 1px solid #3498DB;
}
label{
    font-size:14px;
    color:#333333;
    margin-top:2vh;
    margin-bottom:1vh;
    display:flex;
    @media screen and (max-height:600px ) {
            font-size:12px;
        } 
}
input{
    border: 1px solid #CACACA;
    border-radius: 10px;
    height:6vh;
    width: calc(100% - 10px);
    padding-left:10px;
    font-size:14px;
    ::placeholder{
        font-size:12px;
    }
}

.checkbox{
    width:0;
}
`


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
            <StyledFormikConnexion>
            <Form>
                <div>
                    <label htmlFor="id">Identifiant ou email</label>
                    <Field name="id" type="text" />
                    <ErrorMessage name="id" />
                </div>
                <div style={{marginBottom: "2vh"}}>
                    <label htmlFor="password">Mot de passe</label>
                    <Field name="password" type="text" />
                    <ErrorMessage name="password" />
                </div>
                <a className="forgotpassword">Mot de passe oublié ?</a>
                <Button type="submit" link="test" theme={false} >Confirmer</Button>
            </Form>
            </StyledFormikConnexion>
        </Formik>

    );
};

export default FormikConnexion