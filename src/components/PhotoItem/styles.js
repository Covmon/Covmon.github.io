import styled from 'styled-components'

export const Container = styled.div`
 display: table;
 max-width: 500px;
 margin-bottom: 20px;
 margin-right: 20px;
`

export const Photo = styled.img`
 box-sizing: border-box;
 height: 300px;
 width: auto;
 max-width: 500px;
`

export const Location = styled.div`
 display: flex;
 justify-content: space-between;
 font-family: 'Roboto Mono';
 font-size: 12px;

 p {
   margin-bottom: 5px;
 }
`

export const Caption = styled.p`
 margin-top: 5px;
 font-size: 14px;
 display: table-caption;
 caption-side: bottom;
`