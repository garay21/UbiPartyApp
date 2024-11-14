import * as Yup from 'yup'

export const validationShema = Yup.object().shape({
    u_name: Yup.string().matches(/^[a-zA-Z0-9]*$/,"simbolos no admitidos").required('nombre de la cuenta requerida'),
    u_password : Yup.string().matches(/^[a-zA-Z0-9]*$/,"simbolos no admitidos").required('contraseña de usuario requerida.'),
    u_nro_doc: Yup.string().matches(/^[a-zA-Z0-9]*$/,"simbolos no admitidos").required('rut del usuario requerido.'), 
    u_real_name : Yup.string().matches(/^[a-zA-Z0-9]*$/,"simbolos no admitidos").required('nombre del usuario requerido.'), 
    u_real_ape: Yup.string().matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/,"simbolos no admitidos").required('apellido del usuario requerido.'),
    u_nro: Yup.string().matches(/^[0-9]*$/,"solo numeros").required('nro del telefono requerido.'), 
    u_email : Yup.string().matches(/^[a-zA-Z0-9-@.]*$/,"simbolos no admitidos").required('email requerido.')
})