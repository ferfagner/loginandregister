
import styled from 'styled-components';
import { IoMdLock } from "react-icons/io";
import { VscEye } from "react-icons/vsc";
export const ContainerInput = styled.div`
margin-top: 1.5rem;
display: flex;
flex-direction: row;
align-items: center;
border: 2px solid ${(props) => props.theme.colors.gray50};
  border-radius: 4px;
width: 311px;
height: 68px;
`;

export const Container = styled.div`
margin-top: 1.5rem;
`;

export const ContainerIconPassword = styled.button`
background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
justify-content: center;
align-items: center;
width: 90px;
`;

export const ErrorMensagem = styled.div`
margin-top: 0.5rem;
`;

export const ContainerIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
 width: 60px;
 
`;

export const ContainerItens = styled.div`

 
`;

export const Icon = styled(IoMdLock)`
  color:  ${(props) => props.theme.colors.gray100};
  width: 24px;
  height: 24px;
`;

export const IconPassword = styled(VscEye)`
  color:  ${(props) => props.theme.colors.gray100};
  width: 24px;
  height: 24px;
`;

export const Title = styled.p`
font-size: 13px;
font-family: ${(props) => props.theme.font.small};
color: ${(props) => props.theme.colors.black};
margin-bottom: 8px;
`;

export const Input = styled.input`
    width: 100%;
  border: 0px ;
  font-size: 13px;
  color: ${(props) => props.theme.colors.gray100};
  
`;