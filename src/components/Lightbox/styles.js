import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80vw;
  max-height: 80vh;

  img {
    max-width: 80vw;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 8px;
  }
`

export const NavButton = styled.button`
  position: absolute;
  ${({ direction }) => direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  padding: 0;

  svg {
    display: block;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  @media only screen and (max-width: 600px) {
    width: 40px;
    height: 40px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 24px;
  background: none;
  border: none;
  color: #fff;
  font-size: 36px;
  cursor: pointer;
  transition: 0.2s all;
  z-index: 2001;

  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.accent};
  }
`

export const Caption = styled.p`
  color: #ccc;
  font-size: 14px;
  text-align: center;
  margin-top: 12px;
  max-width: 600px;
`

export const Counter = styled.span`
  position: absolute;
  top: 24px;
  left: 24px;
  color: #999;
  font-family: 'Roboto Mono';
  font-size: 14px;
`
