import { useState } from 'react'
import { ContainerIconPassword, IconPassword, Container, ErrorMensagem, ContainerInput, Title, ContainerIcon, Icon, ContainerItens, Input } from './styledinputPassword'

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




export function InputPassword({ title, name, placeholder, onChange, onBlur, error, value }: InputProps) {

    const [type, setType] = useState('password')

    function handleShowPassrod() {

        setType(prevType => (prevType === 'password' ? 'text' : 'password'));

    }

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
                        type={type}
                        value={value}
                        name={name}
                    />
                </ContainerItens>

                <ContainerIconPassword onClick={handleShowPassrod}>
                    <IconPassword />
                </ContainerIconPassword>


            </ContainerInput>
            <ErrorMensagem>
                {error && <div style={{ color: '#BC8363', fontFamily: 'Tenor Sans' }}>{error}</div>}
            </ErrorMensagem>
        </Container>
    )

}