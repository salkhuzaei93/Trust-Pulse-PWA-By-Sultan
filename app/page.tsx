import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const highlights = [
  "Track and display live conversions",
  "Personalize trust badges by segment",
  "Ship a PWA-ready onboarding experience"
];

export default function HomePage() {
  return (
    <section className="grid gap-10">
      <div className="space-y-4">
        <p className="text-lg text-muted-foreground">
          TrustPulse is the launchpad for product teams who want real-time proof that builds
          credibility from first visit to purchase.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full px-6 py-2 text-sm"
            )}
            href="#get-started"
          >
            Get started
          </a>
          <a
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full px-6 py-2 text-sm"
            )}
            href="#docs"
          >
            Read docs
          </a>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <p className="text-base font-medium text-card-foreground">{item}</p>
          </div>
        ))}
      </div>

      <div
        id="get-started"
        className="rounded-2xl border border-border bg-muted/40 p-6"
      >
        <h2 className="text-2xl font-semibold">Ready to deliver instant trust?</h2>
        <p className="mt-2 text-muted-foreground">
          Wire up Postgres, Prisma, NextAuth, and Stripe from this scaffold to activate secure
          generation endpoints.
        </p>
      </div>
    </section>
  );
}
