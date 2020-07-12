import styled from 'styled-components'

export const PageContainer = styled.div`
display: flex;flex-direction: column;width: 100%;`

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
`

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 13px solid #2cc9b0;
  color: #eeeeee;padding: 20px 120px;
  background-color: #393e46;
  border-bottom: 13px solid #f3c623;

  h3 {  
    margin: 5px 0;
  }

  a {  
    color: #f3c623;  
    text-decoration: none;  
    transition: 0.25s all; 

    &:hover {    
      box-shadow: inset 0 -.45em 0 rgba(243,198,35, 0.5); 
    }
  }
`

export const AboutContainer = styled.div`
  display: flex;
  border-top: 13px solid #dbb31f;
  color: #eeeeee;
  background-color: #222831;
  padding: 40px 120px;
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 30px;
  line-height: 25px;
  margin-right: 40px;

  a {
    color: white;
    text-decoration: none;
  }

  p {  
    margin: 0 0 20px 0;

    a {  
      color: #f3c623; 
      transition: 0.25s all; 

      &:hover { 
        box-shadow: inset 0 -.45em 0 rgba(243,198,35, 0.5);  
      }
    }
  }
`

export const ProfileImage = styled.img`
  width: 22%;
  height: 33%;
`

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #eeeeee;
  background-color: #222831;
  padding: 40px 120px;
  h1 {  
    font-size: 24px;
  }
`

export const PortfolioItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`
