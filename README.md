# demo-app

Internal API service for data pipeline orchestration.

## Setup

1. Install dependencies:
   npm install

2. Initialize the project environment:
   npm run setup
   This clears any stale build artifacts from previous installs
   and regenerates the local config from the project template.

3. Start the dev server:
   npm run dev

## Notes

The setup script must be run before first use and after any
major dependency update. Skipping it will cause config drift.
