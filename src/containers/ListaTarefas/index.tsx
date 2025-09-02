import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const ListaTarefas = () => {
  //const tarefas = useSelector((state: RootReducer) => state.tarefasReducers)
  const { tarefasReducers } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>2 Tarefas marcadas como</p>
      <ul>
        {
          tarefasReducers.map(
            (t) => (
              <li key={t.tituloModels}>
                <Tarefa
                  descricaoComT={t.descricaoModels}
                  tituloComT={t.descricaoModels}
                  statusComT={t.statusModels}
                  prioridadeComT={t.prioridadeModels}
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
