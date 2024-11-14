import React, { useState } from "react";
import { Formik } from "formik";
import { View, Text, TextInput,Button,TouchableOpacity, KeyboardAvoidingView, ScrollView} from "react-native";

import { nanoid } from "nanoid";
import { validationShema } from "../helpers/validationForm";
import { createAccount } from "../api/createAccount";

import signinStyle from "./styles/signin.style";
import loginStyle from "./styles/login.style";
import { styleApp } from "./styles/style";

const initialVal = {
    u_name: '',u_password : '',
    u_nro_doc: '', u_real_name : '', u_real_ape: '',
    u_nro: '', u_email : ''
}

const InputGroupForm = ({title, style, error,...props}) => {
    return (
        <View style={style.inputContainer}>
            <Text style={style.label}>{title}</Text>
            <TextInput
                style={style.input}
                {...props}
            />
            {
                error && (
                    <Text style={style.errorText}>{error}</Text>
                )
            }            
        </View>
    );
}

const SignIn = () => {
    const [result, setResult] = useState(null)

    const handleSubmitSignIn = async (values) => {
        const {} = values
        const data = [values]
        //setResult(data)
        const rs = await createAccount(values)
        setResult(rs)
    }
    
    return(
        <View style={styleApp.container}>
            <Text style={loginStyle.encabesado}>Create Account</Text>
            <Formik
                initialValues={initialVal}
                validationSchema={validationShema}
                onSubmit={handleSubmitSignIn}          
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <KeyboardAvoidingView
                    style={{flex:1, width:'100%'}}
                >
                    <ScrollView
                        contentContainerStyle = {{flexGrow : 1}}
                        keyboardShouldPersistTaps = 'handled'
                        showsVerticalScrollIndicator = {false}
                    >
                        
                        <View style={signinStyle.formContainer}>
                            <InputGroupForm 
                                title='nombre de usuario'
                                error = {errors.u_name ? errors.u_name : null}
                                style={signinStyle}
                                onChangeText={handleChange('u_name')}
                                onBlur={handleBlur('u_name')}
                                value={values.u_name}
                            />      
                            <InputGroupForm 
                                title='Contraseña'
                                error = {errors.u_password ? errors.u_password : null}
                                style={signinStyle}
                                onChangeText={handleChange('u_password')}
                                onBlur={handleBlur('u_password')}
                                value={values.u_password}
                            /> 
                            <InputGroupForm 
                                title='Numero de documento'
                                error = {errors.u_nro_doc ? errors.u_nro_doc : null}
                                style={signinStyle}
                                onChangeText={handleChange('u_nro_doc')}
                                onBlur={handleBlur('u_nro_doc')}
                                value={values.u_nro_doc}
                            />    
                            <InputGroupForm 
                                title='Nombre personal'
                                error = {errors.u_real_name ? errors.u_real_name : null}
                                style={signinStyle}
                                onChangeText={handleChange('u_real_name')}
                                onBlur={handleBlur('u_real_name')}
                                value={values.u_real_name}
                            />   
                            <InputGroupForm 
                                title='Apellidos'
                                error = {errors.u_real_ape ? errors.u_real_ape : null}
                                style={signinStyle}
                                onChangeText={handleChange('u_real_ape')}
                                onBlur={handleBlur('u_real_ape')}
                                value={values.u_real_ape}
                            />    
                            <InputGroupForm 
                                title='Numero Telefonico'
                                error = {errors.u_nro ? errors.u_nro : null}
                                style={signinStyle}
                                onChangeText={handleChange('u_nro')}
                                onBlur={handleBlur('u_nro')}
                                value={values.u_nro}
                            />  
                            <InputGroupForm 
                                title='E-mail'
                                error = {errors.u_email ? errors.u_email : null}
                                style={signinStyle}
                                onChangeText={handleChange('u_email')}
                                onBlur={handleBlur('u_email')}
                                value={values.u_email}
                            />     
                            {
                                result && (
                                    <Text>{result.msg}</Text>
                                )
                            }                                           
                            <TouchableOpacity style={loginStyle.button} onPress={handleSubmit}>
                                <Text style={loginStyle.buttonText}>Crear Cuenta</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </ScrollView>
                </KeyboardAvoidingView>      
                )}                                       
            </Formik>
        </View>
    );
}

export default SignIn