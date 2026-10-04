/**
 * LifyX Perpetual API Example
 * Infrastructure Provider: Orderly
 *
 * Retrieves funding rate history for a selected perpetual market
 * using the official Orderly SDK workflow.
 */

const SYMBOL = "PERP_BTC_USDC";

async function getFundingHistory(orderlyApi) {
  try {
    const payload = {
      symbol: SYMBOL
    };

    const data =
      await orderlyApi.public.getFundingRateHistoryForOneMarket(payload);

    console.log("LifyX Perpetual Funding History");
    console.log("Infrastructure Provider: Orderly");
    console.log("Market:", SYMBOL);
    console.log(data);

    return data;
  } catch (error) {
    console.error(
      "Unable to retrieve LifyX Perpetual funding history:"
    );
    console.error(error.message);
  }
}

export { getFundingHistory };
