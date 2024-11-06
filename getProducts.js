// getAllProducts.js

require('dotenv').config();
const { Shopify } = require('@shopify/shopify-api');

// Initialize the Shopify API client
const shopify = new Shopify.Clients.Rest(process.env.SHOPIFY_STORE_URL, process.env.SHOPIFY_ACCESS_TOKEN);

async function getAllProducts() {
  try {
    // Fetch all products
    const response = await shopify.get({
      path: 'products',
    });

    // Check if response data exists and log it
    if (response.body && response.body.products) {
      console.log('Products:', response.body.products);
    } else {
      console.log('No products found.');
    }
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}

getAllProducts();
