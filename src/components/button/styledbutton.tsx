
import styled from 'styled-components';



export const Container = styled.button`

    width: 311px;
    height: 3rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    
    background-color: ${(props) => props.theme.colors.brow};
  border: 0px;
  margin-top: 20px;
  margin-bottom: 20px;


  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.gray100};
  }
    
 
`;

export const Title = styled.p`
font-size: 13px;
font-family: ${(props) => props.theme.font.small};
color: #FFFF
`;