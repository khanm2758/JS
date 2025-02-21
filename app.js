const cardData = [
  {
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    title: "Nature View",
    description: "A beautiful landscape with mountains and clear skies.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    title: "Starry Night",
    description: "A mesmerizing view of the night sky full of stars.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    title: "Forest Path",
    description: "A serene path through a lush green forest.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    title: "Ocean Waves",
    description: "Gentle waves crashing on a sandy beach.",
  },
];

// Function to create cards dynamically
function createCards() {
  const container = document.getElementById("cardContainer");

  cardData.forEach((card) => {
    // Create card element
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    // Create image element
    const image = document.createElement("img");
    image.className = "card-image";
    image.src = card.image;
    image.alt = card.title;

    // Create content container
    const content = document.createElement("div");
    content.className = "card-content";

    // Create title
    const title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = card.title;

    // Create description
    const description = document.createElement("p");
    description.className = "card-description";
    description.textContent = card.description;

    // Assemble the card
    content.appendChild(title);
    content.appendChild(description);
    cardElement.appendChild(image);
    cardElement.appendChild(content);

    // Add card to container
    container.appendChild(cardElement);
  });
}

// Call the function when the page loads
window.onload = createCards;

// ||||||||| [Use here for loop] ||||||||||||

// const mainContainer = document.getElementById("cardContainer");

// let i = 0;

// for (; i < cardData.length; i++) {
//   const cardElement = document.createElement("div");
//   cardElement.className = "card";

//   const imgElement = document.createElement("img");
//   imgElement.className = "card-image";
//   imgElement.src = cardData[i].image;
//   imgElement.alt = cardData[i].title;

//   const content = document.createElement("div");
//   content.className = "card-content";

//   const title = document.createElement("h2");
//   title.className = "card-title";
//   title.textContent = cardData[i].title;

//   const description = document.createElement("p");
//   description.className = "card-description";
//   description.textContent = cardData[i].description;

//   content.appendChild(title);
//   content.appendChild(description);
//   cardElement.appendChild(imgElement);
//   cardElement.appendChild(content);

//   mainContainer.appendChild(cardElement);
// }

// ||||||||| [Use here forEach loop] ||||||||||||

// let cardMaterials = cardData.forEach((cardData) => {

//   const cardElement = document.createElement("div");
//   cardElement.className = "card";

//   const imgElement = document.createElement("img");
//   imgElement.className = "card-image";
//   imgElement.src = cardData.image;
//   imgElement.alt = cardData.title;

//   const content = document.createElement("div");
//   content.className = "card-content";

//   const title = document.createElement("h2");
//   title.className = "card-title";
//   title.textContent = cardData.title;

//   const description = document.createElement("p");
//   description.className = "card-description";
//   description.textContent = cardData.description;

//   content.appendChild(title);
//   content.appendChild(description);
//   cardElement.appendChild(imgElement);
//   cardElement.appendChild(content);

//   mainContainer.appendChild(cardElement);
//   console.log(mainContainer);
// });
