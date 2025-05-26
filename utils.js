 export function mapProductsDiv(divElement, products) {
  divElement.innerHTML = "";

  products.forEach(product => {

    const productDiv = document.createElement("div");
    productDiv.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4");


    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "h-100");


    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.src = product.image;
    image.alt = product.name;


    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "d-flex", "flex-column");

    const idP = document.createElement("p");
    idP.classList.add("card-text", "text-muted", "small");
    idP.innerText = `ID: ${product.id}`;


    const brandP = document.createElement("h6");
    brandP.classList.add("card-subtitle", "mb-2", "text-primary");
    brandP.innerText = product.brand;

    const nameP = document.createElement("h5");
    nameP.classList.add("card-title");
    nameP.innerText = product.name;

    const priceP = document.createElement("p");
    priceP.classList.add("card-text", "fw-bold");
    priceP.innerText = `Ksh ${product.price}`;


    const descriptionP = document.createElement("p");
    descriptionP.classList.add("card-text", "text-muted", "mt-auto"); 


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
