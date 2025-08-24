/* Permite usar o estilo global no STYLED COMPONENTS. Será usado no 'App.tsx'. Sem o
STYLES COMPONENTS o estilo global é feito através do arquivo 'index.css' que fora
deletado e importado pelo arquivo 'index.tsx' */
import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default EstiloGlobal
