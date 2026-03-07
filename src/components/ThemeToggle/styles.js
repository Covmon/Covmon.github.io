import styled from 'styled-components'

export const ToggleButton = styled.button`
  background: ${({ theme }) => theme.glassBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px ${({ theme }) => theme.shadow};
  }
`
