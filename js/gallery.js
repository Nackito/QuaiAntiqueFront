const galerieImages = document.getElementById("allImages");

// Récupérer les informations des images depuis l'API
let monImage = getImage("titre", "./images/pancakes-2291908_1280.jpg");

galerieImages.innerHTML = monImage;

function getImage(titre, urlImage) {
  titre = sanitizeHtml(titre);
  urlImage = sanitizeHtml(urlImage);
  return ` <div class="col p-3">
      <div class="image-card text-white">
        <img
          src="${urlImage}"
          alt="Image de la galerie"
          class="rounded w-100"
        />
        <p class="titre-image">${titre}</p>
        <div class="action-image-buttons">
          <button
            class="btn btn-outline-light"
            data-bs-toggle="modal"
            data-bs-target="#EditionPhotoModal"
            data-show="admin"
          >
            <i class="bi bi-pencil-square"></i>
          </button>
          <button class="btn btn-outline-light" data-bs-toggle="modal"
          data-bs-target="#DeletePhotoModal" data-show="admin">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div> `;
}
