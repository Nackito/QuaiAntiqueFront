export default class Route {
  constructor(url, title, pathHTML, authorize, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHTML = pathHTML;
    this.pathJS = pathJS;
    this.authorize = authorize;
  }
}

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Tout le monde sauf les connectés
["admin"] -> Seulement les admins
["client"] -> Seulement les clients
["admin", "client"] -> Seulement les admins et les clients
 */
