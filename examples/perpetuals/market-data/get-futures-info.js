/**
 * LifyX Perpetual API Example
 * Infrastructure Provider: Orderly
 *
 * Retrieves futures market information
 * using the official Orderly SDK workflow.
 */

async function getFuturesInfo(orderlyApi) {
  try {
    const data =
      await orderlyApi.public.getFuturesInfoForAllMarkets();

    console.log("LifyX Perpetual Futures Markets");
    console.log("Infrastructure Provider: Orderly");
    console.log(data);

    return data;
  } catch (error) {
    console.error(
      "Unable to retrieve LifyX Perpetual futures information:"
    );
    console.error(error.message);
  }
}

export { getFuturesInfo };
