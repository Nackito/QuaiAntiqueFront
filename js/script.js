const tokenCookieName = "accesstoken";
const roleCookieName = "role";
const btnDeconnexion = document.getElementById("signout-btn");
const apiUrl = "http://127.0.0.1:8000/api/";

console.log("Token:", getToken());
console.log("Is connected:", isConnected());
console.log("User connected:", isConnected());
console.log("Role:", getRole());

btnDeconnexion.addEventListener("click", signout);

function getRole() {
  return getCookie(roleCookieName);
}

function signout() {
  // Effacer le cookie
  eraseCookie(tokenCookieName);
  eraseCookie(roleCookieName);
  // Rediriger vers la page de connexion
  window.location.reload();
}

function setToken(token) {
  setCookie(tokenCookieName, token, 7); // 7 days expiration
}

function getToken() {
  return getCookie(tokenCookieName);
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

/*function isConnected() {
  if (getToken() == null || getToken == undefined) {
    return false;
  } else {
    return true;
  }
}*/
function isConnected() {
  return getToken() != null; // Vérifie si le token existe
}

/*
desconnected
connected (admin ou client)
        - admin
        - client
*/

function showAndHideElementForRoles() {
  const userConnected = isConnected();
  const role = getRole();

  let allElementsToEdit = document.querySelectorAll("[data-show]");

  allElementsToEdit.forEach((element) => {
    switch (element.dataset.show) {
      case "disconnected":
        if (userConnected) {
          element.classList.add("d-none");
        }
        break;
      case "connected":
        if (!userConnected) {
          element.classList.add("d-none");
        }
        break;
      case "admin":
        if (!userConnected || role != "admin") {
          element.classList.add("d-none");
        }
        break;
      case "client":
        if (!userConnected || role != "client") {
          element.classList.add("d-none");
        }
        break;
    }
  });
}

// Fonction contre les injections XSS
function sanitizeHtml(html) {
  const tempHtml = document.createElement("div");
  tempHtml.textContent = html;
  return tempHtml.innerHTML;
}

function getInfosUser() {
  let myHeaders = new Headers();
  myHeaders.append("X-AUTH-TOKEN", getToken());
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(apiUrl + "account/me", requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(
          "Erreur lors de la récupération des informations utilisateur."
        );
      }
    })
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("error", error));
}
