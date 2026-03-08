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
  color: ${({ theme }) => theme.heroText};
  background-color: ${({ theme }) => theme.heroBg};
  min-height: 160px;
  justify-content: center;

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
  color: ${({ theme }) => theme.text};
  padding: 20px 120px;
  background-color: ${({ theme }) => theme.bgAlt};

  h3 {
    margin: 5px 0;
  }

  a {
    color: ${({ theme }) => theme.gold};
    text-decoration: none;
    transition: 0.25s all;

    &:hover {
      box-shadow: inset 0 -.45em 0 ${({ theme }) => theme.linkHoverShadow};
    }
  }

  @media only screen and (max-width: 1000px) {
    padding: 20px 40px;
  }
`

export const AboutContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  padding: 40px 120px;

  @media only screen and (max-width: 1000px) {
    padding: 20px 40px;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 30px;
  line-height: 25px;
  margin-right: 40px;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  p {
    margin: 0 0 20px 0;

    a {
      color: ${({ theme }) => theme.gold};
      transition: 0.25s all;

      &:hover {
        box-shadow: inset 0 -.45em 0 ${({ theme }) => theme.linkHoverShadow};
      }
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0;
    margin: 0;
  }
`

export const Buttons = styled.div`
  display: flex;
`

export const ProfileImage = styled.img`
  width: 22%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;

  @media only screen and (max-width: 800px) {
    width: 85%;
  }
`

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  padding: 40px 120px;

  h1 {
    font-size: 24px;
  }

  @media only screen and (max-width: 1000px) {
    padding: 20px 40px;
  }

  @media only screen and (max-width: 800px) {
    align-items: center;
  }
`

export const PortfolioItems = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  padding: 40px 120px 200px 120px;

  h1 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.gold};
      transition: 0.25s all;

      &:hover {
        box-shadow: inset 0 -0.45em 0 ${({ theme }) => theme.linkHoverShadow};
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    padding: 80px 40px;
  }
`

export const Socials = styled.div`
  display: flex;

  > a {
    margin-right: 20px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-4px);
    }
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgAlt};
  padding: 45px;
`
