/**
 * Single source of truth for business details.
 * Swap these when the real values are ready. Anything marked CONFIRM is a
 * placeholder Angie needs to verify before launch.
 */

export const SITE_URL = "https://starflowerbookkeeping.com";

export const BUSINESS = {
  name: "Starflower Bookkeeping",
  phone: "816-451-1555",
  // Tel-href form (no punctuation) for click-to-call links.
  phoneHref: "+18164511555",
  // Confirmed business email (Aug 2026).
  email: "hello@starflowerbookkeeping.com",
  // Service-area business. The street address is private and never published.
  baseCity: "Liberty",
  baseState: "Missouri",
  baseStateShort: "MO",
  // CONFIRM: business hours placeholder. Verify before launch.
  hours: "Mon–Fri, 9:00am–5:00pm CT",
  hoursNote: "CONFIRM hours before launch",
  founderName: "Angie",
} as const;

/**
 * Motion booking link. The Book a Call page embeds the Motion calendar inline;
 * this constant powers every "Book a Call" button across the site so the CTA
 * can also deep-link straight to Motion if you ever want it to.
 * CONFIRM: replace with the real Motion scheduling URL.
 */
export const BOOKING_URL = "https://app.usemotion.com/meet/starflower/REPLACE-ME";

/** The one conversion goal, phrased consistently everywhere. */
export const CTA = {
  primaryLabel: "Get a Second Opinion on Your Books",
  headerLabel: "Book a Call",
  support:
    "15 minutes on my calendar. Bring your questions or just your suspicion that something's off. No prep needed, no obligation.",
  supportShort: "15 minutes, no prep needed, no obligation.",
  href: "/book-a-call",
} as const;

export const TRUST_SIGNALS = [
  "BS in Accounting, UMKC",
  "QuickBooks Gold ProAdvisor",
  "Certified Xero Accountant",
  "Gusto Preferred Partner",
  "Northland Chamber of Commerce 2017 Leadership Class",
] as const;

/**
 * Angie's headshot for the About page. Lives in /public/images/.
 * Set to null to fall back to a marked placeholder instead of a broken image.
 */
export const ANGIE_PHOTO: string | null = "/images/angie.jpg";

/**
 * Angie's family, who make up the Starflower team, featured on the About page.
 * Photos live in /public/images/. Set `photo` to null to show a marked
 * placeholder instead of a broken image.
 */
export type FamilyMember = {
  name: string;
  role: string;
  blurb: string;
  photo: string | null;
  alt: string;
  /**
   * CSS object-position for the portrait crop. Full-body shots need the focus
   * pulled toward the top so the face isn't cropped out of the 4:5 frame.
   */
  focal?: string;
  /**
   * Optional scale for wide environmental shots, so everyone reads at a similar
   * size in the row. Non-destructive: the source image is untouched.
   */
  zoom?: number;
};

export const FAMILY: FamilyMember[] = [
  {
    name: "Katie",
    role: "Bookkeeper & Office Manager",
    blurb:
      "My daughter Katie works with me full time, keeping client books current and the day to day running smoothly. When you reach out, there's a good chance she's the one who gets you sorted.",
    photo: "/images/katie.webp",
    alt: "Katie, bookkeeper and office manager at Starflower Bookkeeping",
  },
  {
    name: "Riley",
    role: "Bookkeeper",
    blurb:
      "My daughter Riley works with us part time on the books. Between the three of us, someone who knows your account is always close by.",
    photo: "/images/riley.webp",
    alt: "Riley, part-time bookkeeper at Starflower Bookkeeping",
  },
  {
    name: "Stella",
    role: "Bookkeeper in Training & Part Owner",
    blurb:
      "My granddaughter Stella is a part owner and my bookkeeper in training. She's curious about how businesses work and loves learning the why behind the numbers, which is the best place any bookkeeper can start.",
    photo: "/images/stella.webp",
    alt: "Stella, bookkeeper in training and part owner of Starflower Bookkeeping",
    // Full-body shot: pull the crop up so her face sits in frame.
    focal: "50% 30%",
    zoom: 1.5,
  },
];

