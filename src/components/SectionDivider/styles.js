import styled from 'styled-components'

export const DividerContainer = styled.div`
  line-height: 0;
  background: ${({ fromColor }) => fromColor || 'transparent'};
  transform: ${({ flip }) => flip ? 'rotate(180deg)' : 'none'};

  svg {
    display: block;
    width: 100%;
    height: 50px;

    path {
      fill: ${({ toColor, theme }) => toColor || theme.accent};
    }
  }
`
