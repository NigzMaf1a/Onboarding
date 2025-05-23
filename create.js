import Product from './product.js';
import { jsonData } from './products.js';
const createForm = document.getElementById("productForm");
const productID = document.getElementById("productId");
const productBrand = document.getElementById("productBrand");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productDescription = document.getElementById("productDescription");
const productImage = document.getElementById("productImage");


createForm.addEventListener("submit", async (e) => {
    try {
            e.preventDefault();
            const product = new Product(jsonData);
    
            const id = productID.value.trim();
            const brand = productBrand.value.trim();
            const name = productName.value.trim();
            const price = productPrice.value.trim();
            const description = productDescription.value.trim();
            const image = productImage.value.trim();
            
            // Validate form inputs
            if (!id || !brand || !name || !price || !description || !image) {
                window.alert("Please fill in all fields.");
                return;
            }
            product.createProduct(id, brand, name, price, description, image)
                .then(() => {
                    window.alert("Product created successfully!");
                    createForm.reset();
                })
                .catch((error) => {
                    console.error("Error creating product:", error);
                    window.alert("Product creation failed: " + error.message);
                });
    } catch (error){
            console.error("Error creating product:", error);
            window.alert("Product creation failed: " + error.message);
    }
});

