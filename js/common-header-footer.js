// Template commun pour header et footer
function getCommonHeader() {
    return `
    <!-- NAVIGATION PRINCIPALE -->
    <nav class="main-navigation">
        <div class="main-navigation__container">
            <button class="main-navigation__toggle" id="mobile-menu-toggle" aria-label="Menu" aria-expanded="false">
                ☰
            </button>
            <a href="index.html" class="main-navigation__logo">
                <div class="main-navigation__logo-main">
                    <span>West Paris</span>
                    <span>Consulting</span>
                </div>
            </a>
            <ul class="main-navigation__menu" id="desktop-menu">
                <li class="main-navigation__item">
                    <a href="index.html" class="main-navigation__link">Accueil</a>
                </li>
                <li class="main-navigation__item">
                    <a href="equipe.html" class="main-navigation__link">Notre équipe</a>
                </li>
                <li class="main-navigation__item">
                    <a href="wpc-lab.html" class="main-navigation__link">WPC Lab</a>
                </li>
                <li class="main-navigation__item">
                    <a href="contact.html" class="main-navigation__link">Contact</a>
                </li>
                <li class="main-navigation__item">
                    <a href="nous-rejoindre.html" class="main-navigation__link">Nous rejoindre</a>
                </li>
            </ul>
            <div class="main-navigation__social">
                <a href="https://www.linkedin.com/company/westparisconsulting/" target="_blank" rel="noopener noreferrer" class="main-navigation__social-link" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 382 382" fill="currentColor">
                        <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
                          C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
                          H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
                          c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
                          s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
                          c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
                          c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
                          c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
                          L341.91,330.654L341.91,330.654z" />
                    </svg>
                </a>
            </div>
        </div>
    </nav>
  `;
}

function getCommonFooter() {
    return `
    <!-- FOOTER -->
    <footer class="footer">
        <div class="footer__top">
            <div class="footer__section">
                <div class="footer__logo">
                    <span>West Paris</span>
                    <span>Consulting</span>
                </div>
                <p>200 Avenue de la République<br>92000 Nanterre</p>
                <p><a href="mailto:contact@westparisconsulting.fr">contact@westparisconsulting.fr</a></p>
                <div class="footer__social">
                    <a href="https://www.linkedin.com/company/westparisconsulting/" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 382 382" fill="currentColor">
                            <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
                              C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
                              H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
                              c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
                              s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
                              c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
                              c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
                              c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
                              L341.91,330.654L341.91,330.654z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="footer__section">
                <h4>Navigation</h4>
                <a href="equipe.html">Notre équipe</a>
                <a href="wpc-lab.html">WPC Lab</a>
                <a href="contact.html">Contact</a>
                <a href="nous-rejoindre.html">Nous rejoindre</a>
            </div>

            <div class="footer__section">
                <h4>Légal</h4>
                <a href="mentions-legales.html">Mentions légales</a>
                <a href="confidentialite.html">Politique de Confidentialité</a>
                <a href="exercer-mes-droits.html">Exercer mes droits</a>
            </div>
        </div>

        <div class="footer__bottom">
            <p>© 2025 West Paris Consulting, association étudiante de l'Université Paris Nanterre. Tous droits réservés.</p>
        </div>
    </footer>

    <!-- BANNIÈRE COOKIES -->
    <div class="cookie-banner" id="cookie-banner">
        <button class="cookie-banner__close" id="cookie-close" aria-label="Fermer">×</button>
        <div class="cookie-banner__container">
            <div class="cookie-banner__text">
                <p>Le site West Paris Consulting utilise des cookies nécessaires au bon fonctionnement du site afin de vous garantir la meilleure expérience sur notre site web. Nous utilisons des cookies pour : Assurer le bon fonctionnement de notre site web. Récolter des statistiques de fréquentation et de navigation pour améliorer l'expérience. Si vous continuez à utiliser ce site, nous supposerons que vous en êtes satisfait.</p>
            </div>
            <div class="cookie-banner__actions">
                <button class="cookie-banner__button cookie-banner__button--accept" id="cookie-accept">OK</button>
                <button class="cookie-banner__button cookie-banner__button--reject" id="cookie-reject">Non</button>
            </div>
        </div>
    </div>
  `;
}

