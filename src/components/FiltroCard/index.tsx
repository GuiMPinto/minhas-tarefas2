import * as S from './styles'

// Criado o tipo 'PropsFiltroTarefas'
export type PropsFiltroTarefas = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroCard = ({ ativo, contador, legenda }: PropsFiltroTarefas) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FiltroCard
