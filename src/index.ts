import * as jose from 'jose';

import keyStore from './public-keys.json';

(async () => {
  const keys: {[kid: string]: jose.KeyLike} = {};
  for (const key of keyStore.keys) {
    keys[key.kid] = (await jose.importJWK(key)) as jose.KeyLike;
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
