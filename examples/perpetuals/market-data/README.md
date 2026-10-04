# LifyX Perpetual Market Data

Public developer resources for working with LifyX Perpetual market data.

## Overview

LifyX Perpetuals provides decentralized perpetual trading across crypto and global markets through a self-custodial trading experience.

LifyX Perpetuals integrates Orderly infrastructure for perpetual market data, liquidity access and trading functionality.

This directory contains public developer examples for retrieving and working with LifyX Perpetual market information.

## Infrastructure Provider

Orderly

## Available Examples

### Markets

`get-markets.js`

Retrieves available perpetual markets and trading rules.

### Futures Information

`get-futures-info.js`

Retrieves information for all available perpetual markets.

### Single Market Information

`get-futures-market.js`

Retrieves information for a selected perpetual market.

### Order Book

`get-order-book.js`

Retrieves public bid and ask data for a selected perpetual market.

### Recent Trades

`get-recent-trades.js`

Retrieves recent public trades for a selected perpetual market.

### Funding Rate

`get-funding-rate.js`

Retrieves the predicted funding rate for a selected perpetual market.

### Funding History

`get-funding-history.js`

Retrieves historical funding rate information.

### Mark Price

`get-mark-price.js`

Retrieves the mark price for a selected perpetual market.

### Index Price

`get-index-price.js`

Retrieves the index price for a selected perpetual market.

### Kline Data

`get-kline.js`

Retrieves candlestick market data.

### Market Statistics

`get-market-stats.js`

Retrieves available 24-hour market statistics.

### Public API Example

`get-public-data.js`

Basic example for interacting with public Orderly infrastructure.

## Example Market

Most examples use:

`PERP_BTC_USDC`

Developers can replace the symbol with another supported LifyX Perpetual market.

## Security

Public market data examples should never require:

- Private keys
- Seed phrases
- Wallet credentials

Never expose private keys, API secrets or sensitive environment variables in public source code.

## Documentation

https://github.com/LifyXHQ/lifyx-docs

## Official Links

Website: https://lifyx.exchange

Trading Platform: https://dex.lifyx.exchange

Support: support@lifyx.exchange

---

© 2026 LifyX. All rights reserved.
