/**
 * LifyX Perpetual API Example
 * Infrastructure Provider: Orderly
 *
 * Retrieves market information for a selected perpetual symbol
 * and displays the available index price data.
 */

const SYMBOL = "PERP_BTC_USDC";

async function getIndexPrice(orderlyApi) {
  try {
    const data =
      await orderlyApi.public.getFuturesForOneMarket(SYMBOL);

    console.log("LifyX Perpetual Index Price");
    console.log("Infrastructure Provider: Orderly");
    console.log("Market:", SYMBOL);

    if (data?.data?.index_price !== undefined) {
      console.log("Index Price:", data.data.index_price);
    } else {
      console.log("Market Data:", data);
    }

    return data;
  } catch (error) {
    console.error(
      "Unable to retrieve LifyX Perpetual index price:"
    );
    console.error(error.message);
  }
}

export { getIndexPrice };
