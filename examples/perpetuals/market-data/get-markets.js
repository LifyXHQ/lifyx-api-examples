/**
 * LifyX Perpetual API Example
 * Infrastructure Provider: Orderly
 *
 * Retrieves the list of available perpetual markets
 * and trading rules supported by the Orderly infrastructure.
 */

const API_BASE_URL = "https://api.orderly.org";

async function getMarkets() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/v1/public/info`
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    console.log("LifyX Perpetual Markets");
    console.log("Infrastructure Provider: Orderly");
    console.log(data);
  } catch (error) {
    console.error("Unable to retrieve LifyX Perpetual markets:");
    console.error(error.message);
  }
}

getMarkets();
