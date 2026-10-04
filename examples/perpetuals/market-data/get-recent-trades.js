/**
 * LifyX Perpetual API Example
 * Infrastructure Provider: Orderly
 *
 * Retrieves the latest public trades
 * for a selected perpetual market.
 */

const SYMBOL = "PERP_BTC_USDC";
const LIMIT = 10;

async function getRecentTrades(orderlyApi) {
  try {
    const data =
      await orderlyApi.public.getMarketTrades(SYMBOL, LIMIT);

    console.log("LifyX Perpetual Recent Trades");
    console.log("Infrastructure Provider: Orderly");
    console.log("Market:", SYMBOL);
    console.log("Limit:", LIMIT);
    console.log(data);

    return data;
  } catch (error) {
    console.error(
      "Unable to retrieve LifyX Perpetual recent trades:"
    );
    console.error(error.message);
  }
}

export { getRecentTrades };
