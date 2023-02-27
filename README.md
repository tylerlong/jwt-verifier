# JWT Verifier

This tool could verify your JWT payloads on your computer (without talking to the remote JWT service server).
It is useful when the remote server complains that your assertions are invalid and you don't know why they are invalid.
Run this tool to (possibly) get a detailed error report.


## Setup

```
yarn install
```

Rename `.env.sample` to `.env` and specify credentials.


## Credentials explained

- **assertion**: signed assertion string
- **assertion_kid**: RSA key ID for assertion signing
- **client_assertion**: signed client assertion string
- **client_assertion_kid**: RSA key ID for client assertion signing
- **jwks_uri**: URI where RSA public keys are hosted, should be accessible by the current computer.


## Run

```
yarn test
```
