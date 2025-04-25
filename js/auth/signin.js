// Implementer

const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnConnexion = document.getElementById("btn-connexion");
const formConnexion = document.getElementById("signinForm");

btnConnexion.addEventListener("click", checkCredentials);

function checkCredentials() {
  const dataform = new FormData(formConnexion);

  // Crée un nouvel objet Headers pour définir les en-têtes de la requête HTTP
  const myHeaders = new Headers();
  // Ajoute l'en-tête "Content-Type" avec la valeur "application/json"
  myHeaders.append("Content-Type", "application/json");

  // Convertit les données du formulaire en une chaîne JSON
  const raw = JSON.stringify({
    username: dataform.get("Email"),
    password: dataform.get("Mdp"),
  });

  // Configure les options de la requête HTTP
  const requestOptions = {
    // Méthode de la requête : "POST" pour envoyer des données au serveur
    method: "POST",
    // Définit les en-têtes de la requête en utilisant l'objet Headers créé précédemment
    headers: myHeaders,
    // Corps de la requête : les données JSON converties en chaîne
    body: raw,
    // Redirection à suivre en cas de besoin ("follow" suit automatiquement les redirections)
    redirect: "follow",
  };

  fetch(apiUrl + "login", requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
      }
    })
    .then((result) => {
      const token = result.apiToken;
      setToken(token);
      setCookie("role", result.roles[0], 7); // 7 days expiration
      window.location.replace("/");
    })
    .catch((error) => console.error(error));
}
