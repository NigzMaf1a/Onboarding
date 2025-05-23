import Product from './product.js';
import { jsonData } from './products.js';
const updateForm = document.getElementById("updateForm");
const updateProductId = document.getElementById("updateProductId");
const updateProductBrand = document.getElementById("updateProductBrand");
const updateProductName = document.getElementById("updateProductName");
const updateProductPrice = document.getElementById("updateProductPrice");
const updateProductDescription = document.getElementById("updateProductDescription");
const updateProductImage = document.getElementById("updateProductImage");
const updateBtn = document.getElementById("updateBtn");

updateBtn.addEventListener("click", async () => {
    const id = updateProductId.value.trim();
    const brand = updateProductBrand.value.trim();
    const name = updateProductName.value.trim();
    const price = updateProductPrice.value.trim();
    const description = updateProductDescription.value;
    const image = updateProductImage.value.trim();

    if (!id || !brand || !name || !price || !description || !image) {
        alert("Please fill in all fields.");
        return;
    }
    try {
        const product = new Product(jsonData);
        await product.updateProduct(id, brand, name, price, description, image);

        alert("Product updated successfully!");
        updateForm.reset();
        history.replaceState(null, "", window.location.pathname);
    } catch (error) {
        console.error("Error updating product:", error);
        alert("Product update failed: " + error.message);
    }
});
