# Shimpilot migration sandbox

**Inspect real, intentionally outdated Stripe, OpenAI, and Supabase SDK usage before connecting your own code.** This public repository is a disposable test fixture for [Shimpilot](https://shimpilot.com). It contains no live API keys and makes no provider calls during a scan.

**[Run the public scan →](https://shimpilot.com/scan/Malshan20/gpt-test-shimpilot)** · [Browse the fixture code](src/legacy) · [Read Shimpilot security information](https://shimpilot.com/security)

## What the scan should show

| Provider | Locked SDK | Intentional patterns | Expected result |
| --- | --- | --- | --- |
| Stripe | `stripe@11.18.0` | Legacy billing calls | Dependency map; findings only where a reviewed rule applies |
| OpenAI | `openai@3.3.0` | v3 completion and embedding methods | Reviewed v3 → v4 findings with source locations |
| Supabase | `@supabase/supabase-js@1.35.0` | v1 auth, client options, mutation response, and Realtime | Five reviewed v1 → v2 findings with source locations |

The scan reads the repository and package lockfile to establish version evidence. **Limited coverage means limited coverage:** calls outside reviewed rules remain visible in the dependency map, but Shimpilot cannot claim those calls are safe or automatically migrate them. Provider metadata must be available to confirm the upgrade comparison.

The public scan does **not** install dependencies, execute repository code, create a branch, or open a pull request.

## Try a connected migration safely

1. Fork or use this repository as a template under your GitHub account.
2. Install the Shimpilot GitHub App **only for that copy** and choose it in the dashboard.
3. Select **Manual** migration mode and scan the repository.
4. Open the finding evidence and inspect any generated **Draft PR**, changed files, validation results, and GitHub checks. You decide whether to merge.

Supabase migration suggestions require review because auth responses, RLS behavior, mutation return values, and Realtime subscriptions depend on the application. **Supabase is not eligible for unattended Automatic mode.** Automatic mode for eligible providers has separate policy, validation, CI, protection, and current-head gates; see [Shimpilot security](https://shimpilot.com/security) before enabling it.

> **Proof status:** This README does not claim a successful public migration PR. A PR should be linked only after its diff and validation results have been inspected.

## Reproduce the fixture checks

```bash
npm ci
npm run typecheck
npm run build
```

The placeholder Supabase URL and key in [`client.ts`](src/legacy/supabase/client.ts) are inert fixture values. Do not add real credentials to a public test repository.

MIT licensed · [View license](LICENSE)
