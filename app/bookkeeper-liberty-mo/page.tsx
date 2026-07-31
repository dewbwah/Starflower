import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { CredentialsStrip } from "@/components/CredentialsStrip";
import { Testimonials } from "@/components/Testimonials";
import { SectionHeading, FeatureCards, NavyPanel, RelatedLinks } from "@/components/blocks";
import { CTA } from "@/lib/constants";
import { HardHatIcon, ReceiptIcon, ScaleIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Bookkeeper in Liberty, MO",
  description:
    "Local bookkeeper based in Liberty, Missouri. CFO-level bookkeeping for contractors, trades, and small businesses across Clay County and the Northland.",
  alternates: { canonical: "/bookkeeper-liberty-mo" },
};

const local = [
  {
    icon: HardHatIcon,
    title: "Contractors & trades",
    body: "The Northland has been building steadily for years, and a lot of the crews doing that work run on books that were never set up for job costing.",
  },
  {
    icon: ReceiptIcon,
    title: "Main street businesses",
    body: "Shops, salons, studios, and the independent businesses around Liberty's historic square, where the owner is also the whole back office.",
  },
  {
    icon: ScaleIcon,
    title: "Professional services",
    body: "Consultants, agencies, and practices that need clean books, quarterly clarity, and someone who picks up the phone.",
  },
];

export default function LibertyPage() {
  return (
    <>
      <PageHero
        eyebrow="Liberty, Missouri"
        title={<>A bookkeeper in Liberty who reads the numbers, not just records them</>}
        intro={
          <>
            Liberty is home. It&apos;s where I live, where I work, and where Starflower
            is based. If you run a business in Clay County and you&apos;d rather work
            with someone local, you&apos;ve found her.
          </>
        }
      >
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>

      <CredentialsStrip />

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Who I work with here"
            title="Liberty businesses I know well"
            intro={
              <>
                Clay County businesses tend to be owner-run, which means the person
                making the decisions is also the person doing the invoicing at night.
                That&apos;s exactly who I built this practice for.
              </>
            }
          />
          <FeatureCards items={local} />
        </Container>
      </Section>

      <Section tone="petal">
        <Container>
          <NavyPanel
            eyebrow="Local, but not limited"
            title="Based here, working with clients everywhere"
          >
            <p>
              Being local means I understand the market you&apos;re operating in and I
              can meet you in person when it&apos;s genuinely useful. It doesn&apos;t
              mean the work happens in an office. Most of it runs through secure cloud
              access, which is what lets me serve clients across the country as well as
              down the road.
            </p>
            {/* CONFIRM: Angie's real community ties belong here. Chamber
                involvement, organizations, sponsorships, how long in Liberty.
                A local page without genuine local detail doesn't rank or convince. */}
            <p>
              I came through the Northland Chamber of Commerce Leadership Class, and
              I&apos;ve spent years working alongside construction businesses in this
              part of the metro.
            </p>
          </NavyPanel>
        </Container>
      </Section>

      <Testimonials />

      <RelatedLinks
        items={[
          {
            href: "/bookkeeping-for-contractors",
            label: "For contractors",
            summary: "Job costing and retainage for the crews building the Northland.",
          },
          {
            href: "/pricing",
            label: "What it costs",
            summary: "Honest ranges, and the four things that move the number.",
          },
          {
            href: "/bookkeeper-kansas-city",
            label: "Kansas City metro",
            summary: "Serving businesses across the wider KC area, both sides of the line.",
          },
        ]}
      />

      <CTABand heading="Let's grab fifteen minutes" />
    </>
  );
}
