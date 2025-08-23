import * as S from './styles'

// Criado o tipo 'PropsFiltroTarefas'
export type PropsFiltroTarefas = {
  ativo?: boolean
}

const FiltroCard = (props: PropsFiltroTarefas) => (
  <S.Card ativo={props.ativo}>
    <S.Contador>3</S.Contador>
    <S.Label>pendentes</S.Label>
  </S.Card>
)

export default FiltroCard
