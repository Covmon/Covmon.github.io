import styled from 'styled-components'

export const Container = styled.div`
  width: 275px;  
  height: 200px; 
  background-color: ${props => props.highlight ? 'rgba(243,198,35,0.25)' : '#393e46'};  
  transition: 0.25s all;  
  display: flex;  
  flex-direction: column;  
  align-items: flex-start;  
  padding: 5px 20px;  margin: 20px 30px 20px 0;  
  box-shadow: 0 10px 15px #171b21;  
  cursor: pointer;  
  border-radius: 3px; 

  &:hover { 
    background-color: ${props => props.highlight ? 'rgba(243,198,35,0.33)' : '#424852'};  
  }
`

export const Title = styled.h1`
  font-family: 'Roboto Mono';  
  font-size: 28px;  
  color: #2cc9b0;  
  box-shadow: inset 0 -.45em 0 rgba(44,201,176, 0.5);
`

export const Description = styled.p`
  font-size: 16px;
`

