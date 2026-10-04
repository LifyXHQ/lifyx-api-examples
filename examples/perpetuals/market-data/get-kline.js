/**
 * LifyX Perpetual API Example
 * Infrastructure Provider: Orderly
 *
 * Retrieves candlestick (Kline) data
 * for a selected perpetual market.
 */

const SYMBOL = "PERP_BTC_USDC";
const TYPE = "1m";
const LIMIT = 100;

async function getKline(orderlyApi) {
  try {
    const data =
      await orderlyApi.public.getKline(
        SYMBOL,
        TYPE,
        LIMIT
      );

    console.log("LifyX Perpetual Kline Data");
    console.log("Infrastructure Provider: Orderly");
    console.log("Market:", SYMBOL);
    console.log("Interval:", TYPE);
    console.log("Limit:", LIMIT);
    console.log(data);

    return data;
  } catch (error) {
    console.error(
      "Unable to retrieve LifyX Perpetual Kline data:"
    );
    console.error(error.message);
  }
}

export { getKline };
