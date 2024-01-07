import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    right: -300px;
  }
  to {
    right: 0;
  }
`;

const slideOut = keyframes`
  from {
    right: 0;
  }
  to {
    right: -300px;
  }
`;

export const ContainerNavBar = styled.nav`
  width: 320px;
  position: fixed;
  top: 0;
  height: 100vh;
  color: #6FB3D2;
  display: flex;
  font-size: 42px;
  align-items: center;
  justify-content: center;
  background-color: white;
  -webkit-box-shadow: -2px 0px 34px -3px rgba(0,0,0,0.75);
-moz-box-shadow: -2px 0px 34px -3px rgba(0,0,0,0.75);
box-shadow: -2px 0px 34px -3px rgba(0,0,0,0.75);
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.5s ease;
  @media (max-width: 750px) {
    width: 100vw;
  }
`;

export const UlBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  gap: 35px;

  @media (max-width: 750px) {
    // Adicione estilos para telas menores se necessário
  }
`;

export const LiBox = styled.li`
  cursor: pointer;
  &:hover {
    border-bottom: 8px solid #FEDC8D;
  }

  @media (max-width: 750px) {
    // Adicione estilos para telas menores se necessário
  }
`;
