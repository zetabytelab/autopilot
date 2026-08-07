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
