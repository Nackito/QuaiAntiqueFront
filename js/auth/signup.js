//Implémenter

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputPasswordConfirm = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");
const formInscription = document.getElementById("formulaireInscription");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputPasswordConfirm.addEventListener("keyup", validateForm);

btnValidation.addEventListener("click", inscrireUtilisateur);

function validateForm() {
  const nomOk = validateRequired(inputNom);
  const prenomOk = validateRequired(inputPrenom);
  const mailOk = validateMail(inputEmail);
  const passwordOk = validatePassword(inputPassword);
  const passwordConfirmOk = validateConfirmationPassword(
    inputPassword,
    inputPasswordConfirm
  );

  if (nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk) {
    btnValidation.disabled = false;
  } else {
    btnValidation.disabled = true;
  }
}

function validateMail(input) {
  //Définir mon regex pour valider l'email
  const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailUser = input.value;
  if (emailUser.match(emailregex)) {
    inputEmail.classList.add("is-valid");
    inputEmail.classList.remove("is-invalid");
    return true;
  } else {
    inputEmail.classList.remove("is-valid");
    inputEmail.classList.add("is-invalid");
    return false;
  }
}

function validatePassword(input) {
  //Définir mon regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const passwordUser = input.value;
  if (passwordUser.match(passwordRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd) {
  if (inputPwd.value == inputConfirmPwd.value) {
    inputConfirmPwd.classList.add("is-valid");
    inputConfirmPwd.classList.remove("is-invalid");
    return true;
  } else {
    inputConfirmPwd.classList.add("is-invalid");
    inputConfirmPwd.classList.remove("is-valid");
    return false;
  }
}

function validateRequired(input) {
  if (input.value != "") {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function inscrireUtilisateur() {
  // Créer un nouvel objet FormData à partir du formulaire contenu dans la variable "formInscription"
  const dataform = new FormData(formInscription);

  // Crée un nouvel objet Headers pour définir les en-têtes de la requête HTTP
  const myHeaders = new Headers();
  // Ajoute l'en-tête "Content-Type" avec la valeur "application/json"
  myHeaders.append("Content-Type", "application/json");

  // Convertit les données du formulaire en une chaîne JSON
  const raw = JSON.stringify({
    firstName: dataform.get("Prenom"),
    lastName: dataform.get("Nom"),
    email: dataform.get("Email"),
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

  fetch("http://127.0.0.1:8000/api/registration", requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert(
          "Erreur lors de l'inscription. Veuillez vérifier vos informations."
        );
      }
    })
    .then((result) => {
      alert(
        "Félicitations " + dataform.get("Prenom") + " ! Vous êtes inscrit !"
      );
      document.location.href = "/signin";
      //console.log(result);
    })
    .catch((error) => console.error(error));
}
