import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "Galerie", "/pages/galerie.html"),
  new Route("404", "Page introuvable", "/pages/404.html"),
  new Route("contact", "Contact", "/pages/contact.html"),
  new Route("about", "À propos", "/pages/about.html"),
  new Route("blog", "Blog", "/pages/blog.html"),
  new Route("services", "Services", "/pages/services.html"),
  new Route("portfolio", "Portfolio", "/pages/portfolio.html"),
  new Route("team", "Équipe", "/pages/team.html"),
];

// Le titre s'affiche comme ceci : Route.title - websiteName
export const websiteName = "Quai Antique"; // Nom de votre site Web
