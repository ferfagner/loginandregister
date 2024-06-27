import { ButtonSocial } from '../buttonSocial/buttonSocial'
import { Container, ButtonCreate, TextOptions, OptionsLogin, TextCreateAccount } from './styledFooter'
import GoogleSVG from '../../assets/google.svg'
import FacebookSVG from '../../assets/facebook.svg'
import AppleSVG from '../../assets/apple.svg'
import TwitterSVG from '../../assets/twitter.svg'

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
                icon={GoogleSVG}
                />
                <ButtonSocial 
                icon={FacebookSVG}
                />
                <ButtonSocial 
                icon={AppleSVG}
                />
                <ButtonSocial 
                icon={TwitterSVG}
                />
                
            </OptionsLogin>

            <TextCreateAccount>
                {text} <ButtonCreate href={path}>{textLink}</ButtonCreate>
            </TextCreateAccount>

        </Container>

    )
}