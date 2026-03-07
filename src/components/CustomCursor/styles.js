import styled from 'styled-components'

export const CursorDot = styled.div`
  position: fixed;
  width: ${({ hovering }) => hovering ? '12px' : '8px'};
  height: ${({ hovering }) => hovering ? '12px' : '8px'};
  border-radius: 50%;
  background: ${({ theme }) => theme.accentLight};
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  transition: width 0.15s ease, height 0.15s ease;
`

export const CursorRing = styled.div`
  position: fixed;
  width: ${({ hovering }) => hovering ? '48px' : '32px'};
  height: ${({ hovering }) => hovering ? '48px' : '32px'};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.accentLight}66;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.15s ease, height 0.15s ease, border-color 0.15s ease;
`
