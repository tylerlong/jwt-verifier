# JWT Verifier


## Setup

```
yarn install
```

Rename `.env.sample` to `.env` and specify credentials.


## credentials explained

- assertion: signed assertion string
- assertion_kid: RSA key ID for assertion signing
- client_assertion: signed client assertion string
- client_assertion_kid: RSA key ID for client assertion signing
- jwks_uri: URI where RSA public keys are hosted, should be accessible by the current computer.


## Run

```
yarn test
```
