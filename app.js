// Récupération de l'API publique

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((data) => {
    //   Création des divs parents
    const row1 = document.createElement("div");
    row1.classList.add("row");
    const row2 = document.createElement("div");
    row2.classList.add("row");
    //   Création des cartes et des balises pour les images
    data.slice(0, 10).forEach((photo, index) => {
      const card = document.createElement("div");
      card.classList.add("card", "col-lg-6");
      const img = document.createElement("img");
      img.src = photo.url;
      img.classList.add("card-img-top");
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = photo.title;
      //     Rattachement des éléments des cartes
      cardBody.appendChild(cardTitle);
      card.appendChild(img);
      card.appendChild(cardBody);
      //     Conditions pour séparer les colonnes
      if (index < 5) {
        row1.appendChild(card);
      } else {
        row2.appendChild(card);
      }
    });
    //   Rattacher les rows au body
    document.body.appendChild(row1);
    document.body.appendChild(row2);
  });
