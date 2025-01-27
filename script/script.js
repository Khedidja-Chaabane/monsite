// navbar, pour ajouter la classe active
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname.split("/").pop(); // Récupère le chemin actuel
  const navLinks = document.querySelectorAll('.nav-link'); // Sélectionne tous les liens de navigation

  navLinks.forEach(link => {
    // Vérifie si le chemin du lien correspond au chemin actuel
    if (link.getAttribute('href') === currentPath) {
      link.classList.remove('nav-link') ;
           link.classList.add('active'); // Ajoute la classe active au lien correspondant
    } else {
      link.classList.remove('active'); // Retire la classe active des autres liens
    }
  });
});

//  acceuil
// Fonction pour simuler l'effet de texte tapé à la machine à écrire
function typeWriterEffect(element, text, speed) {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          element.innerHTML = ''; // Effacer le texte
          typeWriterEffect(element, text, speed); // Redémarrer l'animation
        }, 5000); // Délai avant de redémarrer l'animation (en millisecondes)
      }
    }, speed);
  }
  // selection de l'element
  const typedTextElement = document.getElementById('typed-text');
  
  // Le texte 
  const textToType = " Bienvenue sur mon portfolio ";
  
  // Vitesse 
  const typingSpeed = 80;
  
  // Démarrage de l'animation
  typeWriterEffect(typedTextElement, textToType, typingSpeed);
  