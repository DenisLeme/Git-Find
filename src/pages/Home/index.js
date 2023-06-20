import { Header } from '../../components/Header';
import ia from '../../assets/background.png';
import "./styles.css"
import  ItemList  from '../../components/ItemList/index'


function App() {
  return (
    <div className="App">
      <Header/>
      <div>
      <img src={ia} className="background" alt="background-app"/>
      <div className="info">
        <div>
          <input name="usuario" placeholder="@username"/>
          <button>Procurar</button> 
          </div>
          <div className="perfil">
            <img 
            src="https://avatars.githubusercontent.com/u/42851804?v=4" 
            className="profile"
            alt="imagem de perfil"/>          
          <div>
            <h3>Denis Leme</h3>
            <span>@DenisLeme</span>
            <p>Desenvolvedor Full-Stack</p>
          </div>
          </div>
          <hr/>
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title="Repositório teste" description="texto de teste para repositório"/>
            <ItemList title="Repositório teste" description="texto de teste para repositório"/>
            <ItemList title="Repositório teste" description="texto de teste para repositório"/>

          </div>
      </div>
      </div>
    </div>

  );
}

export default App;
