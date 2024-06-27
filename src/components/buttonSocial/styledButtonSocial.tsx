import styled from "styled-components";

export const Container = styled.button`

    width: 64px;
    height: 68px;
    margin-bottom: 1rem;
    border-radius: 5px;
    margin-left: 15px;
    background-color: #FFF;
  border: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: -5px 6px 8px 1px ${(props) => props.theme.colors.gray50};


  &:hover {
    cursor: pointer;
   
  }
    
 
`;