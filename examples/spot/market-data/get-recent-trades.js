/**
 * LifyX Spot API Example
 * Infrastructure Provider: KalqiX
 *
 * Retrieves recent public trades for a selected Spot market.
 */

const API_BASE_URL = "https://api.kalqix.com/v1";
const TICKER = "cbBTC_USDC";

async function getRecentTrades() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/markets/${TICKER}/trades`
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    console.log("LifyX Spot Recent Trades");
    console.log("Infrastructure Provider: KalqiX");
    console.log("Market:", TICKER);
    console.log(data);
  } catch (error) {
    console.error("Unable to retrieve LifyX Spot recent trades:");
    console.error(error.message);
  }
}

getRecentTrades();
