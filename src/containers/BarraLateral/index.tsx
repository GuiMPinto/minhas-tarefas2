import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtroReducers'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtroReducers)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        {/* 'ativo' é atributo da props PropsFiltroCard criado no componente FiltroCard */}
        <S.Filtros>
          <FiltroCard legenda="pendentes" contador={5} />
          <FiltroCard legenda="concluídas" contador={2} />
          <FiltroCard legenda="urgentes" contador={3} />
          <FiltroCard legenda="importantes" contador={4} />
          <FiltroCard legenda="normal" contador={7} />
          <FiltroCard legenda="todas" contador={21} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
