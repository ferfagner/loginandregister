import styled from "styled-components";

export const Container = styled.div`
width: 35rem;
margin-top: 7rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 600px) {
    width: 25rem;
  }
`;

export const TextOptions = styled.p`
font-size: 13px;
font-family: ${(props) => props.theme.font.small};
color: ${(props) => props.theme.colors.gray100};
`;

export const OptionsLogin = styled.div`
`;

export const TextCreateAccount = styled.p`
font-size: 13px;
font-family: ${(props) => props.theme.font.small};
color: ${(props) => props.theme.colors.gray100};
`;

export const ButtonCreate = styled.a`
border: none;
background-color: ${(props) => props.theme.colors.withe};
font-size: 13px;
color: ${(props) => props.theme.colors.brow};

&:hover {
    cursor: pointer;
  }
    
`;

