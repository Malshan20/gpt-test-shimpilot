# Shimpilot Live Sandbox — Scenario Matrix

This repository is intentionally outdated. It is a disposable public target for Shimpilot scans, migrations and Draft PR tests.

## Stripe

- `charges.create` + `charges.capture` — `src/legacy/stripe/charges.ts`
- `customers.createSource` + `customers.update` — `src/legacy/stripe/customers.ts`
- `paymentIntents.create` + `paymentIntents.confirm` — `src/legacy/stripe/payment-intents.ts`
- `subscriptions.create` + `subscriptions.update` + `invoices.pay` — `src/legacy/stripe/subscriptions.ts`
- `checkout.sessions.create` + `webhooks.constructEvent` — `src/legacy/stripe/checkout.ts`
- `refunds.create` + `balance.retrieve` + `terminal.readers.processPaymentIntent` — `src/legacy/stripe/operations.ts`
- `charges.list` — `src/legacy/stripe/unsupported-control.ts` (deliberate coverage-control case)

## OpenAI

- SDK v3 `Configuration` / `OpenAIApi`
- `createChatCompletion` with `gpt-3.5-turbo-0301`
- `createCompletion` with `text-davinci-003`
- `createEmbedding` with `text-embedding-ada-002`

## Expected Shimpilot flow

1. Clone repository.
2. Detect provider packages and call sites.
3. Persist findings / API map.
4. Correlate supported provider changes.
5. Generate focused migration patches.
6. Apply deterministic validation and targeted re-scan.
7. Block incomplete patches.
8. Create a Draft PR only after required gates pass.

The exact number of findings depends on the rules currently implemented in Shimpilot. Do not treat unsupported patterns as safe.
