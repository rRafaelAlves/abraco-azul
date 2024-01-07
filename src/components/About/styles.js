import styled from "styled-components";

export const ContainerHeader = styled.header`
    width: 95%;
    display: flex;
    flex-direction: column;
    font-family: 'Nunito Sans';
    align-items: center;
    background-color: #FFF;
    color: #6FB3D2;
    border-radius: 20px 20px 20px 20px;
    overflow: hidden;

    @media (max-width: 750px) {
      margin-top: 20px;
      }
`

export const ContentAbout = styled.div`
width: 68%;

h3 {
    color: #007bff;
    font-size: 32px;
  }

  h4 {
    color: #333;
    font-size: 28px;
  }

  p {
    color: #555;
    margin-bottom: 15px;
    font-size: 26px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 15px;
    font-size: 22px;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .hashtag {
    color: #007bff;
    font-weight: bold;
  }
`


export const Slug = styled.h2`
   color: #6FB3D2;
    font-size: 92px;
    text-align: center;

    margin-top: 20px;

    @media (max-width: 750px) {
        font-size: 46px;
         
      }
`
