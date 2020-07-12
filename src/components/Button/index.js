import React from 'react'
import { ButtonContainer } from './styles'

const Button = ({ text, onClick }) => {
  return ( 
  <ButtonContainer onClick = {onClick} >{text}</ButtonContainer>  
  )
}
                
export default Button