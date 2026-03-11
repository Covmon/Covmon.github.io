import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 120px;
  font-family: 'Roboto Mono';
  font-size: 28px;
  color: ${({ theme }) => theme.heroText};
  background-color: ${({ theme }) => theme.heroBg};

  h1 {
    margin: 5px 0;
  }

  span {
    color: ${({ theme }) => theme.accentLight};
  }

  @media only screen and (max-width: 1000px) {
    padding: 20px 40px;
  }
`

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.accent};
  padding: 20px 120px;
  background-color: ${({ theme }) => theme.bgAlt};

  >div {
    margin: 5px 0;
    font-size: 18px;
    display: flex;
    flex-wrap: wrap;
  }

  a {
    color: ${({ theme }) => theme.gold};
    text-decoration: none;
    transition: 0.25s all;
    margin: 15px;

    &:first-child {
      margin-left: 0;
    }
    &:hover {
      box-shadow: inset 0 -.45em 0 ${({ theme }) => theme.linkHoverShadow};
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
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  padding: 40px 110px 40px 120px;

  @media only screen and (max-width: 1000px) {
    padding: 20px 40px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
  }
`
