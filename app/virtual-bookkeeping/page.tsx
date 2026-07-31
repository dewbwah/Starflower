import type { Metadata } from "next";
import { Container, Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { CTABand } from "@/components/CTABand";
import { Testimonials } from "@/components/Testimonials";
import {
  SectionHeading,
  FeatureCards,
  CheckList,
  ProcessSteps,
  RelatedLinks,
} from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { CTA, BUSINESS } from "@/lib/constants";
import {
  ShieldIcon,
  RefreshIcon,
  LayersIcon,
  ChartIcon,
  PeopleIcon,
  SearchIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Virtual & Remote Bookkeeping Services",
  description:
    "Virtual bookkeeping services for small businesses nationwide. Secure cloud access, a steady communication rhythm, and almost nothing for you to do. Remote bookkeeper based in Liberty, Missouri.",
  alternates: { canonical: "/virtual-bookkeeping" },
};

const howItWorks = [
  {
    n: "01",
    title: "We talk",
    body: "Fifteen minutes to understand your business, what software you use, and where things stand today. No prep needed on your end.",
  },
  {
    n: "02",
    title: "Secure access",
    body: "You grant me access to your accounting software and read-only bank feeds. Nothing leaves your control, and you can revoke it any time.",
  },
  {
    n: "03",
    title: "I take it from here",
    body: "Your books get done on a schedule. If I need something from you, I ask once, clearly, in a single message rather than a trickle of emails.",
  },
  {
    n: "04",
    title: "You get answers",
    body: "Reports arrive on a predictable rhythm with a plain-English note on what changed, plus a standing invitation to ask me anything.",
  },
];

const trust = [
  {
    icon: ShieldIcon,
    title: "You keep control",
    body: "Access is granted through your accounting software and read-only bank connections. I never need your banking passwords, and you can remove access whenever you like.",
  },
  {
    icon: LayersIcon,
    title: "Everything in one place",
    body: "Your books live in your cloud accounting file, not on my computer. If we ever part ways, you walk off with everything, no hostage situation.",
  },
  {
    icon: PeopleIcon,
    title: "A real person, not a portal",
    body: "You're not filing tickets into a queue. You know who does your books, and you can call and get me or Katie on the phone.",
  },
  {
    icon: RefreshIcon,
    title: "A steady rhythm",
    body: "You'll know when reports land and how quickly I reply. No wondering whether anyone is actually working on your file.",
  },
  {
    icon: SearchIcon,
    title: "Nothing hidden",
    body: "You can look at your own books any time you want. I'd rather you understand them than depend on me to explain every line.",
  },
  {
    icon: ChartIcon,
    title: "Distance is not the issue",
    body: "The work is the same whether I'm across town or three states away. What matters is whether the person doing it knows your industry.",
  },
];

const yourJob = [
  "Send me access once, at the start",
  "Forward the occasional document I ask for",
  "Tell me when something big changes in the business",
  "Read the reports and ask questions when you have them",
];

export default function VirtualBookkeepingPage() {
  return (
    <>
      <PageHero
        eyebrow="Virtual bookkeeping"
        title={<>Remote bookkeeping that feels like having someone down the hall</>}
        intro={
          <>
            I work with clients all over the country from {BUSINESS.baseCity},{" "}
            {BUSINESS.baseState}. Being remote doesn&apos;t mean being distant. Most of
            my clients hear from me more than they ever heard from the bookkeeper down
            the road.
          </>
        }
      >
        <CTAButton href={CTA.href} size="lg">
          {CTA.primaryLabel}
        </CTAButton>
      </PageHero>

      <Section tone="navy">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="How it works"
            title="Four steps, and then it just runs"
            intro={
              <>
                Getting started takes less of your time than most people expect.
              </>
            }
          />
          <ProcessSteps steps={howItWorks} />
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="The trust question"
            title="Handing your finances to someone you haven't met"
            intro={
              <>
                It&apos;s a fair thing to be cautious about, and I&apos;d think less of
                you if you weren&apos;t. Here&apos;s exactly how the arrangement
                protects you.
              </>
            }
          />
          <FeatureCards items={trust} />
        </Container>
      </Section>

      <Section tone="petal">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Your part"
                title="What you actually have to do: almost nothing"
                intro={
                  <>
                    The whole point of handing this off is getting your evenings back.
                    If working with me creates homework for you, I&apos;ve done it
                    wrong.
                  </>
                }
              />
              <div className="mt-8">
                <CTAButton href={CTA.href} size="lg">
                  {CTA.primaryLabel}
                </CTAButton>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <CheckList items={yourJob} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Testimonials />

      <RelatedLinks
        items={[
          {
            href: "/monthly-bookkeeping",
            label: "Monthly bookkeeping",
            summary: "What actually gets done every month once we're set up.",
          },
          {
            href: "/pricing",
            label: "What it costs",
            summary: "Honest ranges and what drives the number for your business.",
          },
          {
            href: "/faq",
            label: "Common questions",
            summary: "Straight answers on cost, CPAs, and knowing if your books are right.",
          },
        ]}
      />

      <CTABand heading="Wherever you are, let's talk" />
    </>
  );
}
