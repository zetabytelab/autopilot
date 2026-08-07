# 🛩️ The Autopilot Index

**Tracking companies run by AI — not AI companies.**

A new category is forming: businesses where **agents execute and humans direct**. One-person companies at $10M run rates. A payroll of two at $401M in audited sales. Sam Altman bet his CEO friends on when the first near-one-person billion-dollar company would appear — [he thinks he already won](https://www.nytimes.com/2026/04/02/technology/ai-billion-dollar-company-medvi.html).

This index tracks that category the way self-driving was tracked: by **autonomy level**, with every metric **evidence-graded and sourced**. Revenue is the least reliable signal in a category this young — autonomy is observable, so that's what we rank.

**Live tracker with full profiles, stack pyramid & news pulse → [autopilotbiz.vercel.app](https://autopilotbiz.vercel.app)**

---

## What qualifies

1. **Agents execute, humans direct** — AI performs core business operations end-to-end (selling, building, supporting, transacting). Copilots that make a human faster don't qualify.
2. **Extreme leverage** — ≤10 humans, or ≥$500K revenue per human. The org chart should look like a prompt.
3. **Real economics** — a citable revenue, funding, or exit signal. No signal yet → **Watchlist**, not the Index.
4. **Radical transparency** — every figure is labeled with an evidence grade and linked to its source. Disputed claims stay visible, flagged.
5. **The Guinndex rule** — not a company? Field experiments qualify when an agent does real-world economic legwork.

### Autonomy Levels

| Level | Name | Definition | Example |
|---|---|---|---|
| **L5** | Full autonomy | AI runs the company including capital allocation | 🏁 *Vacant — the finish line* |
| **L4** | Goal-level autopilot | Human sets goals & signs papers; AI operates the company day to day | *Vacant — claimed ([Egbe](#-watchlist--claims-before-evidence)), never verified* |
| **L3** | Operational autopilot | AI runs most core operations; human steers the big calls | [Polsia](#the-index) (~80% of founder ops, founder-reported) |
| **L2** | Function autopilot | AI runs whole functions end-to-end (support, growth, build) with human review | [Medvi](#the-index) |
| L1 | Copilot | AI assists; humans operate | *Out of scope* |

### Evidence Grades

| Grade | Meaning | Example |
|---|---|---|
| **A** | Third-party audited / verified financials | Medvi (NYT reviewed its financials directly) |
| **B** | Public transaction or filing (exit, funding docs) | Base44 ($80M cash acquisition by Wix) |
| **C** | Credible press + founder confirmation | Polsia (WSJ-reported customer count) |
| **D** | Founder claims only | Egbe (all traction self-reported) |

---

## The Index

*Autopilot-run companies with real economics, ranked by autonomy level, then evidence.*

| Company | Level | Evidence | Humans | Revenue | The story | Flags |
|---|---|---|---|---|---|---|
| [Polsia](https://polsia.com) | **L3** | C | **1** | ~$10M run rate | AI runs the company while the founder sleeps; raised $30M at $250M with zero employees. Cut its $1.2M/mo Anthropic bill to ~$100K via open-source inference. | Figures founder-reported; margin math disputed |
| [Nanocorp](https://nanocorp.ai) | **L3** | D | **1** | $193K claimed | One prompt → one company, zero code. YC-backed solo founder. | Revenue claim disputed by independent review |
| [Boardy](https://boardy.ai) | **L3** | C | — | — | AI superconnector that networks on your behalf — raised its round without investors seeing a deck or speaking to a human. | — |
| [Medvi](https://medvi.io) | **L2** | **A** | **2** | **$401M** (2025, verified) → $1.8B 2026 track | GLP-1 telehealth built in 2 months for $20K. 16.2% net profit with a payroll of two brothers — the NYT audited the books. Runs on "telehealth-in-a-box" rails. | FDA warning letter (Feb 2026); anti-spam class action (Mar 2026); AI-fake-doctor ads exposed |
| [Base44](https://base44.com) | **L2** | B | 9 | $3.5M at exit | Solo-owned vibe-coding platform, sold to Wix for **$80M cash** at 6 months old. The category's first clean exit. | — |

*Revenue-per-human champion: Medvi at ~$200M/human. Purest autopilot story: Polsia at 1 human.*

---

## 📖 How to read the levels

The core question at every level is **who executes, and who decides** — headcount is deliberately not the question.

**L2 — Function autopilot** *(Medvi, Base44)*. Whole functions run end-to-end on AI: Medvi's ad creative is Midjourney/Runway, support is a chatbot, analytics are AI, the site was AI-built. But *the company* is not autonomous — Matthew Gallagher is the operating system connecting those functions, making every cross-functional call daily. The proof is in the NYT article itself: he tweaked the site before a hike, it broke, and the business lost ~200 customers because **no agent could decide to fix it**. That's the signature of L2 — remove the human for a week and the company degrades. Base44 is the same shape: AI built the product; the founder ran the business.

**L3 — Operational autopilot** *(Polsia, Nanocorp, Boardy)*. Agents run *across* functions — operations, support, even fundraising — and the human's job shrinks to steering. Polsia is the reference case: founder-reported ~80% of operations agent-run, a live dashboard showing the AI working on every customer's company, and the AI reportedly running much of its own $30M raise. Boardy earned L3 through a stunt that doubles as evidence: investors wired money without ever seeing a deck or speaking to a human — the AI *was* the counterparty. Why not L4: the founder is still in the loop **daily**, and everything is founder-reported (Grade C at best). L3 is where claims and evidence currently max out.

**L4 — Goal-level autopilot** *(vacant — claimed by Egbe)*. Human sets goals and signs the legal papers; AI operates the company day to day. Egbe's pitch is literally this sentence — "You found it. AI runs it." — and founder Nikolay Vyahhi's 100 pre-launch AI-run e-commerce startups on Mac minis is the most interesting *pre-evidence* for L4 anywhere. But no one has independently observed a company running for weeks without human operational intervention while serving real customers. That's the promotion test, and it's why L4 sits empty with Egbe on the Watchlist rather than in the Index.

**L5 — Full autonomy** *(vacant, structurally)*. Add capital allocation: the AI decides what to build next, whom to hire, where the profits go. Not just unproven — currently *legally impossible* (agents can't sign contracts or own assets; that's partly what enablers like Sapiom exist to route around). L5 is the finish line the whole index points at.

### The teams angle

Two things the levels reveal that a headcount column hides:

**Small ≠ autonomous, and autonomous ≠ small.** Medvi (2 humans) sits *below* Polsia (1 human) on the ladder — fewer humans didn't mean more autonomy, because the human works constantly and the AI never decides. Inverted: Midjourney runs ~$500M revenue on ~60 humans — spectacular *lean*, but it's an AI company run by humans, which is exactly why it's context and not in the Index. The [Lean AI leaderboard](https://github.com/henrythe9th/official-lean-ai-native-leaderboard) measures leverage; these levels measure who runs it. That's the category boundary.

**The "team" is really a four-layer stack**, and the levels describe which layer holds the middle of the org chart:

| Layer | What it is | Medvi example |
|---|---|---|
| Core humans | Payroll | 2 brothers |
| Shadow humans | Contractors & partners' staff | 7 contract account managers, 2 contract engineers, agencies — plus the doctors inside the rails |
| Rails | Departments bought as APIs | CareValidate, OpenLoop Health |
| Agents | The execution layer that grows with each level | Ads, support, analytics, code |

As a company climbs, agents eat the org chart **from the middle out**: execution first (L2), then coordination (L3), then operation (L4), then allocation (L5). Humans persist at two ends — the *top* (goals, signatures, accountability, which even L5 can't shed legally) and the *edges*, where they come back as a premium: Medvi added human account managers because retention needed relationship memory, and RentAHuman exists because agents need physical hands.

> **The org chart evolution:** L2 = human hub with agent spokes → L3 = agent mesh with a human governor → L4 = human chairman, AI CEO → L5 = human shareholder.

So the scouting question for each company isn't "how few people?" — it's **"which layers of the org chart have flipped from human to agent, and can they prove it?"** A level jump with evidence is the news event; the shadow-headcount disclosure is the honesty layer that keeps the index credible.

---

## 🔭 Watchlist — claims before evidence

*Passes the autonomy bar, no citable economics yet. Promotion requires a Grade C signal or better.*

| Company | Claimed level | The claim | Why we're watching |
|---|---|---|---|
| [Egbe](https://egbe.ai) | **L4** | "The zero-employee company. You found it. AI runs it." — AI co-founder ships the product, wires Stripe, runs ads | Founder Nikolay Vyahhi (Stepik) told the MIT AI Summit he'd pre-tested with **100 AI-run e-commerce startups on a few Mac minis**. Claims 8× token growth in a month on GLM-5.2 (self-reported). |
| [Cofounder](https://cofounder.co) | L3 | "Run an entire company with AI" | USV-backed; thesis-defining but pre-metrics |
| [Atoms](https://atoms.dev) | L3 | AI business team that builds, deploys **and markets** your product | Products shipping; no economics disclosed |
| [Caffeine](https://caffeine.ai) | L3 | "The self-writing internet" | Pre-metrics |

---

## 🟥 Cautionary tales

*Claims that didn't survive contact with reality. They stay listed — base rates are data.*

| Company | What was claimed | What happened |
|---|---|---|
| [11x](https://11x.ai) | AI SDRs replacing headcount; $10M ARR | TechCrunch investigation: customers claimed that it didn't have; ARR nearer $3M; CEO stepped down. Still operating. |

*(Medvi carries flags in the Index above — verified revenue **and** an FDA letter can both be true.)*

---

## 🍺 Field experiments — the Guinndex rule

*Not companies. Proof that agents can do real economic legwork.*

| Experiment | Agent | The legwork | Cost |
|---|---|---|---|
| [Guinndex](https://guinndex.ai) | "Rachel" (ElevenLabs voice + Twilio) | Phoned **3,000+ Irish pubs** for the price of a pint. 2,052 answered; national average €5.95; at least one pub cut its price after. Now a living CPI for the pint. | ~€200 |
| [Le Baguette Index](https://lebaguetteindex.fr) | "Brigitte" | **11,190 calls** to 5,173 French bakeries for the price of a baguette tradition (avg €1.25). Most bakers never noticed she was a machine. | ~€30 |

---

## 🧱 Part 2 — The Enablers

*The companies and tools that make autopilot business possible. For a builder, this is the shopping list; for an investor, adoption here is the demand signal.*

### Enabler companies

| Company | What it enables | Humans | Signal |
|---|---|---|---|
| [RentAHuman](https://rentahuman.ai) | AI agents **hire humans** for physical-world tasks (MCP + escrow bounties) | 3 | YC-backed; 500K+ registered humans claimed |
| [Payman](https://paymanai.com) | AI that pays humans — agent-initiated payouts | 15 | ~$770K est. revenue |

### The stack behind the index

| Layer | What it does | Tools (used by) |
|---|---|---|
| **Intelligence** | The models that think, plan, argue | Claude (Polsia), OpenAI (Polsia), **Z.ai GLM-5.2** (Egbe), Sciforium open-source inference (Polsia), Atoms, Cursor |
| **Agent infra** | Voices, browsers, hands & compute | ElevenLabs (Guinndex, Baguette), RentAHuman (agents via MCP) |
| **Code & deploy** | Where agent-written code ships | GitHub (Polsia, Cofounder, Atoms), Vercel |
| **Data & backend** | State for agent-built apps | Supabase & friends |
| **Regulated rails** | Doctors, pharmacies & compliance as an API | CareValidate (Medvi), OpenLoop Health (Medvi)* |
| **Payments** | How autopilot businesses get paid | Stripe (Medvi, Egbe), Sapiom agent-spend infra (Polsia) |
| **Distribution** | Ads, email, phone — reaching the real world | Twilio (Guinndex), Postmark (Polsia) |

<sub>*OpenLoop faces a Nov 2025 class action disputing its compounded pills. Rails cut both ways.</sub>

### 🔄 The Switch Log

*Production workloads voting with their wallets — the strongest infra demand signal there is.*

| Date | Company | Moved | Claimed impact |
|---|---|---|---|
| 2026-06 | Polsia | Routine workloads: Anthropic API → open-source models on Sciforium | **$1.2M/mo → ~$100K/mo** compute bill (founder-reported) |
| 2026-07 | Egbe | Majority of build workload → GLM-5.2 (Z.ai) | Requests & tokens up **~8× in one month** (self-reported, one month post-launch) |

---

## Submitting a company

- **PR** against this README (keep the evidence-grade discipline: every figure needs a source link), or
- **[Submit via the tracker](https://autopilotbiz.vercel.app/submit)** — goes through automated checks + human vetting.

Unverifiable claims land on the **Watchlist**, not the Index. That's a feature.

## About

Maintained by [@zetabytelab](https://github.com/zetabytelab) — one human + agents. Inspired by the structure of Henry Shi's [Lean AI Native Leaderboard](https://github.com/henrythe9th/official-lean-ai-native-leaderboard); different question. Lean AI asks *how much revenue per human?* The Autopilot Index asks ***who's actually running the company?***

**Data:** [CC BY 4.0](LICENSE) — use it, credit it. Some tool links on the companion site are affiliate links (disclosed there); rankings and inclusion are never paid.
