import * as yup from "yup";


export  const schema = yup.object().shape({
  
    email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
    number: yup.string()
    .matches(/^[0-9]{11}$/, 'Número de telefone inválido') // ajuste conforme necessário
    .required('O número de telefone é obrigatório'),
  });