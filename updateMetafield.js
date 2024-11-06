// updateMetafield.js

require('dotenv').config();
const { Shopify } = require('@shopify/shopify-api');

// Initialize the Shopify API client
const shopify = new Shopify.Clients.Rest(process.env.SHOPIFY_STORE_URL, process.env.SHOPIFY_ACCESS_TOKEN);

async function updateMetafield() {
  try {
    const metafield = new shopify.rest.Metafield({ session: { accessToken: process.env.SHOPIFY_ACCESS_TOKEN } });
    metafield.product_id = 632910392; // Replace with your product ID
    metafield.id = 1001077698; // Replace with your metafield ID
    metafield.value = "having fun"; // Replace with the new value
    metafield.type = "single_line_text_field";

    await metafield.save({
      update: true,
    });

    console.log('Metafield updated successfully!');
  } catch (error) {
    console.error('Failed to update metafield:', error);
  }
}

updateMetafield();
