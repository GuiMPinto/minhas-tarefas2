import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
// -- Versão 2 -- import * as enums from '../../utils/enum/Tarefas'
//import { useSelector } from 'react-redux'
//import { RootReducer } from '../../store'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver aula 3 da Ebac',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Estudar React',
    descricao: 'Ver aula 2 da Ebac',
    prioridade: 'importante',
    status: 'concluída'
  },
  {
    titulo: 'Estudar Redux',
    descricao: 'Ver aula 4 da Ebac',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaTarefas = () => (
  <Container>
    <p>2 Tarefas marcadas como</p>
    <ul>
      {
        tarefas.map(
          (t) => (
            <li key={t.titulo}>
              <Tarefa
                descricaoComT={t.descricao}
                tituloComT={t.titulo}
                statusComT={t.status}
                prioridadeComT={t.prioridade}
              />
            </li>
          ) /* => (*/
        ) /* .map ( */
      }
    </ul>
  </Container>
)

export default ListaTarefas
