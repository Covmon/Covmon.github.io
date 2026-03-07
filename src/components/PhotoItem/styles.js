import styled from 'styled-components'

export const Container = styled.div`
  display: table;
  max-width: 500px;
  margin-bottom: 20px;
  margin-right: 20px;
  cursor: pointer;

  img, .lazy-load-image-background {
    transition: transform 0.3s ease;
    border-radius: 6px;
  }

  &:hover img {
    transform: scale(1.03);
  }
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
