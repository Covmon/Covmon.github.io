import styled from 'styled-components'

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
  background-color: #2cc9b0;
  cursor: pointer;
  transition: 0.25s all;
  box-shadow: 0 10px 15px #171b21;
  border-radius: 3px;
  &:hover {
    background-color: #25b09a;  
  }
`
