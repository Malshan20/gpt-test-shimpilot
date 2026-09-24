import Stripe from "stripe";

const stripe = new Stripe("sk_test_shimpilot_fixture", {
  apiVersion: "2022-11-15",
});

export async function cancelSandboxSubscription(subscriptionId: string) {
  return stripe.subscriptions.cancel(subscriptionId);
}
