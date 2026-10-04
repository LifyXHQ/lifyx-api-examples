/**
 * LifyX Perpetual API Example
 * Infrastructure Provider: Orderly
 *
 * Example structure for retrieving the predicted funding rate
 * for a selected perpetual market using Orderly infrastructure.
 */

const SYMBOL = "PERP_BTC_USDC";

/**
 * This example mirrors the public funding-rate workflow
 * exposed by the official Orderly SDK:
 *
 * api.public.getPredictedFundingRateForOne(SYMBOL)
 *
 * See:
 * https://github.com/OrderlyNetwork/orderly-sdk-js
 */

async function getFundingRate(orderlyApi) {
  try {
    const data =
      await orderlyApi.public.getPredictedFundingRateForOne(SYMBOL);

    console.log("LifyX Perpetual Funding Rate");
    console.log("Infrastructure Provider: Orderly");
    console.log("Market:", SYMBOL);
    console.log(data);

    return data;
  } catch (error) {
    console.error(
      "Unable to retrieve LifyX Perpetual funding rate:"
    );
    console.error(error.message);
  }
}

export { getFundingRate };
