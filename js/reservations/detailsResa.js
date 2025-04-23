// Implémenter

const inputNbDeConvives = document.getElementById("NbConvivesInput");
const inputDate = document.getElementById("DateInput");
const inputHeure = document.getElementById("selectHour");
const btnUpdateReservation = document.getElementById("btn-update-reservation");

inputNbDeConvives.addEventListener("keyup", validateForm);
inputDate.addEventListener("change", validateForm);
inputHeure.addEventListener("change", validateForm);

function validateForm() {
  const nbDeConvivesOk = validateRequired(inputNbDeConvives);
  const dateOk = validateRequired(inputDate);
  const heureOk = validateRequired(inputHeure);

  if (nbDeConvivesOk && dateOk && heureOk) {
    btnUpdateReservation.disabled = false;
  } else {
    btnUpdateReservation.disabled = true;
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
