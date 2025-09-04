# Personal OS Portfolio — Spec (Chudi Nnorukam)

## A) Information Architecture (routes)
/
 /about
 /services
 /portfolio
 /products/ai-seo-kit
 /playbooks
 /playbooks/<slug>
 /tools
 /gigs
 /contact
 /sitemap
 /rss.xml

## B) Homepage modules (fields + intent)
1) **Value line**  
   - text: `Chudi Nnorukam — AI MVPs & SEO systems for independent creators.`  
   - intent: clarity + positioning within 1s

2) **Primary CTAs (2 buttons)**  
   - `Buy AI SEO Kit` → `/products/ai-seo-kit`  
   - `Hire me (async)` → `/services`  
   - style: prominent, always visible on first scroll

3) **Proof strip**  
   - mode A: logo row (static SVGs)  
   - mode B: “results in one line” cards (3)  
   - fields: `metric`, `window`, `context_line`, `link?`

4) **Featured Playbooks/Articles (3–6)**  
   - fields: `title`, `slug`, `summary`, `outcome`, `updatedAt`, `tags[]`

5) **Service sampler (3 cards)**  
   - mirrors `/services` cards (see C), short variant

6) **Lightweight About + photo**  
   - fields: `short_bio`, `photo`, `link_about`

7) **Footer**  
   - newsletter (optional), socials: X @chudinnorukam, Pinterest @chudinnorukam, LinkedIn, Medium  
   - legal links; RSS; sitemap

## C) Async Service Menu (up to 3)
All cards share: `name`, `outcome`, `deliverables`, `timeline`, `price_from`, `ctas{ email, linkedin }`

**CTAs**  
- Email (prefilled):  
  `mailto:nnorukamchudi@gmail.com?subject=Hire%20Chudi%20-%20AI%20SEO%20Playbook&body=Company%3A%0AGoal%3A%0ABudget%3A%0ATimeline%3A%0AURLs%3A`  
- LinkedIn DM: `https://www.linkedin.com/in/chudi-nnorukam-b91203143/` (label: “DM me on LinkedIn (I reply async)”)  

**Services**
1) **AI SEO Playbook Setup**  
   - outcome: rank for 12 mid/long-tails in 30 days  
   - deliverables: keyword map, 10 briefs, 1 hub, internal links, JSON-LD  
   - timeline: 7–10 days (async-only)  
   - price_from: `From $____`

2) **Content Engine Audit**  
   - deliverable: checklist + 90-day roadmap doc  
   - timeline: 5–7 days  
   - price_from: `From $____`

3) **Micro-MVP Build**  
   - deliverable: small scoped build + Loom demo  
   - timeline: 7–14 days  
   - price_from: `From $____`

## D) Proof section (3 quick case cards)
- “+120% organic in 60 days”  
- “LCP 0.9s → 0.6s”  
- “3× demo requests”  
Fields per card: `metric`, `window`, `context_line`, `link?`

## E) Resources
- **Playbooks/Guides gallery** (evergreen)  
- **Tools** (review responder, checklist wizard) with short blurbs

## F) Internal linking rules
- Every **Playbook**: link mid-article and end → `/products/ai-seo-kit`; soft link to `/services`; 2 sibling playbooks.  
- **Blog post** → one Playbook (anchor text = outcome).  
- **Portfolio** card → related Playbook or Tool.

## G) Titles & metas
- **Home**  
  - Title: `Chudi Nnorukam — AI MVPs & SEO Systems for Indie Creators`  
  - Meta: `I help solo founders ship AI MVPs and rank for mid-tail keywords with calm, repeatable systems.`

- **Services**  
  - Title: `Async Services — AI SEO Playbooks, Content Engine Audits, Micro-MVPs`  
  - Meta: `Productized, async-only services. Clear outcomes, fixed scopes, no meetings required.`

- **Gigs**  
  - Title: `Fiverr, Upwork, and LinkedIn Services — Work with Chudi`  
  - Meta: `Prefer marketplaces? Browse my vetted gigs and hire me via Fiverr, Upwork, or LinkedIn Services.`

## H) JSON-LD templates
Include Person, Service, Offer, Article, ItemList, HowTo, FAQ as separate files under `/docs/jsonld-templates/` (see files in this delivery).

## I) Stack & BOM (Astro 4)
- **Framework**: Astro 4 (SSG + islands)  
- **React islands**: `@astrojs/react` (only where needed)  
- **Content**: `@astrojs/mdx`, `remark-slug`, `rehype-autolink-headings`  
- **Styling**: Tailwind CSS + `@tailwindcss/typography`  
- **UI**: Radix primitives + `lucide-react` icons  
- **Code blocks**: Shiki  
- **Search**: Pagefind (static)  
- **Images**: `@astrojs/image` + `sharp`; optional OG via `satori/resvg`  
- **SEO**: hand-rolled JSON-LD helpers; XML + HTML sitemap  
- **Analytics**: Fathom (privacy-first)  
- **CI**: GitHub Actions for build/lint/test; optional Lighthouse budgets

## J) Content model (MDX/frontmatter + JSON)
- `playbooks/*.mdx`: `title, slug, summary, outcome, hero_img, tags[], updatedAt, related_playbooks[], related_tools[], cta_ai_seo_kit: boolean`  
- `cases/*.mdx`: `title, metric, before_after, window, stack, link`  
- `data/service.json`: array of service cards (fields from C)  
- `data/tools.json`: array of tool cards

## K) Component contracts (pseudocode)
```ts
type CTAButton = { href: string; label: string; external?: boolean; };
type ProofCard = { metric: string; window?: string; context?: string; href?: string; };
type ServiceCard = {
  name: string; outcome: string; deliverables: string[];
  timeline: string; price_from: string; ctas: { email: string; linkedin: string; };
};
type PlaybookCard = { title: string; slug: string; summary: string; outcome: string; tags: string[]; updatedAt?: string; };
type AboutBlock = { bio: string; photoSrc: string; links: { label: string; href: string; }[]; };
type FooterProps = { newsletter?: boolean; socials: { label: string; href: string; }[]; };
```

### Uncertainties & defaults
- Prices TBD → use `From $____` now.  
- Newsletter optional; if enabled, wire Fathom goals on CTA click.  
- Add `/gigs` entries once Fiverr/Upwork URLs are ready (see JSON-LD ItemList template).