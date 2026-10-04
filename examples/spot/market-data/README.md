# LifyX Spot Market Data

Public developer resources for working with LifyX Spot market data.

## Overview

LifyX Spot provides high-performance decentralized spot trading designed for speed, scale and privacy.

LifyX Spot integrates KalqiX infrastructure for spot market execution, market data and trading functionality.

This directory contains public developer examples for retrieving and working with LifyX Spot market information.

## Infrastructure Provider

KalqiX

## Spot Capabilities

- Sub-10ms matching
- 250K+ transactions per second
- ZK-proven trades
- Private execution
- Professional order book trading
- High-performance market data
- API-ready trading infrastructure

## Available Examples

### Markets

`get-markets.js`

Retrieves the list of available Spot markets.

### Order Book

`get-order-book.js`

Retrieves public bid and ask data for a selected Spot market.

### Market Price

`get-price.js`

Retrieves the current price for a selected Spot market.

### Recent Trades

`get-recent-trades.js`

Retrieves recent public trades for a selected Spot market.

### Server Time

`get-server-time.js`

Retrieves the current server time from the Spot trading infrastructure.

## Example Market

Most market-specific examples use:

`cbBTC_USDC`

Developers can replace the ticker with another supported LifyX Spot market.

## API Infrastructure

Production API:

`https://api.kalqix.com/v1`

Examples in this directory use public KalqiX infrastructure integrated within LifyX Spot.

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

Trading Platform: https://app.lifyx.exchange

Support: support@lifyx.exchange

---

© 2026 LifyX. All rights reserved.
