import { useState } from 'react'
import { useDispatch } from 'react-redux' // HOOK usado para de ACTION

import * as S from './styles'
//import * as enums from '../../utils/enums/enumTarefas'
import { remover } from '../../store/reducers/tarefasReducers' /* Importando a função que remover uma ACTION */
import tarefaModels from '../../models/tarefaModels'

type PropsTarefas = tarefaModels
const Tarefa = ({
  tituloModels,
  prioridadeModels,
  statusModels,
  descricaoModels,
  idModels
}: PropsTarefas) => {
  const dispatch = useDispatch() // HOOK que altera a ACTION
  /* O uso de USESTATE é feito com 2 parâmetros o 'valor' e a 'função que configura este valor' */
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{tituloModels}</S.Titulo>
      <S.Tag parametro="prioridade" prioridadeTagProps={prioridadeModels}>
        {prioridadeModels}
      </S.Tag>
      <S.Tag parametro="status" statusTagProps={statusModels}>
        {statusModels}
      </S.Tag>
      {/* Equivalente ao <textarea ></textarea> */}
      <S.Descricao value={descricaoModels} />
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
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(idModels))}>
              {' '}
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcao>
    </S.Card>
  )
}

export default Tarefa
