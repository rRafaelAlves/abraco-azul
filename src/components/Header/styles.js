import styled from "styled-components";

export const ContainerHeader = styled.header`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Nunito Sans';
    align-items: center;
    background-color: #6FB3D2;
    overflow: hidden;

    @media (max-width: 750px) {
        height: 80vh;
      }
`

export const Img = styled.img`
    width: 500px;
    border-radius: 22%;
    background-color: transparent;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 750px) {
        width: 74%;
        border-radius: 1%;
      }
`

export const MenuIconBox = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Logo = styled.img`
     @media (max-width: 750px) {
        width: 120px;
        border-radius: 10px;
      }
`

export const Slug = styled.h1`
    color: white;
    font-size: 92px;
    text-align: center;

    @media (max-width: 750px) {
        font-size: 46px;
         margin-top: 20px;
      }
`

export const DivContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 50px;

    @media (max-width: 750px) {
        flex-direction: column;
      }
`

export const TextContent = styled.p`
    color: white;
    text-align: center;
    font-size: 44px;
    height: 80%;
    width: 40%;

    @media (max-width: 750px) {
      font-size: 26px;
      width: 100%;
      }

`