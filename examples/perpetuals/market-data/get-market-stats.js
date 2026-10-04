/**
 * LifyX Perpetual API Example
 * Infrastructure Provider: Orderly
 *
 * Retrieves 24h market statistics
 * for a selected perpetual market.
 */

const SYMBOL = "PERP_BTC_USDC";

async function getMarketStats(orderlyApi) {
  try {
    const data =
      await orderlyApi.public.getFuturesForOneMarket(SYMBOL);

    console.log("LifyX Perpetual Market Statistics");
    console.log("Infrastructure Provider: Orderly");
    console.log("Market:", SYMBOL);

    if (data?.data) {
      console.log("24h Volume:", data.data["24h_volume"]);
      console.log("24h Amount:", data.data["24h_amount"]);
      console.log("24h Open:", data.data["24h_open"]);
      console.log("24h High:", data.data["24h_high"]);
      console.log("24h Low:", data.data["24h_low"]);
      console.log("24h Close:", data.data["24h_close"]);
    } else {
      console.log("Market Data:", data);
    }

    return data;
  } catch (error) {
    console.error(
      "Unable to retrieve LifyX Perpetual market statistics:"
    );
    console.error(error.message);
  }
}

export { getMarketStats };
