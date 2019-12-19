import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

const StyledFormikConnexion = styled.div`
padding-left:20px;
padding-right: 20px;
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
    width:100%;
    padding-left:10px;
    font-size:14px;
    ::placeholder{
        font-size:12px;
    }
}

.checkbox{
    width:0;
}

.firstcheckbox, .secondcheckbox{
    display:flex;
    align-items:center;
    height:30px;

span{
    font-size:12px;
    color:#333333;
    margin-left:5px;
}
}

.firstcheckbox{
    margin-top:2vh;
}



/* input::placeholder {
  color: red;
  margin-left:30px;
} */

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
                    <label htmlFor="nom">Nom</label>
                    <Field placeholder="Nom" autocomplete="off" name="nom" type="text" />
                    <ErrorMessage name="nom" />
                </div>
                <div>
                    <label htmlFor="prenom">Prénom</label>
                    <Field placeholder="Prénom" name="prenom" type="text" />
                    <ErrorMessage name="prenom" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field placeholder="exemple@gmail.com" name="email" type="text" />
                    <ErrorMessage name="email" />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <Field placeholder="Mot de passe" name="password" type="text" />
                    <ErrorMessage name="password" />
                </div>
                <div>
                    <label htmlFor="confirmpassword">Confirmer le mot de passe</label>
                    <Field placeholder="Mot de passe" name="confirmpassword" type="text" />
                    <ErrorMessage name="confirmpassword" />
                </div>
                <div>
                    <div className="firstcheckbox">
                    <Field className="checkbox" type="checkbox" />
                    <ErrorMessage name="conditions" /> <span>En cochant cette case, vous acceptez les conditions d’utilisation de l’application</span>
                    </div>
                    <div className="secondcheckbox">
                    <Field className="checkbox" type="checkbox" />
                    <ErrorMessage name="conditions" /> <span>J’accepte de recevoir des notifications</span>
                    </div>
                    </div>
                {/* <Button link="test" theme={false} >Confirmer</Button> */}
            </Form>
            </StyledFormikConnexion>
        </Formik>
    );
};

export default FormikConnexion