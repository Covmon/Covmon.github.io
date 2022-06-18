import styled from 'styled-components'

export const PageContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
`
 
export const TitleContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding: 20px 120px;
 font-family: 'Roboto Mono';
 font-size: 28px;
 color: #222831;
 background-color: #eeeeee;
 border-bottom: 13px solid #32e0c4;

 h1 {
   margin: 5px 0;
 }

 span {
   color: #32e0c4;
 }

 @media only screen and (max-width: 1000px) {
    padding: 20px 40px;
  }
`

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 13px solid #2cc9b0;
  color: #eeeeee;
  padding: 20px 120px;
  background-color: #393e46;
  border-bottom: 13px solid #f3c623;
  color: #2cc9b0;
  >div {
    margin: 5px 0;
    font-size: 18px;
    display: flex;
    flex-wrap: wrap;
  }
  a {
    color: #f3c623;
    text-decoration: none;
    transition: 0.25s all;
    margin: 15px;

    &:first-child {
      margin-left: 0;
    }
    &:hover {
      box-shadow: inset 0 -.45em 0 rgba(243,198,35, 0.5);
    }
  }

  @media only screen and (max-width: 1000px) {
    padding: 20px 40px;
  }
`

export const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 13px solid #dbb31f;
  color: #eeeeee;
  background-color: #222831;
  padding: 40px 110px 40px 120px;

  @media only screen and (max-width: 1000px) {
    padding: 20px 40px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`
