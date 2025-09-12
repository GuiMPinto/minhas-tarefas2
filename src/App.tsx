import BarraLateral from './containers/BarraLateral'
import ListaTarefas from './containers/ListaTarefas'
import EstiloGlobal, { Container } from './styles'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaTarefas />
      </Container>
    </Provider>
  )
}

export default App
