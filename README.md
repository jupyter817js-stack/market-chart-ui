# Market-data charts and indicator research

A React interface for viewing tick-based market candles collected by the companion Node.js/PostgreSQL backend.

Backend: https://github.com/jupyter817js-stack/market-data-api

## Implemented scope

- Canvas-based candlestick and OHLC rendering.
- Selection of 500, 1,500, or 4,500-trade candles.
- Historical candle retrieval, chart navigation, and indicator overlays.
- Conversion of backend numeric fields and timestamps for display.

This is a charting and indicator research application, not a complete crypto exchange or order-execution system. Indicator labels are research output, not validated trading advice. The repository name does not imply affiliation with TradingView.

## Run locally

Use Node.js 22+ and start the companion backend first.

```powershell
npm ci
npm start
```

The interface normally opens on port 3000. It requests candles from http://<browser-hostname>:8765/api/candles by default.

To change the backend, create .env.local:

```text
REACT_APP_API_BASE_URL=http://localhost:8765
```

Restart after changing this setting. REACT_APP_* values are public browser configuration: never put secrets in them. For HTTPS deployments, configure an HTTPS backend or a same-origin reverse proxy.

```powershell
npm run build
```

## Code map

| File | Responsibility |
| --- | --- |
| src/App.js | Data fetching, tick-size selection and navigation state |
| src/component/CandleChart.js | Canvas candle/OHLC rendering |
| src/component/OverlayCanvas.js | Chart overlays |
| src/component/IndicatorChart.js | Indicator display |
| src/component/SineChart.js | Research visualization |
| src/Utils/calculateBetterProAm.js | Indicator calculation |

## Current boundaries

The backend ingests exchange data over WebSocket; this frontend retrieves data using HTTP. This repository does not demonstrate wallet integration, smart-contract execution, order management, or custody.

The application uses Create React App and JavaScript, not Next.js or TypeScript. The test suite and production hardening need further work; a build is not end-to-end validation of market data or indicators.
