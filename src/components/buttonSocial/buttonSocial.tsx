import {Container} from './styledButtonSocial'



interface ButtonSocialProps {
    icon?: string;
}

export function ButtonSocial({ icon }: ButtonSocialProps){

    return(
    <Container>
    <img src={icon} typeof='svg'/>
    
    </Container>
    
    )
}