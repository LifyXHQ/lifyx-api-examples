/**
 * LifyX Perpetual API Example
 * Infrastructure Provider: Orderly
 *
 * Basic public API request example using Orderly infrastructure.
 */

const API_BASE_URL = "https://api.orderly.org";

async function getPublicData() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/v1/public/liquidated_positions`
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    console.log("LifyX Perpetual API");
    console.log("Infrastructure Provider: Orderly");
    console.log(data);
  } catch (error) {
    console.error("Unable to retrieve LifyX Perpetual public data:");
    console.error(error.message);
  }
}

getPublicData();
