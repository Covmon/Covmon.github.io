import styled from 'styled-components'

export const Container = styled.div`
  width: 275px;
  min-height: 220px;
  background: ${({ theme, highlight }) => highlight ? theme.cardHighlight : theme.glassBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  transition: 0.3s all;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 20px;
  margin: 20px 30px 20px 0;
  box-shadow: 0 8px 32px ${({ theme }) => theme.shadow};
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  @supports not (backdrop-filter: blur(10px)) {
    background: ${({ theme, highlight }) => highlight ? theme.cardHighlight : theme.cardBg};
  }

  &:hover {
    background: ${({ theme, highlight }) => highlight ? theme.cardHighlightHover : theme.cardBgHover};
    transform: translateY(-2px);
    box-shadow: 0 12px 40px ${({ theme }) => theme.shadow};
  }

  @media only screen and (max-width: 800px) {
    margin-right: 0;
  }
`

export const Title = styled.h1`
  font-family: 'Roboto Mono';
  font-size: ${props => props.small ? '20px !important' : '28px'};
  color: ${({ theme }) => theme.accent};
  box-shadow: inset 0 -.45em 0 ${({ theme }) => theme.accentHoverShadow};
  white-space: nowrap;
`

export const Description = styled.p`
  font-size: 16px;
  flex: 1;
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-bottom: 10px;
`

export const Tag = styled.span`
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 12px;
  background: ${({ theme }) => theme.accent}22;
  color: ${({ theme }) => theme.accent};
  font-family: 'Roboto Mono';
`
