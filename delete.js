import Product from './product.js';
import { jsonData } from './products.js';
////////////////////////////

const deleteSearchForm = document.getElementById("deleteSearchForm");
const deleteProductID = document.getElementById("deleteProductId");
const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", async () => {
    const id = deleteProductID.value;

    if (!id) {
        alert("Please enter a Product ID.");
        return;
    }

    try {
        const product = new Product(jsonData);
        await product.deleteProduct(id);

        alert("Product deleted successfully!");
        deleteSearchForm.reset();

        history.replaceState(null, "", window.location.pathname);
    } catch (error) {
        console.error("Error deleting product:", error);
        alert("Product deletion failed: " + error.message);
    }
});
