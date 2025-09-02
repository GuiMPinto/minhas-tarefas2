/* CREATE SLICE é a criação do REDUCER e da ACTION a mesmo tempo. Sem o
CREATE SLICE é necessário criar um identifcador para cada ACTION. Ele cria as
ACTIONs e os reducers dos componentes

Uma função REDUCER é disparado por uma ACTION que é um objeto TYPESCRIPT ou
JAVASCRIPT. Uma ACTION representa uma ação que o usuário pode fazer ou disparar.
Dizemos que o usuário fez um 'dispatcher' */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import tarefaModels from '../../models/tarefaModels'
import * as enums from '../../utils/enums/enumTarefas'

/* Antes do uso do CREATESLICE todo o objeto era retornado. Agora apenas os atributos desejados são retornados */
const tarefasSlice = createSlice({
  //Nome Reducer
  name: 'tarefas',
  initialState: [
    new tarefaModels(
      'Estudar Java Script',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Aula 1',
      1
    ),
    new tarefaModels(
      'Estudar Type Script',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Aula 2',
      2
    ),
    new tarefaModels(
      'Estudar React',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      'Aula 3',
      3
    )
  ],

  /* Os reducers. Tem o geral ( Use Reducer ) que monitor todas as ACTIONS e um REDUCER
  para cada componente

  Será colocada dentro do escopo deste código:  reducers: {} as ACTIONS que alterarão o reducer*/
  reducers: {
    //função que remove uma tarefa. Cada proriedade do reducer é uma função
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.idModels !== action.payload)
    }
  }
})

export default tarefasSlice.reducer

export const { remover } = tarefasSlice.actions
