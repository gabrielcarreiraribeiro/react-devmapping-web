import React from 'react'
import './style.css'

function DevItem({ dev, onDelete, onUpdate }) {

    console.log(onDelete)

    function handlerDelete() {
        onDelete(dev.github_username)
    }

    function handlerUpdate() {
        onUpdate(dev)
    }

    return (
        <li className="dev-item">
            <header>
                <div className="user-data">
                    <img className="user-avatar" alt={dev.name} src={dev.avatar_url} />
                    <div className="user-info">
                        <strong>{dev.name}</strong>
                        <span>{dev.techs.join(', ')}</span>
                    </div>
                </div>
                <div className="action-button">
                    <img src="https://image.flaticon.com/icons/svg/458/458594.svg" alt="Remove Dev" onClick={handlerDelete} />
                    <img src="https://image.flaticon.com/icons/svg/273/273511.svg" alt="Update Dev" onClick={handlerUpdate} />
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
        </li>
    )

}

export default DevItem