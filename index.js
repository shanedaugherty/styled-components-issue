import styled from 'styled-components'

const Table = styled.table``
const Row = styled.tr``
const Column = styled.td``
const P = styled.p``

const SpecialTable = styled(Table)`
  background-color: black;
  
  ${Row} > *,
  ${Column}:first-child,
  ${P} {
    background-color: blue;
  }
`
