import { InputText } from "../../components/formComponents/inputText/inputText";
import Header from "../../components/header/header";
import { Container,Forget, ContainerPage, Subtitle } from "./styledLogin";
import { useFormik } from 'formik';
import {schema} from './schema';
import { InputPassword } from "../../components/formComponents/InputPassword/inputPassword";
import Button from "../../components/button/button";
import { Footer } from "../../components/footer/footer";



export function Login() {

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
         
        },
        validationSchema: schema,
        onSubmit: async (values) => {
         
      }});

    return (
        <Container>
            <Header title='Login' />
            <ContainerPage>
                <Subtitle>Welcome back!<br></br>
                    Please login to continue</Subtitle>
                <InputText 
                title="Email Address"
                placeholder="Your email address"
                name="email"
                onChange={formik.handleChange}
                error={formik.errors.email}
                value={formik.values.email}
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
                title='Login'
                />
                <Forget>
                Forgot Password
                </Forget>
            </ContainerPage>

            <Footer
            path="/register"
            text="Or Continue with Social Accounts"
            textLink="Create Now"
            />

        </Container>
    )
}