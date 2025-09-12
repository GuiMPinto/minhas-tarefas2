/* CREATE SLICE é a criação do REDUCER e da ACTION a mesmo tempo. Sem o
CREATE SLICE é necessário criar um identifcador para cada ACTION. Ele cria as
ACTIONs e os reducers dos componentes

Uma função REDUCER é disparado por uma ACTION que é um objeto TYPESCRIPT ou
JAVASCRIPT. Uma ACTION representa uma ação que o usuário pode fazer ou disparar.
Dizemos que o usuário fez um 'dispatcher' */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import tarefaModels from '../../models/tarefaModels'
import * as enums from '../../utils/enums/enumTarefas'

type TarefaState = {
  itens: tarefaModels[]
}

const initialState: TarefaState = {
  itens: [
    {
      idModels: 1,
      descricaoModels: 'Estudar Java Script',
      prioridadeModels: enums.Prioridade.NORMAL,
      statusModels: enums.Status.CONCLUIDA,
      tituloModels: 'Estudar Aula 3'
    },
    {
      idModels: 2,
      descricaoModels: 'Estudar Bootstrap',
      prioridadeModels: enums.Prioridade.IMPORTANTE,
      statusModels: enums.Status.CONCLUIDA,
      tituloModels: 'Estudar Aula 1'
    },
    {
      idModels: 3,
      descricaoModels: 'Estudar Redux',
      prioridadeModels: enums.Prioridade.URGENTE,
      statusModels: enums.Status.PENDENTE,
      tituloModels: 'Estudar Aula 4'
    }
  ]
}

/* Antes do uso do CREATESLICE todo o objeto era retornado. Agora apenas os atributos desejados são retornados */
const tarefasSlice = createSlice({
  //Nome Reducer
  name: 'tarefas',
  initialState, // = initialState: initialState,

  /* Os reducers. Tem o geral ( Use Reducer ) que monitor todas as ACTIONS e um REDUCER
  para cada componente

  Será colocada dentro do escopo deste código:  reducers: {} as ACTIONS que alterarão os reducers*/
  reducers: {
    //função que remove uma tarefa. Cada proriedade do reducer é uma função
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (tarefa) => tarefa.idModels !== action.payload
      )
    }
  }
})

export default tarefasSlice.reducer

export const { remover } = tarefasSlice.actions
