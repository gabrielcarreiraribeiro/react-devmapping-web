import React, { useState, useEffect } from 'react';

import './App.css';
import './global.css'
import './Sidebar.css'
import './Main.css'

/**
 * Componente:
 * Função que retorna javascript, html e css e não interfere no resto do workflow do código.
 * 
 * Propriedade:
 * Dados que o componente pai passa para o componente filho
 * 
 * Estado:
 * Dados monitorados pelo componente. Ao serem alterados,
 * podem realizar atualizações em funções do componente ou em sua parte visual.
 * 
 */

function App() {

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [github_username, setGitHubUsername] = useState('')
  const [techs, setTechs] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {

        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)

      },
      (error) => {
        console.log(`Error: ${error}`)
      },
      {
        timeout: 10000
      }
    )
  }, [])

  async function handlerAddDev(e) {
    e.preventDefault()
  }


  /**
   * O retorno de html do componente, sempre deverá ser envolvido por um "container",
   * pois não é possível retornarmos vários elementos separados.
   * Para isso, utilizamos uma div, alguma outra tag que represente um container,
   * ou o próprio container do react conhecido como "Fragment", utilizando "React.Fragment"
   */
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGitHubUsername(e.target.value)} />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)} />
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)} />
            </div>

          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/58861192?s=460&v=4" />
              <div className="user-info">
                <strong>Gabriel Ribeiro</strong>
                <span>Node, React e React Native</span>
              </div>
            </header>
            <p>Let's code xD</p>
            <a href="https://github.com/gabrielcarreiraribeiro">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/58861192?s=460&v=4" />
              <div className="user-info">
                <strong>Gabriel Ribeiro</strong>
                <span>Node, React e React Native</span>
              </div>
            </header>
            <p>Let's code xD</p>
            <a href="https://github.com/gabrielcarreiraribeiro">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/58861192?s=460&v=4" />
              <div className="user-info">
                <strong>Gabriel Ribeiro</strong>
                <span>Node, React e React Native</span>
              </div>
            </header>
            <p>Let's code xD</p>
            <a href="https://github.com/gabrielcarreiraribeiro">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/58861192?s=460&v=4" />
              <div className="user-info">
                <strong>Gabriel Ribeiro</strong>
                <span>Node, React e React Native</span>
              </div>
            </header>
            <p>Let's code xD</p>
            <a href="https://github.com/gabrielcarreiraribeiro">Acessar perfil no Github</a>
          </li>
        </ul>

      </main>

    </div>
  );
}

export default App;
