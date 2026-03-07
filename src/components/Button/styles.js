import styled, { keyframes } from 'styled-components'

const rippleAnim = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 100px;
  padding: 10px;
  margin: 20px;
  font-size: 16px;
  font-family: 'Roboto Mono';
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.mode === 'dark' ? '#fff' : '#fff'};
  cursor: pointer;
  transition: 0.25s all;
  box-shadow: 0 10px 15px ${({ theme }) => theme.shadow};
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.accentDeep};
    transform: translateY(-2px);
  }
`

export const Ripple = styled.span`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  width: 20px;
  height: 20px;
  transform: scale(0);
  animation: ${rippleAnim} 0.6s linear;
  pointer-events: none;
`
