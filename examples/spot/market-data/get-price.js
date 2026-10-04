/**
 * LifyX Spot API Example
 * Infrastructure Provider: KalqiX
 *
 * Retrieves the current price for a selected Spot market.
 */

const API_BASE_URL = "https://api.kalqix.com/v1";
const TICKER = "cbBTC_USDC";

async function getPrice() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/markets/${TICKER}/price`
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    console.log("LifyX Spot Market Price");
    console.log("Infrastructure Provider: KalqiX");
    console.log("Market:", TICKER);
    console.log("Price:", data);
  } catch (error) {
    console.error("Unable to retrieve LifyX Spot market price:");
    console.error(error.message);
  }
}

getPrice();
