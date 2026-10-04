/**
 * LifyX Spot API Example
 * Infrastructure Provider: KalqiX
 *
 * Retrieves the current server time
 * from the LifyX Spot infrastructure.
 */

const API_BASE_URL = "https://api.kalqix.com/v1";

async function getServerTime() {
  try {
    const response = await fetch(`${API_BASE_URL}/time`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    console.log("LifyX Spot API");
    console.log("Infrastructure Provider: KalqiX");
    console.log("Server Time:", data);
  } catch (error) {
    console.error("Unable to retrieve LifyX Spot server time:");
    console.error(error.message);
  }
}

getServerTime();
