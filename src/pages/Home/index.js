import { Header } from '../../components/Header';
import ia from '../../assets/background.png';
import "./styles.css"
import  ItemList  from '../../components/ItemList/index'
import { useState } from 'react';

function App() {
const [user, setUser] = useState('');
const [currentUser, setCurrentUser] = useState(null);
const [repos, setRepos] = useState(null);

const handleGetData = async () => {
  const userData = await fetch(`https://api.github.com/users/${user}`);
  const newUser = await userData.json(); 
  if(newUser.name){
    const {avatar_url, name, bio} = newUser;
    setCurrentUser({avatar_url, name, bio});   
      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`
        );
      const newRepos = await reposData.json();
      if(newRepos.length){
        setRepos(newRepos);

      }
  }
};

  return (
    <div className="App">
      <Header/>
      <div>
      <img src={ia} className="background" alt="background-app"/>
      <div className="info">
        <div>
          <input 
          name="usuario"
          value={user} 
          onChange={(event) => setUser(event.target.value)}
          placeholder="@username" />
          <button onClick={handleGetData}>Procurar</button> 
          </div>
          {currentUser?.name ? (<>
             <div className="perfil">
             <img 
             src={currentUser.avatar_url}
             className="profile"
             alt="imagem de perfil"/>          
           <div>
             <h3>Denis Leme</h3>
             <span>@DenisLeme</span>
             <p>Desenvolvedor Full-Stack</p>
           </div>
           </div>
           <hr/>
           </>

          ): null}
        
          
            {repos?.length ?(             
              <div>
            <h4 className="repositorio">Repositórios</h4>
            {repos.map(repo => (
              <>
              <ItemList title={repo.name} description={repo.description}/>
              
              </>))}
              
              
              </div>
            ) : null}
            

          
      </div>
      </div>
    </div>

  );
}

export default App;
