import React from 'react';
import logo from "../img/icons/ico-eshop-s.png";
import user_avatar from "../img/user.png";
import User from "./User";
import { Link, NavLink } from "react-router-dom";

function Header({ panier = [], updatePanier }) {
  const nbrItemsInPanier = panier.reduce((nbr, item) => nbr + item.qte, 0);

  return (
    <header>
      <div id="header-top">
        <div id="logo-nom">
          <img src={logo} alt="Logo de eshop" />
          <h1>Shopez en toute sécurité !</h1>
        </div>
        <div id="user-nav">
          <User user_avatar={user_avatar} />
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/panier"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Panier (<span id="nav-panier">{nbrItemsInPanier}</span>)
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="header-banniere">
        <div id="banniere_promo">
          -20% <br />
          Faites le plein du panier &#129321;
        </div>
        <div id="banniere_bouton">
          <marquee behavior="true" direction="left">
            Livraison partout au Mali. Satisfait ou remboursé sur 3 jours !
          </marquee>
          <a href="produits.html" className="bouton_rouge">
            Voir les produits <img src="img/icons/fleche.png" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
