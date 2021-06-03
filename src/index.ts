import axios from 'axios';
import {KeyStore} from './types';

console.log(process.env.jwks_uri);

(async () => {
  const r = await axios.get(process.env.jwks_uri!);
  const keyStore = r.data as KeyStore;
  console.log(keyStore);
})();
