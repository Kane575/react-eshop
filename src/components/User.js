import React from 'react';
import { Link } from 'react-router-dom';

function User({user_avatar}) {
    return (
        <div id="user">
            <div className="profile" onClick={userMenuToggle}>
                <h3>Username<br/><span>Vu le 01/01/2024</span></h3>
                <div className="imgBx">
                    <img src={user_avatar} alt='Avatar du user'/>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/connexion"><ion-icon name="log-in-outline"></ion-icon>Connexion</Link></li>
                    <li><Link to="/inscription"><ion-icon name="person-add-outline"></ion-icon>Inscription</Link></li>
                    <li><a href="#"><ion-icon name="person-outline"></ion-icon>Profile</a></li>
                    <li><a href="#"><ion-icon name="cart-outline"></ion-icon>Mes commandes</a></li>
                    <li><a href="deconnexion.html"><ion-icon name="log-out-outline"></ion-icon>Déconnexion</a></li>
                </ul>
            </div>
        </div>
    );
}

function userMenuToggle(event) {
    const menu = document.querySelector('.menu')
    event.preventDefault()
    menu.classList.toggle('active')
}

export default User;
