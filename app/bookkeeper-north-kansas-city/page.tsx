import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { CredentialsStrip } from "@/components/CredentialsStrip";
import { SectionHeading, FeatureCards, NavyPanel, RelatedLinks } from "@/components/blocks";
import { CTA } from "@/lib/constants";
import { HardHatIcon, LayersIcon, ReceiptIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Bookkeeper in North Kansas City",
  description:
    "Bookkeeping for North Kansas City businesses: contractors, shops, warehouses, and trades. CFO-level oversight from a bookkeeper based just up the road in Liberty.",
  alternates: { canonical: "/bookkeeper-north-kansas-city" },
};

const nkcFocus = [
  {
    icon: LayersIcon,
    title: "Shops, warehouses & light industrial",
    body: "North Kansas City has long been a working part of the metro. Businesses with inventory, equipment, and real overhead need books that account for all three.",
  },
  {
    icon: HardHatIcon,
    title: "Contractors & subs",
    body: "Plenty of crews are based out of NKC and working jobs across the whole metro. Job costing is what tells you which of those jobs was worth the drive.",
  },
  {
    icon: ReceiptIcon,
    title: "Independent businesses",
    body: "The restaurants, studios, and small operators along Armour and the surrounding blocks, where margins are thin enough that accuracy really matters.",
  },
];

export default function NorthKansasCityPage() {
  return (
    <>
      <PageHero
        eyebrow="North Kansas City"
        title={<>A bookkeeper who understands how NKC businesses actually run</>}
        intro={
          <>
            North Kansas City is its own city with its own character: a working,
            business-dense pocket of the Northland. I&apos;m based a short drive up the
            road in Liberty and work with businesses here regularly.
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
            eyebrow="Who I work with"
            title="The kinds of businesses I see in NKC"
            intro={
              <>
                Businesses here tend to have more moving parts than a simple service
                company: equipment, inventory, crews, and often a mix of commercial and
                residential work.
              </>
            }
          />
          <FeatureCards items={nkcFocus} />
        </Container>
      </Section>

      <Section tone="petal">
        <Container>
          <NavyPanel
            eyebrow="Why it matters here"
            title="Equipment and inventory hide a lot of money"
          >
            <p>
              When a business owns machines, carries stock, or runs trucks, a surprising
              amount of value sits in places a basic bookkeeping setup never tracks
              properly. Parts on a van, equipment you own outright, materials bought for
              one job and used on another. All of it is real money, and all of it
              distorts your margins when it isn&apos;t accounted for.
            </p>
            <p>
              That&apos;s the sort of thing I dig into, because it&apos;s the sort of
              thing I deal with every day as CFO of a construction company.
            </p>
            {/* CONFIRM: add Angie's specific ties to North Kansas City here if she
                has them, or trim this page if the connection is thin. Three strong
                local pages beat four thin ones. */}
          </NavyPanel>
        </Container>
      </Section>

      <RelatedLinks
        items={[
          {
            href: "/bookkeeping-for-trades",
            label: "For trades",
            summary: "HVAC, plumbing, electrical, and crews running trucks.",
          },
          {
            href: "/bookkeeper-kansas-city",
            label: "Kansas City metro",
            summary: "The wider metro picture, on both sides of the state line.",
          },
          {
            href: "/cleanup-bookkeeping",
            label: "Cleanup & catch-up",
            summary: "Where most businesses start when the books were never set up right.",
          },
        ]}
      />

      <CTABand heading="Let's talk about your business" />
    </>
  );
}
