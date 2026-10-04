# LifyX API Examples

Developer examples and integration resources for LifyX Spot and Perpetual markets.

## Overview

This repository contains public developer examples for interacting with the LifyX trading ecosystem.

LifyX integrates specialized infrastructure providers across its trading stack:

- KalqiX infrastructure for Spot markets
- Orderly infrastructure for Perpetual markets

The examples in this repository demonstrate public market data workflows, trading information and developer integration patterns across both environments.

## Repository Structure

examples/
├── spot/
│   └── market-data/
└── perpetuals/
    └── market-data/

## LifyX Spot

LifyX Spot provides high-performance decentralized spot trading designed for speed, scale and privacy.

### Infrastructure Provider

KalqiX

### Core Capabilities

- Sub-10ms matching
- 250K+ transactions per second
- ZK-proven trades
- Private execution
- Professional order book trading
- High-performance market data
- API-ready trading infrastructure

### Spot Market Data Examples

Location:

`examples/spot/market-data/`

Available examples:

- `get-markets.js`
- `get-order-book.js`
- `get-price.js`
- `get-recent-trades.js`
- `get-server-time.js`

These examples demonstrate public Spot market data workflows using KalqiX infrastructure integrated within LifyX Spot.

## LifyX Perpetuals

LifyX Perpetuals provides decentralized perpetual trading across crypto and global markets through a self-custodial trading experience.

### Infrastructure Provider

Orderly

### Perpetual Market Data Examples

Location:

`examples/perpetuals/market-data/`

Available examples:

- `get-public-data.js`
- `get-markets.js`
- `get-order-book.js`
- `get-funding-rate.js`
- `get-funding-history.js`
- `get-futures-info.js`
- `get-futures-market.js`
- `get-mark-price.js`
- `get-index-price.js`
- `get-recent-trades.js`
- `get-kline.js`
- `get-market-stats.js`

These examples demonstrate public Perpetual market data workflows using Orderly infrastructure integrated within LifyX Perpetuals.

## Example Markets

Spot examples commonly use:

`cbBTC_USDC`

Perpetual examples commonly use:

`PERP_BTC_USDC`

Developers can replace these symbols with other supported LifyX markets.

## Developer Documentation

Official LifyX developer documentation:

https://github.com/LifyXHQ/lifyx-docs

## Changelog

Platform updates and release notes:

https://github.com/LifyXHQ/lifyx-changelog

## Security

Never expose:

- Private keys
- Seed phrases
- API secrets
- Wallet credentials
- Environment secrets

Public market data examples should not require sensitive wallet credentials.

Always use secure secret management for authenticated integrations.

## Official Links

Website: https://lifyx.exchange

Trading Platform: https://app.lifyx.exchange

X: https://x.com/LifyX_Exchange

LinkedIn: https://www.linkedin.com/company/lifyxexchange/

Telegram: https://t.me/lifyx_exchange

## Support

support@lifyx.exchange

---

© 2026 LifyX. All rights reserved.
