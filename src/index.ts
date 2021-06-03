import axios from 'axios';
import {jwtVerify} from 'jose/jwt/verify';
import parseJwk from 'jose/webcrypto/jwk/parse';

import {KeyStore} from './types';

console.log(process.env.jwks_uri);

(async () => {
  const r = await axios.get(process.env.jwks_uri!);
  const keyStore = r.data as KeyStore;
  console.log(keyStore);
  const keys: any = {};
  for (const key of keyStore.keys) {
    keys[key.kid] = await parseJwk(key);
  }

  const {payload, protectedHeader} = await jwtVerify(
    process.env.assertion!,
    keys[process.env.assertion_kid!]
  );

  console.log(payload, protectedHeader);
})();

/*

const assertion = await new SignJWT(jwtData.body)
    .setProtectedHeader(jwtData.header)
    .sign(await parseJwk(keys.privateKey1));

*/