export type Testimonial = {
  name: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Caitlin Miller",
    quote:
      "Working with Angie has been the best decision my company has made. She is so responsive, so knowledgeable, and so kind. She is so professional and has helped us understand and work through many situations. Highly recommend!",
  },
  {
    name: "Jacob Bailey",
    quote:
      "I cannot recommend Angie highly enough. She is incredibly knowledgeable about anything I have asked for bookkeeping and business taxes. She has also helped me avoid a number of issues that would have come back to bite me if she hadn't gone out of her way to make sure I knew how to fix it.",
  },
  {
    name: "Shelby DuBois",
    quote:
      "Angie is what keeps my business working. She keeps me from fearing tax time and I can't put a number on that. Every time I've asked a question about money or taxes, she's able to break it down in a way that makes sense and isn't overwhelming. She's been the best addition to my team and I can't say thanks enough.",
  },
];

export type FaqItem = {
  question: string;
  /** Answer paragraphs. Kept as an array so we can inject inline links. */
  answer: string;
  /** Optional related service page to link to from the answer. */
  link?: { href: string; label: string };
};

export const FAQS: FaqItem[] = [
  {
    question: "How much does a bookkeeper cost per month?",
    answer:
      "Anywhere from $175 to $4,000 a month depending on experience and how complex your business is. Here's the honest truth: the cheap end usually costs more, because you'll pay someone like me later to clean it up, and you may overpay on taxes in the meantime. My pricing reflects CFO-level oversight, and I'll tell you exactly what you'd pay after one quick call.",
    link: { href: "/pricing", label: "See how pricing works" },
  },
  {
    question: "What's the difference between a bookkeeper and an accountant (or CPA)?",
    answer:
      "A bookkeeper keeps your financial records accurate and current all year. A CPA uses those records to file taxes and give tax advice. Good bookkeeping is what makes your CPA effective. When books are a mess, your CPA either charges you extra to fix them or files based on bad numbers. I work alongside your CPA, and CPAs love clean books.",
  },
  {
    question: "How do I know if my bookkeeper is doing a bad job?",
    answer:
      "Warning signs: you get reports late or not at all, your bank balance never matches your books, your CPA has questions your bookkeeper can't answer, there's a growing pile of uncategorized transactions, or you just have no idea if you're profitable. If any of that sounds familiar, get a second opinion. Reviewing books is free on my calendar.",
    link: { href: "/book-a-call", label: "Get a second opinion" },
  },
  {
    question: "Why is construction bookkeeping different?",
    answer:
      "Because construction runs on jobs, not just months. You need job costing to know which projects actually make money, plus progress billing, retainage tracking, and subcontractor 1099s. A generalist bookkeeper treats a contractor like a coffee shop, and that's how profitable-looking companies quietly lose money. I've spent years in construction finance, so this is home turf for me.",
    link: { href: "/bookkeeping-for-contractors", label: "Bookkeeping for contractors" },
  },
  {
    question: "Can a bookkeeper clean up messy or behind books?",
    answer:
      "Yes, and it's one of the most common ways clients find me. Whether you're six months behind or your last bookkeeper left things in chaos, I can rebuild your books so they're accurate, current, and tax-ready. Cleanup is a one-time project with a clear price, then we keep them clean going forward.",
    link: { href: "/cleanup-bookkeeping", label: "Cleanup & catch-up bookkeeping" },
  },
  {
    question: "What does a bookkeeper actually do every month?",
    answer:
      "Categorize and reconcile every transaction, match your books to your bank and credit card statements, manage invoices and bills, run payroll if needed, and deliver reports you can actually read. With me you also get the part most bookkeepers skip: I tell you what the numbers mean and flag problems before they grow.",
  },
  {
    question: "Do I need a bookkeeper if I use QuickBooks?",
    answer:
      "QuickBooks is a tool, not a bookkeeper. It records what you tell it, including your mistakes, and miscategorized transactions mean wrong reports and wrong tax numbers. Most cleanup work I do is fixing DIY QuickBooks files. If you love doing your own books, great. If you're doing them at 10pm and hoping they're right, let's talk.",
    link: { href: "/cleanup-bookkeeping", label: "How cleanup works" },
  },
  {
    question: "Will hiring a bookkeeper save me money on taxes?",
    answer:
      "Usually, yes. Clean books mean every legitimate deduction gets captured and documented, nothing gets missed, and your CPA spends their billable hours on strategy instead of fixing records. Clients are often surprised how much was slipping through the cracks.",
  },
  {
    question: "How often should my books be updated?",
    answer:
      "Monthly at minimum, and that's the standard I keep. If your books are updated quarterly or only at tax time, you're driving your business looking in the rearview mirror. You can't fix a cash flow problem in March that you don't find out about until next January.",
  },
  {
    question: "What questions should I ask before hiring a bookkeeper?",
    answer:
      "Ask about their experience in your industry, who actually does the work, how often you'll get reports, whether they'll talk to your CPA directly, and what happens when they spot a problem. And ask what businesses like yours they've worked with. If they can't answer confidently, keep looking. I'm happy to answer all of these on a call.",
    link: { href: "/book-a-call", label: "Ask me on a call" },
  },
];

