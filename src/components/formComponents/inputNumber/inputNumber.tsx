import { Container,ErrorMensagem,ContainerInput, Title, ContainerIcon, Icon, ContainerItens, Input } from './styledInputNumber'

interface InputProps {
    title: string,
    placeholder: string,
    type?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error?: string
    name?: string,
    value?: string
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}


export function InputNumber({ title, name, placeholder, onChange, onBlur, type, error, value }: InputProps) {

    return (
<Container>
        <ContainerInput>
            <ContainerIcon>
                <Icon />
            </ContainerIcon>
            <ContainerItens>
                <Title>{title}</Title>
                <Input
                    onBlur={onBlur}
                    placeholder={placeholder}
                    onChange={onChange}
                    type={type ? type : 'text'}
                    value={value}
                    name={name}
                />
            </ContainerItens>


        </ContainerInput>
<ErrorMensagem>
{error && <div style={{ color: '#BC8363', fontFamily: 'Tenor Sans'}}>{error}</div>}
</ErrorMensagem>
</Container>
    )
    
}