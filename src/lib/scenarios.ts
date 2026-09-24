export type Provider = "stripe" | "openai";

export type Scenario = {
  id: string;
  provider: Provider;
  title: string;
  file: string;
  severity: "medium" | "high" | "control";
  summary: string;
  expectedSignal: string;
};

export const scenarios: Scenario[] = [
  {
    id: "legacy-charge",
    provider: "stripe",
    title: "Legacy Charges flow",
    file: "src/legacy/stripe/charges.ts",
    severity: "high",
    summary: "Uses charges.create + source token and charges.capture.",
    expectedSignal: "Supported Stripe call sites should be discovered and evaluated.",
  },
  {
    id: "customer-source",
    provider: "stripe",
    title: "Legacy customer source",
    file: "src/legacy/stripe/customers.ts",
    severity: "high",
    summary: "Uses customers.createSource and customers.update(source).",
    expectedSignal: "Customer source patterns should map back to exact files and functions.",
  },
  {
    id: "payment-intents",
    provider: "stripe",
    title: "PaymentIntent compatibility",
    file: "src/legacy/stripe/payment-intents.ts",
    severity: "high",
    summary: "Uses paymentIntents.create with explicit legacy payment_method_types and confirm.",
    expectedSignal: "Shimpilot should identify supported PaymentIntent usage and migration candidates.",
  },
  {
    id: "subscriptions",
    provider: "stripe",
    title: "Subscription lifecycle",
    file: "src/legacy/stripe/subscriptions.ts",
    severity: "medium",
    summary: "Uses subscriptions.create/update and invoices.pay.",
    expectedSignal: "Subscription and invoice call sites should be indexed.",
  },
  {
    id: "checkout-webhook",
    provider: "stripe",
    title: "Checkout + webhook",
    file: "src/legacy/stripe/checkout.ts",
    severity: "medium",
    summary: "Uses checkout.sessions.create and webhooks.constructEvent.",
    expectedSignal: "Checkout and webhook usage should be visible in the API map.",
  },
  {
    id: "refund-balance-terminal",
    provider: "stripe",
    title: "Refund, balance and Terminal",
    file: "src/legacy/stripe/operations.ts",
    severity: "medium",
    summary: "Uses refunds.create, balance.retrieve, and terminal.readers.processPaymentIntent.",
    expectedSignal: "Less common supported registry calls should still be found.",
  },
  {
    id: "unsupported-control",
    provider: "stripe",
    title: "Coverage control: charges.list",
    file: "src/legacy/stripe/unsupported-control.ts",
    severity: "control",
    summary: "Contains charges.list as a deliberate unsupported-control case.",
    expectedSignal: "If your current registry does not support charges.list, it should remain unclassified rather than falsely marked safe.",
  },
  {
    id: "legacy-chat",
    provider: "openai",
    title: "OpenAI SDK v3 chat flow",
    file: "src/legacy/openai/chat.ts",
    severity: "high",
    summary: "Uses Configuration/OpenAIApi and createChatCompletion with an old model snapshot.",
    expectedSignal: "Legacy OpenAI SDK patterns should be detected and mapped to the exact call site.",
  },
  {
    id: "legacy-completion",
    provider: "openai",
    title: "Legacy text completion",
    file: "src/legacy/openai/completions.ts",
    severity: "high",
    summary: "Uses createCompletion with text-davinci-003.",
    expectedSignal: "Deprecated completion-style usage should be surfaced for migration review.",
  },
  {
    id: "legacy-embedding",
    provider: "openai",
    title: "Legacy embedding model",
    file: "src/legacy/openai/embeddings.ts",
    severity: "medium",
    summary: "Uses createEmbedding with text-embedding-ada-002.",
    expectedSignal: "Legacy embedding model usage should be discoverable and attributable.",
  }
];

export function getScenario(provider: string, id: string): Scenario | undefined {
  return scenarios.find((scenario) => scenario.provider === provider && scenario.id === id);
}
