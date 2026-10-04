/**
 * LifyX Perpetual API Example
 * Infrastructure Provider: Orderly
 *
 * Retrieves the public order book
 * for a selected perpetual market.
 */

const API_BASE_URL = "https://api.orderly.org";
const SYMBOL = "PERP_ETH_USDC";

async function getOrderBook() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/v1/public/orderbook/${SYMBOL}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    console.log("LifyX Perpetual Order Book");
    console.log("Infrastructure Provider: Orderly");
    console.log("Market:", SYMBOL);
    console.log(data);
  } catch (error) {
    console.error("Unable to retrieve LifyX Perpetual order book:");
    console.error(error.message);
  }
}

getOrderBook();
