import styled from "styled-components";

export const Container = styled.div`


   
`;

export const ContainerPage = styled.div`


margin-left: 8rem;
  
  @media (max-width: 600px) {
    margin-left: 3rem;
  }`

export const Subtitle = styled.h3`
font-family: ${(props) => props.theme.font.small};
  margin: 0;
  flex-grow: 1;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;

   
`;

export const Forget = styled.p`
width: 311px;
display: flex;
justify-content: center;
    font-size: 13px;
    font-family: ${(props) => props.theme.font.small};
    color: ${(props) => props.theme.colors.brow};
  border: 0;


  &:hover {
    cursor: pointer;
   
  }
    
 
`;