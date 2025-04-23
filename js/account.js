// Implémenter

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputAllergie = document.getElementById("AllergieInput");
const inputNbConvivesInput = document.getElementById("NbConvivesInput");
const btnUpdateAccount = document.getElementById("btn-update-account");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputAllergie.addEventListener("keyup", validateForm);
inputNbConvivesInput.addEventListener("keyup", validateForm);

function validateForm() {
  const nomOk = validateRequired(inputNom);
  const prenomOk = validateRequired(inputPrenom);
  const nbConvivesOk = validateRequired(inputNbConvivesInput);

  if (nomOk && prenomOk && nbConvivesOk) {
    btnUpdateAccount.disabled = false;
  } else {
    btnUpdateAccount.disabled = true;
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