/**
 * Software Angie sets clients up on and recommends.
 * CONFIRM: add her referral/affiliate URL to `href` where she has one. Leave
 * null and the card renders without a link.
 */
export const REFERRAL_TOOLS: {
  name: string;
  category: string;
  blurb: string;
  href: string | null;
}[] = [
  {
    name: "QuickBooks",
    category: "Bookkeeping",
    blurb:
      "The platform most of my clients run on. I'm a Gold ProAdvisor, so I can usually get you a better rate than you'd find on your own.",
    href: null,
  },
  {
    name: "Xero",
    category: "Bookkeeping",
    blurb:
      "A clean, easy-to-read alternative to QuickBooks. I'm a Certified Xero Accountant, and some businesses simply get along with it better.",
    href: null,
  },
  {
    name: "Gusto",
    category: "Payroll & HR",
    blurb:
      "Payroll, benefits, and onboarding in one place. I'm a Gusto Preferred Partner and it's what I put almost every client on.",
    href: null,
  },
  {
    name: "Google Workspace",
    category: "Operations",
    blurb:
      "Professional email on your own domain, plus docs and calendar. If you're still running the business from a personal address, start here.",
    href: null,
  },
  {
    name: "Anchor",
    category: "Billing",
    blurb:
      "Autonomous billing that sends invoices and collects payment on its own, so you stop chasing people for money you've already earned.",
    href: null,
  },
  {
    name: "Acorn Merchant",
    category: "Payments",
    blurb:
      "Card processing with straightforward pricing. Worth a look if your current statement has fees you can't explain.",
    href: null,
  },
];

/**
 * Local businesses Angie refers clients to.
 *
 * CONFIRM: these categories are the scaffolding. Angie needs to supply the real
 * business names, a sentence on each, and a link or phone number. Any category
 * left with an empty `partners` array is hidden from the page automatically, so
 * this is safe to ship partially filled.
 */
export type PartnerCategory = {
  category: string;
  intro: string;
  partners: { name: string; blurb: string; href: string | null }[];
};

export const TRUSTED_PARTNERS: PartnerCategory[] = [
  {
    category: "CPAs & tax preparation",
    intro:
      "I keep your books clean all year. These are the folks I trust to take those books and file the return.",
    partners: [],
  },
  {
    category: "Attorneys",
    intro:
      "For entity setup, contracts, and the questions that need a real lawyer rather than a bookkeeper's opinion.",
    partners: [],
  },
  {
    category: "Insurance",
    intro:
      "General liability, workers comp, and bonding, especially for contractors who need it handled properly.",
    partners: [],
  },
  {
    category: "Banking & lending",
    intro:
      "Bankers who actually pick up the phone and understand how a small business runs.",
    partners: [],
  },
];

/**
 * Every service page, used by the Services hub, the header dropdown, and the
 * footer. One entry per page: one page, one job, one target phrase.
 */
export type ServiceEntry = {
  href: string;
  label: string;
  /** Short line for the hub page and nav dropdown. */
  summary: string;
};

