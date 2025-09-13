import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const ListaTarefas = () => {
  //const tarefas = useSelector((state: RootReducer) => state.tarefasReducers)
  const { itens } = useSelector((state: RootReducer) => state.tarefasReducers)
  const { termo } = useSelector((state: RootReducer) => state.filtroReducers)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.tituloModels.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }
  return (
    <Container>
      <p>2 Tarefas marcadas como: categoria e {termo}</p>
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
