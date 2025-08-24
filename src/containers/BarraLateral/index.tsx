import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="buscar" />
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

export default BarraLateral
