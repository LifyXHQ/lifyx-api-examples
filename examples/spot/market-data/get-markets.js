/**
 * LifyX Spot API Example
 * Infrastructure Provider: KalqiX
 *
 * Retrieves the list of available Spot markets.
 */

const API_BASE_URL = "https://api.kalqix.com/v1";

async function getMarkets() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/markets`
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    console.log("LifyX Spot Markets");
    console.log("Infrastructure Provider: KalqiX");
    console.log(data);
  } catch (error) {
    console.error("Unable to retrieve LifyX Spot markets:");
    console.error(error.message);
  }
}

getMarkets();
