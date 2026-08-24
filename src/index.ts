import assert from "node:assert/strict";
import * as jose from "jose";

import keyStore from "./public-keys.json" with { type: "json" };

(async () => {
	const {
		assertion,
		assertion_kid: assertionKid,
		client_assertion: clientAssertion,
		client_assertion_kid: clientAssertionKid,
	} = process.env;
	assert(
		assertion && assertionKid && clientAssertion && clientAssertionKid,
		"Missing required credentials",
	);

	const keys: Record<string, Awaited<ReturnType<typeof jose.importJWK>>> = {};
	for (const key of keyStore.keys) {
		keys[key.kid] = await jose.importJWK(key);
	}

	let result = await jose.jwtVerify(assertion, keys[assertionKid]);
	console.log(result);

	result = await jose.jwtVerify(clientAssertion, keys[clientAssertionKid]);
	console.log(result);
})();
