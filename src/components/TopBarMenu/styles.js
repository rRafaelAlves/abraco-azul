import styled from "styled-components";

export const ContainerTopBar = styled.nav`
    width: 50%;
    height: 100px;
    color: white;
    display: block;
    position: absolute;
    margin-top: 20px;
    @media (max-width: 750px) {
        display: none;
      }
`


export const UlBox = styled.ul`
    width: 100%;
    display: flex;
    font-size: 36px;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    gap: 30px;

    @media (max-width: 750px) {
        
      }
`

export const LiBox = styled.li`
    cursor: pointer;
    &:hover {
        border-bottom: 8px solid #FEDC8D; /* Adicione a cor desejada para a borda amarelada */
       
    }
    @media (max-width: 750px) {
        
      }
`

