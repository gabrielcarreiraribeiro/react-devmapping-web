import React, { useState, useEffect, Fragment } from 'react';
import api from '../../services/api'

import './sidebar.css'
import './style.css'

// Importando os componentes
import DevForm from '../../components/DevForm'
import DevItem from '../../components/DevItem'

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

function Home() {

    const [devs, setDevs] = useState([])
    let [currentFormDev, setCurrentFormDev] = useState({})

    async function loadDevs() {
        const response = await api.get('/devs')
        setDevs(response.data)
    }
    /**
     * Utilizamos "useEffect" sempre que queremos realizar alguma ação quando o componente
     * é montado ou quando um determinado atributo que colocamos sobre observação é alterado.
     *
     * No primeiro parêmetro, colocamos a ação a ser realizada e no segundo, colocamos o atributo
     * que irá ficar sobre observação.
     */
    useEffect(() => {
        loadDevs()
    }, [])

    /**
     * Função responsável por adicionar um novo Dev na base e, caso esse dev já exista,
     * simplesmente atualizá-lo
     */
    async function handlerAddOrUpdateDev(data) {
        console.log("Dados aqui")
        console.log(data)
        try {
            const response = await api.get(`/searchDevs/${data.github_username}`)
            const update = !!response.data

            update ? await api.put('/devs', data) : await api.post('/devs', data)

        } catch (e) {
            console.log("Erro na requisição para salvar um dev. Erro: ".concat(e))
        }

        loadDevs()
    }

    // Deletar Dev
    async function handlerDeleteDev(github_username) {
        try {
            await api.delete(`/devs/${github_username}`)
        } catch (e) {
            console.log("Erro ao enviar requisição de exclusão de Dev. Erro: ".concat(e))
        }
        loadDevs()
    }

    // Preenche o formulário com os dados do dev selecionado para poder modificá-lo.
    async function updateFormWithDevData(dev) {
        setCurrentFormDev(dev)
    }

    /**
     * O retorno de html do componente, sempre deverá ser envolvido por um "container",
     * pois não é possível retornarmos vários elementos separados.
     * Para isso, utilizamos uma div, alguma outra tag que represente um container,
     * ou o próprio container do react conhecido como "Fragment", utilizando "React.Fragment"
     */
    return (
        <Fragment>
            <div id="home">
                <aside>
                    <strong>Cadastrar</strong>
                    <DevForm onSubmit={handlerAddOrUpdateDev} dev={currentFormDev} />
                </aside>

                <main>
                    <ul>
                        {devs.map(dev => (
                            <DevItem key={dev._id} dev={dev} onDelete={handlerDeleteDev} onUpdate={updateFormWithDevData} />
                        ))}
                    </ul>
                </main>
            </div>
            <div style={{ marginLeft: "60px", fontSize: "10px" }}>Icons made by <a href="https://www.flaticon.com/authors/icon-monk" title="Icon Monk">Icon Monk</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div style={{ marginLeft: "60px", fontSize: "10px" }}>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </Fragment>
    );
}

export default Home;
