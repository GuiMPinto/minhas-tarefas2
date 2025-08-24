import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
// -- Versão 2 -- import * as enums from '../../utils/enum/Tarefas'
//import { useSelector } from 'react-redux'
//import { RootReducer } from '../../store'

const ListaTarefas = () => (
  <Container>
    <p>2 Tarefas marcadas como</p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default ListaTarefas
