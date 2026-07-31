import { TRUST_SIGNALS } from "@/lib/constants";
import { Container } from "./Section";
import { Reveal } from "./Reveal";

/** Compact strip of credentials / trust signals. */
export function CredentialsStrip() {
  return (
    <section className="border-y border-petal-100 bg-petal-50 py-10">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-petal-600">
            Credentials &amp; memberships
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {TRUST_SIGNALS.map((sig) => (
              <li
                key={sig}
                className="text-sm font-medium text-navy/80"
              >
                {sig}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
