export default class Product {
    constructor(jsonData) {
        this.jsonData = jsonData;
    }

    async getProducts() {
        try {
            const jsonObject = JSON.parse(this.jsonData);
            if (Array.isArray(jsonObject.data)) {
                return jsonObject.data;
            } else {
                throw new Error("The 'data' field is not an array of objects.");
            }
        } catch (error) {
            console.error("Failed to get products:", error);
            throw new Error("Failed to get products.");
        }
    }

    async updateProducts(products) {
        try {
            this.jsonData = JSON.stringify({ data: products }, null, 2);
        } catch (error) {
            console.error("Failed to update products:", error);
            throw new Error("Failed to update products.");
        }
    }
    async createProduct(id, brand, name, price, description, image){
        try {
            const products = await this.getProducts();

             const existingProduct = products.find(product => product.id === Number(id));
            if (existingProduct) {
                console.error(`Product with id ${id} already exists.`);
                throw new Error(`Product with id ${id} already exists.`);
            }
            const newProduct = { id, brand, name, price, description, image };
            products.push(newProduct);
            await this.updateProducts(products);
        } catch (error) {
            console.error("Failed to create product:", error);
            throw new Error("Failed to create product.");
        }
    }

    async updateProduct(id, brand, name, price, description, image){
        try {
            //This method updates an existing product in the products list
            const products = await this.getProducts();

            // Find the product with the matching id
            const thisProduct = products.find(product => product.id === Number(id));

            if (thisProduct) {
                // Update the product properties
                thisProduct.brand = brand;
                thisProduct.name = name;
                thisProduct.price = price;
                thisProduct.description = description;
                thisProduct.image = image;
            } else {
                console.error(`Product with id ${id} not found.`);
                throw new Error(`Product with id ${id} not found.`);
            }

            // Update the products list
            await this.updateProducts(products);
        } catch (error) {
            console.error("Failed to update product.");
            throw new Error("Failed to update product.");
        }
    }
    async deleteProduct(id) {
        try {
            //This method deletes a product from the products list
            const products = await this.getProducts();
            console.log("Products fetched successfully for deleting");

            // Find the index of the product with the matching id
            const index = products.findIndex(product => product.id === Number(id));

            if (index !== -1) {
            products.splice(index, 1);
            await this.updateProducts(products);
            console.log(`Product with ID ${id} deleted successfully.`);
            } else {
            console.error(`Product with ID ${id} not found.`);
            throw new Error(`Product with ID ${id} not found.`);
            }
        } catch (error) {
            console.error("Failed to delete product:", error);
            throw new Error("Failed to delete product.");
        }
    }
}