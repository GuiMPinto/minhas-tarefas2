import * as S from './styles'

const Tarefa = () => (
  <S.Card>
    <S.Titulo>Nome da Tarefa</S.Titulo>
    <S.Tag>importante</S.Tag>
    <S.Tag>pendentes</S.Tag>
    <S.Descricao />
    <S.BarraAcao>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcao>
  </S.Card>
)

export default Tarefa
