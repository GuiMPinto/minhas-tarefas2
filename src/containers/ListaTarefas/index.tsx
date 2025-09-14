import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const ListaTarefas = () => {
  //const tarefas = useSelector((state: RootReducer) => state.tarefasReducers)
  const { itens } = useSelector((state: RootReducer) => state.tarefasReducers)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) =>
      state.filtroReducers /* Monitorando os possiveis estatos(states)
     do filtroReducers */
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens

    //termo !== undefined . Evita de ter o valor falso se a string estiver vazia
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.tituloModels.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridadeModels === valor
        )
      }

      if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.statusModels === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }
  return (
    <Container>
      <p>2 Tarefas marcadas como: categoria e {termo}</p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {
          filtraTarefas().map(
            (t) => (
              <li key={t.tituloModels}>
                <Tarefa
                  descricaoModels={t.descricaoModels}
                  tituloModels={t.tituloModels}
                  statusModels={t.statusModels}
                  prioridadeModels={t.prioridadeModels}
                  idModels={t.idModels}
                />
              </li>
            ) /* => (*/
          ) /* .map ( */
        }
      </ul>
    </Container>
  )
} // const ListaTarefas = () => {

export default ListaTarefas
