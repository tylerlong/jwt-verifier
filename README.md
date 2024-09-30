# JWT Verifier

This tool could verify your JWT payloads on your computer (without talking to the remote JWT service server).
It is useful when the remote server complains that your assertions are invalid and you don't know why they are invalid.
Run this tool to (possibly) get a detailed error report.


## Setup

```
yarn install
```

Rename `.env.sample` to `.env` and specify credentials.

Edit `src/public-keys.json` to replace its content with your public keys.

## Credentials explained

- **assertion**: signed assertion string
- **assertion_kid**: RSA key ID for assertion signing
- **client_assertion**: signed client assertion string
- **client_assertion_kid**: RSA key ID for client assertion signing


## Run

```
yarn test
```
