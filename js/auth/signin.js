// Implementer

const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnConnexion = document.getElementById("btn-connexion");

btnConnexion.addEventListener("click", checkCredentials);

function checkCredentials() {
  // Ici, il faudra appeler l'API pour vérifier les crédentials en BDD

  if (mailInput.value == "test@mail.com" && passwordInput.value == "123") {
    // Il faudra récupérer le vrai token
    const token = "sdufjfsdvhfijvefijhczqixjqikjcsdijvhsijdzidfjcvisdfjzpoapzd";
    setToken(token);

    // Placer ce token en cookie

    setCookie("role", "client", 7); // 7 days expiration
    window.location.replace("/");
  } else {
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }
}
