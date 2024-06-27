import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa6';
import FlowerBG from '../../assets/flowerbg.png'


export const HeaderContainer = styled.div`
  flex-grow: 1;
  height: 326px;
`;

export const AppBar = styled.div`
  background-color: transparent;
  box-shadow: none;
  color: ${(props) => props.theme.colors.black};
  position: absolute;
  z-index: 1;
`;

export const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px;
  min-height: 56px;
  margin-left: 7rem;
  margin-top: 9rem;
  
  @media (max-width: 600px) {
    margin-left: 2rem;
  }`

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Icon = styled(FaArrowLeft)`
  background-color: ${(props) => props.theme.colors.gray100};
  border-radius: 50%;
  padding: 5px;
  width: 36px;
  height: 36px;
  color: white;
  margin-bottom: 4rem;
`;

export const Title = styled.h6`
font-family: ${(props) => props.theme.font.small};
  margin: 0;
  flex-grow: 1;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;

export const ImageContainer = styled.div`
width: 100%;
height: 326px;
  position: fixed;
  background-image: url(${FlowerBG});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
z-index: -1;
  @media (max-width: 600px) {
    padding-left: 8px;
  }`

