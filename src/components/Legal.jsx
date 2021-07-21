import React from 'react';
import './Legal.css';

const Legal = () => {
    return(
        <>
            <section class="bloc-infos">
            <h2>Mentions Légales</h2>
                <article class="bloc-text">
                    <h3>Identité</h3>
                    <p>Wildify</p>
                    <p>Lieu-dit des concerts</p>
                    <p>28240 La Loupe</p>
                    <p>Siret : 000 000 000 000000 - RCS La Loupe</p>
                </article>
                <article class="bloc-text">
                    <h3>Hébergement</h3>
                    <p>GitHub</p>
                    <p>Adresse web : https://github.com/</p>
                </article>
                <article class="bloc-text">
                    <h3>Crédits</h3>
                    <p>Site internet réalisé par des Wilders</p>
                </article>
            </section>
            <section class="bloc-infos">
            <h2>Politique de confidentialité</h2>
                <article class="bloc-text">
                    <h3>Qui sommes-nous ?</h3>
                    <p>Wildify est un site permettant à ses utilisateurs de faire des recherches de musiques, par styles, par artistes, etc. Il met également à disposition de ces derniers la possibilité de créer des playlistes à l’aide d’une librairie. Une page profil permet également une personnalisation des services.</p>
                </article>
                <article class="bloc-text">
                    <h3>Utilisation et conservation des données collectées</h3>
                    <p>Depuis le 25 mai 2018, le nouveau Règlement Général relatif à la Protection des Données fait évoluer la Loi dite « Informatique et Liberté ». Ce règlement encadre l’utilisation et la sécurisation de données à caractère personnel et vise à en assurer une meilleure protection, en octroyant le droit au client d’obtenir des informations sur les données récoltés par INFO MANIA 24, demander à les modifier, les corriger, les restreindre ou à les supprimer (à noter que des dispositions légales nous imposent de conserver vos données).
                        Ces dernières peuvent collectées lors de nos échanges ou de votre navigation sur nos pages. Ces données seront conservées durant 5 ans.
                        Le client peut toutefois exercer ses droits en envoyant un courrier auprès de nos services.
                        </p>
                </article>
            </section>
        </>
    );
}

//Manque navbar

export default Legal;