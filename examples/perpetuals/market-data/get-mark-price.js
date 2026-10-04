/**
 * LifyX Perpetual API Example
 * Infrastructure Provider: Orderly
 *
 * Retrieves market information for a selected perpetual symbol
 * and displays the available mark price data.
 */

const SYMBOL = "PERP_BTC_USDC";

async function getMarkPrice(orderlyApi) {
  try {
    const data =
      await orderlyApi.public.getFuturesForOneMarket(SYMBOL);

    console.log("LifyX Perpetual Mark Price");
    console.log("Infrastructure Provider: Orderly");
    console.log("Market:", SYMBOL);

    if (data?.data?.mark_price !== undefined) {
      console.log("Mark Price:", data.data.mark_price);
    } else {
      console.log("Market Data:", data);
    }

    return data;
  } catch (error) {
    console.error(
      "Unable to retrieve LifyX Perpetual mark price:"
    );
    console.error(error.message);
  }
}

export { getMarkPrice };
