const dotenv = require("dotenv");
dotenv.config();

let token = process.env.SHOPIFY_ACCESS_TOKEN;

const createProduct = async () => {
  const url = `${process.env.SHOPIFY_STORE_URL}/admin/api/2024-10/products.json`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": token
    }
  })

  let data = await response.json();
  console.log(data);
}

createProduct();