import { ButtonSocial } from '../buttonSocial/buttonSocial'
import { Container, ButtonCreate, TextOptions, OptionsLogin, TextCreateAccount } from './styledFooter'
import Facebook from '../../assets/facebook.png'
import Google from '../../assets/google.png'
import Apple from '../../assets/apple.png'
import Twitter from '../../assets/twitter.png'

interface FooterProps{
    text: string
    textLink: string
    path: string
}

export function Footer({text, textLink, path}: FooterProps) {

    return (
        <Container>
            <TextOptions>
                Or Continue with Social Accounts
            </TextOptions>
            <OptionsLogin>
                <ButtonSocial 
               icon={Google}
                />
                <ButtonSocial 
               icon={Facebook}
                />
                <ButtonSocial 
                 icon={Apple}
                />
                <ButtonSocial 
                icon={Twitter}
                />
                
            </OptionsLogin>

            <TextCreateAccount>
                {text} <ButtonCreate href={path}>{textLink}</ButtonCreate>
            </TextCreateAccount>

        </Container>

    )
}