export const SERVICES: ServiceEntry[] = [
  {
    href: "/monthly-bookkeeping",
    label: "Monthly Bookkeeping",
    summary:
      "Books categorized, reconciled, and reported every month, with someone actually reading them.",
  },
  {
    href: "/cleanup-bookkeeping",
    label: "Cleanup & Catch-Up",
    summary:
      "Behind or in a muddle? A one-time project to get you accurate, current, and tax-ready.",
  },
  {
    href: "/bookkeeping-for-contractors",
    label: "Bookkeeping for Contractors",
    summary:
      "Job costing, retainage, progress billing, and 1099s handled the way construction actually works.",
  },
  {
    href: "/bookkeeping-for-trades",
    label: "Bookkeeping for Trades",
    summary:
      "HVAC, plumbing, electrical, and field service crews who bill by the job.",
  },
  {
    href: "/virtual-bookkeeping",
    label: "Virtual Bookkeeping",
    summary:
      "Fully remote bookkeeping for businesses anywhere in the country, secure and simple.",
  },
  {
    href: "/cfo-advisory",
    label: "CFO & Advisory",
    summary:
      "Cash flow forecasting, margin analysis, and the guidance that comes after clean books.",
  },
  {
    href: "/payroll",
    label: "Payroll",
    summary:
      "Payroll run on time, filings handled, and contractor 1099s ready before January.",
  },
];

/** Primary nav. Items with `children` render as a dropdown in the header. */
export type NavItem = {
  href: string;
  label: string;
  children?: ServiceEntry[];
};

export const NAV_LINKS: NavItem[] = [
  { href: "/services", label: "Services", children: SERVICES },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
];

/**
 * Case studies.
 *
 * DELIBERATELY EMPTY. These are claims about real client outcomes, so nothing
 * goes here that didn't actually happen. Angie supplies the real ones and the
 * page fills itself in; until then the page shows an honest empty state rather
 * than invented results.
 *
 * Shape for each entry:
 *   {
 *     slug: "foundation-repair-job-costing",
 *     client: "Foundation repair contractor",   // anonymized is fine
 *     industry: "Construction",
 *     mess: "What shape the books were in when they arrived.",
 *     work: "What was actually done, step by step.",
 *     result: "What changed. Real numbers wherever possible.",
 *     metric: { value: "$18,400", label: "of missed deductions recovered" },
 *   }
 */
export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  mess: string;
  work: string;
  result: string;
  metric?: { value: string; label: string };
};

export const CASE_STUDIES: CaseStudy[] = [];

/** Blog posts, newest first. Each lives at /blog/<slug>. */
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** Display date. Static site, so this is written not computed. */
  date: string;
  readingTime: string;
  category: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "job-costing-for-contractors",
    title: "Job Costing for Contractors: How to Know Which Jobs Actually Make Money",
    description:
      "A plain-English guide to job costing for construction businesses: what it is, what to track, and why your P&L can look healthy while individual jobs lose money.",
    date: "July 2026",
    readingTime: "7 min read",
    category: "Construction",
  },
  {
    slug: "signs-of-a-bad-bookkeeper",
    title: "Seven Signs Your Bookkeeper Isn't Serving You Well",
    description:
      "How to tell whether your books are in good hands, from late reports and unreconciled accounts to a CPA who keeps asking questions nobody can answer.",
    date: "June 2026",
    readingTime: "6 min read",
    category: "Getting help",
  },
  {
    slug: "quickbooks-mistakes-small-businesses-make",
    title: "Five QuickBooks Mistakes I Fix Almost Every Week",
    description:
      "The most common QuickBooks errors in DIY small business files, why they quietly distort your reports, and how to avoid them.",
    date: "May 2026",
    readingTime: "8 min read",
    category: "QuickBooks",
  },
];

/**
 * Local landing pages. Deliberately capped: a handful of genuinely local pages
 * beats a pile of near-duplicates.
 *
 * CONFIRM: the `community` line on each page is where Angie's real local ties
 * belong. Generic local pages don't rank and don't convince anyone.
 */
export const LOCAL_AREAS = [
  { slug: "bookkeeper-liberty-mo", city: "Liberty", label: "Liberty, MO" },
  { slug: "bookkeeper-kansas-city", city: "Kansas City", label: "Kansas City, MO" },
  { slug: "bookkeeper-north-kansas-city", city: "North Kansas City", label: "North Kansas City" },
] as const;
