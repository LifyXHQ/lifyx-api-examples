/**
 * LifyX Perpetual API Example
 * Infrastructure Provider: Orderly
 *
 * Retrieves information for a selected perpetual market
 * using the official Orderly SDK workflow.
 */

const SYMBOL = "PERP_BTC_USDC";

async function getFuturesMarket(orderlyApi) {
  try {
    const data =
      await orderlyApi.public.getFuturesForOneMarket(SYMBOL);

    console.log("LifyX Perpetual Market");
    console.log("Infrastructure Provider: Orderly");
    console.log("Market:", SYMBOL);
    console.log(data);

    return data;
  } catch (error) {
    console.error(
      "Unable to retrieve LifyX Perpetual market information:"
    );
    console.error(error.message);
  }
}

export { getFuturesMarket };
