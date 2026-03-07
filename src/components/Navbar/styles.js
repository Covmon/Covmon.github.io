import styled from 'styled-components'

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.navBg};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.glassBorder};
  transform: translateY(${({ visible }) => visible ? '0' : '-100%'});
  transition: transform 0.3s ease;
`

export const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.accent},
    ${({ theme }) => theme.gold}
  );
  transition: width 0.1s linear;
`

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 120px;

  @media only screen and (max-width: 1000px) {
    padding: 12px 40px;
  }

  @media only screen and (max-width: 600px) {
    padding: 12px 20px;
  }
`

export const Logo = styled.a`
  font-family: 'Roboto Mono';
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  transition: 0.25s all;

  &:hover {
    color: ${({ theme }) => theme.accentLight};
  }
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const NavLink = styled.span.attrs({ 'data-clickable': 'true' })`
  font-family: 'Roboto Mono';
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: 0.25s all;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`
