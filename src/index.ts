import axios from 'axios';
import * as jose from 'jose';

import {KeyStore} from './types';

console.log(process.env.jwks_uri);

(async () => {
  const r = await axios.get(process.env.jwks_uri!);
  const keyStore = r.data as KeyStore;
  console.log(keyStore);
  const keys: any = {};
  for (const key of keyStore.keys) {
    keys[key.kid] = await jose.importJWK(key);
  }

  let result = await jose.jwtVerify(
    process.env.assertion!,
    keys[process.env.assertion_kid!]
  );
  console.log(result);

  result = await jose.jwtVerify(
    process.env.client_assertion!,
    keys[process.env.client_assertion_kid!]
  );
  console.log(result);
})();
