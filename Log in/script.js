// Attend que tout le contenu de la page soit chargé
window.addEventListener('load', () => {

    // Sélectionne les éléments de la page
    const splashScreen = document.getElementById('splash-screen');
    const loginPage = document.getElementById('login-page');

    // Définit un minuteur de 3000 millisecondes (3 secondes)
    setTimeout(() => {
        // Commence l'animation de fondu pour l'écran de chargement
        splashScreen.style.opacity = '0';

        // Affiche la page de connexion
        loginPage.style.display = 'flex';

        // Après la fin de l'animation de fondu (0.5s), cache complètement l'écran de chargement
        splashScreen.addEventListener('transitionend', () => {
            splashScreen.style.display = 'none';
        });

    }, 2000); // Délai de 2 secondes


});
