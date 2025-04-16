export default class Route {
  constructor(url, title, pathHTML, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHTML = pathHTML;
    this.pathJS = pathJS;
  }
}
