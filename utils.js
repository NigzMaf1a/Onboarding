 export function mapProductsDiv(divElement, products) {
  divElement.innerHTML = ""; // clear previous

  products.forEach(product => {
    // Create the main card div with column classes and mb for spacing
    const productDiv = document.createElement("div");
    productDiv.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4");

    // Create the card container
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "h-100");

    // Image container with card-img-top class
    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.src = product.image;
    image.alt = product.name;

    // Card body to hold text
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "d-flex", "flex-column");

    // ID (small text)
    const idP = document.createElement("p");
    idP.classList.add("card-text", "text-muted", "small");
    idP.innerText = `ID: ${product.id}`;

    // Brand (maybe a subtitle)
    const brandP = document.createElement("h6");
    brandP.classList.add("card-subtitle", "mb-2", "text-primary");
    brandP.innerText = product.brand;

    // Name (main title)
    const nameP = document.createElement("h5");
    nameP.classList.add("card-title");
    nameP.innerText = product.name;

    // Price (bold)
    const priceP = document.createElement("p");
    priceP.classList.add("card-text", "fw-bold");
    priceP.innerText = `Ksh ${product.price}`;

    // Description (small, muted)
    const descriptionP = document.createElement("p");
    descriptionP.classList.add("card-text", "text-muted", "mt-auto"); 
    // mt-auto pushes description down so price & name stay near top if flex column

    descriptionP.innerText = product.description;

    // Append children
    cardBody.appendChild(idP);
    cardBody.appendChild(brandP);
    cardBody.appendChild(nameP);
    cardBody.appendChild(priceP);
    cardBody.appendChild(descriptionP);

    cardDiv.appendChild(image);
    cardDiv.appendChild(cardBody);

    productDiv.appendChild(cardDiv);

    divElement.appendChild(productDiv);
  });
}
