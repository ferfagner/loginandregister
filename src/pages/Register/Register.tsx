import { InputText } from "../../components/formComponents/inputText/inputText";
import Header from "../../components/header/header";
import { Container,Forget, ContainerPage, Subtitle } from "./styledRegister";
import { useFormik } from 'formik';
import {schema} from './schema';
import { InputPassword } from "../../components/formComponents/InputPassword/inputPassword";
import Button from "../../components/button/button";
import { Footer } from "../../components/footer/footer";
import { InputNumber } from "../../components/formComponents/inputNumber/inputNumber";



export function Register() {

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          number: ''
         
        },
        validationSchema: schema,
        onSubmit: async () => {
         
      }});

    return (
        <Container>
            <Header title='Create Account' />
            <ContainerPage>
                <Subtitle>Enter your information below or continue <br></br>
                with social media account</Subtitle>
                <InputText 
                title="Email Address"
                placeholder="Your email address"
                name="email"
                onChange={formik.handleChange}
                error={formik.errors.email}
                value={formik.values.email}
                />
                 <InputNumber
                title="Mobile Number"
                type="text"
                placeholder="Your mobile number"
                name="number"
                onChange={formik.handleChange}
                error={formik.errors.number}
                value={formik.values.number}
                />
                <InputPassword
                title="Password"
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={formik.handleChange}
                error={formik.errors.password}
                value={formik.values.password}
                />
                
                <Button 
                type="button"
                title='Create Account'
                />
                <Forget>
                Forgot Password
                </Forget>
            </ContainerPage>

            <Footer
            path="/"
            text="Already have an account?"
            textLink="Login Now"
            />

        </Container>
    )
}