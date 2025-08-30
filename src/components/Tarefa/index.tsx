import { useState } from 'react'
import * as S from './styles'

type PropsTarefas = {
  tituloComT: string
  prioridadeComT: string
  statusComT: string
  descricaoComT: string
}
const Tarefa = ({
  tituloComT,
  prioridadeComT,
  statusComT,
  descricaoComT
}: PropsTarefas) => {
  /* O uso de USESTATE é feito com 2 parâmetros o 'valor' e a 'função que configura este valor' */
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{tituloComT}</S.Titulo>
      <S.Tag prioridadeTagProps={prioridadeComT}>{prioridadeComT}</S.Tag>
      <S.Tag statusTagProps={statusComT}>{statusComT}</S.Tag>
      {/* Equivalente ao <textarea ></textarea> */}
      <S.Descricao value={descricaoComT} />
      <S.BarraAcao>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover> Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcao>
    </S.Card>
  )
}

export default Tarefa
