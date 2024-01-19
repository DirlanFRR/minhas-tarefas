import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListadeTarefas from '../../containers/ListadeTarefas'

const Home = () => (
  <>
    <BarraLateral />
    <ListadeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
