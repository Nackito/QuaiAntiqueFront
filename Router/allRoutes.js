import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "Galerie", "/pages/galerie.html"),
  new Route(
    "/signin",
    "Connexion",
    "/pages/auth/signin.html",
    "js/auth/signin.js"
  ),
  new Route(
    "/signup",
    "Inscription",
    "/pages/auth/signup.html",
    "js/auth/signup.js"
  ),
  new Route("/account", "Mon compte", "/pages/auth/account.html"),
  new Route(
    "/editPassword",
    "Modifier le mot de passe",
    "/pages/auth/editPassword.html"
  ),
  new Route(
    "/allReservations",
    "Vos réservations",
    "/pages/reservations/allResa.html"
  ),
  new Route("/reserver", "Réserver", "/pages/reservations/reserver.html"),
  new Route(
    "/detailsResa",
    "Détails réservation",
    "/pages/reservations/detailsResa.html"
  ),
];

// Le titre s'affiche comme ceci : Route.title - websiteName
export const websiteName = "Quai Antique"; // Nom de votre site Web
