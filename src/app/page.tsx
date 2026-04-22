export default function Home() {
  const steps = [
    {
      number: "01",
      title: "Read the prompt",
      body: "Start from a vague backend scenario instead of a polished algorithm problem with a predefined method signature.",
    },
    {
      number: "02",
      title: "Clarify requirements",
      body: "Surface assumptions early and decide what matters before you code yourself into a corner.",
    },
    {
      number: "03",
      title: "Write runnable code",
      body: "Model the domain, create sample flows, and get to working C# code that actually runs end to end.",
    },
    {
      number: "04",
      title: "Handle pivots",
      body: "Adapt when the problem changes mid-round and see whether your design bends or breaks.",
    },
    {
      number: "05",
      title: "Review the Signal Map",
      body: "Get feedback on requirement discovery, executable modeling, and adaptability under pressure.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-10 md:py-12">
        <div className="grid min-h-[88vh] gap-12 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:pt-14">
          <div className="flex flex-col justify-start pt-6 lg:pt-10">
            <p className="mb-10 text-sm font-medium uppercase tracking-[0.28em] text-white/45">
              BlankRepo
            </p>

            <h1 className="max-w-[760px] text-5xl font-semibold leading-[1.01] tracking-tight sm:text-6xl lg:text-[4.6rem]">
              Practice the senior backend interview loop that actually matters now
            </h1>

            <p className="mt-10 max-w-[720px] text-[1.08rem] leading-[1.9] text-white/68">
              Start from a vague backend prompt, build runnable C# code, and see
              how you perform on the signals senior interviews actually test.
            </p>

            <div className="mt-14 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-white/90">
                Join the waitlist
              </button>
              <button className="rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/[0.04]">
                See a sample scenario
              </button>
            </div>
          </div>

          <div className="relative lg:pl-2 lg:pt-6">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
                  Scenario Prompt
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/55">
                  Cart &amp; Pricing API
                </div>
              </div>

              <div className="px-6 py-7">
                <div className="space-y-6 text-[15px] leading-8 text-white/78">
                  <p className="text-lg leading-8 text-white/92">
                    Design the core classes and interfaces for a Cart and Pricing
                    System.
                  </p>

                  <div>
                    <p className="mb-3 text-white/55">The system must handle:</p>
                    <ul className="space-y-3 text-white/76">
                      <li>• item customizations</li>
                      <li>• surge pricing</li>
                      <li>• percentage and flat discounts</li>
                      <li>• BOGO promotions</li>
                      <li>• membership benefits</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-white/42">
                      Signal Map Preview
                    </p>

                    <div className="space-y-5">
                      <div>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-white/58">
                            Requirement Clarification
                          </span>
                          <span className="text-white/82">Strong</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[82%] rounded-full bg-white/80" />
                        </div>
                      </div>

                      <div>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-white/58">
                            Executable Modeling
                          </span>
                          <span className="text-white/82">Strong</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[76%] rounded-full bg-white/72" />
                        </div>
                      </div>

                      <div>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-white/58">
                            Adaptability Under Pivot
                          </span>
                          <span className="text-white/60">Mixed</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[48%] rounded-full bg-white/45" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="pt-1 text-sm text-white/42">
                    Blank editor. Real business logic. Requirement pivots when
                    your design is already in motion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/40">
              How it works
            </p>
            <h2 className="mt-6 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3rem]">
              A practice loop built for how senior backend interviews actually unfold
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              BlankRepo is designed for the rounds that start with a vague business
              prompt, force you to make assumptions in real time, and judge whether
              your code and design still hold when the requirements shift.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/38">
                  {step.number}
                </p>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
            <section className="border-t border-white/8">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/40">
              Example scenarios
            </p>
            <h2 className="mt-6 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3rem]">
              Practice the kinds of backend problems that don’t look like LeetCode
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              Each scenario starts from a vague business prompt and expects you to
              model the domain, write runnable code, and make progress under changing
              requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/38">
                Scenario 01
              </p>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                Delivery Payout Engine
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/62">
                Calculate partner payouts from a stream of order events, then adapt
                when the same order can appear multiple times and only the latest
                state should count.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  What this tests
                </p>
                <p className="mt-3 text-sm leading-7 text-white/58">
                  Event modeling, status handling, money math, and whether your
                  design survives stream-style updates.
                </p>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/38">
                Scenario 02
              </p>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                Cart &amp; Pricing API
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/62">
                Start from a blank editor and design a cart system with
                customizations, discounts, surge pricing, and merchant-specific
                promo rules.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  What this tests
                </p>
                <p className="mt-3 text-sm leading-7 text-white/58">
                  Domain modeling, price composition, scope control, and how
                  quickly you can get to a runnable first slice.
                </p>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/38">
                Scenario 03
              </p>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                Rate Limiter / Quota Service
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/62">
                Build a quota engine that can enforce policy rules for different
                users and endpoints, then evolve it when exception paths and new
                limits appear.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  What this tests
                </p>
                <p className="mt-3 text-sm leading-7 text-white/58">
                  Policy modeling, extensibility, edge-case thinking, and whether
                  your logic collapses once rules stop being uniform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="border-t border-white/8">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/40">
                The Signal Map
              </p>

              <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3rem]">
                Feedback on the engineering signals that generic coding prep misses
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
                BlankRepo does not just tell you whether your code compiles. It
                highlights where your approach is strong, where it is brittle, and
                which parts of your interview process would help or hurt you in a
                real senior backend loop.
              </p>

              <div className="mt-10 space-y-5">
                <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/38">
                    Why it matters
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    A senior-level loop is rarely just about correctness. It is also
                    about requirement discovery, scope control, design adaptability,
                    and how quickly you can reach a runnable first slice.
                  </p>
                </div>

                <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/38">
                    What you get
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    A structured report that shows what you clarified, what you
                    modeled well, where your design bent under pressure, and what to
                    improve before the real interview.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-7">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/40">
                  Staff-Level Signal Map
                </p>
                <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/50">
                  Sample Report
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div className="rounded-[20px] border border-white/10 bg-black/30 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Requirement Clarification
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/58">
                        Did you surface the missing assumptions before you started
                        coding, or did you guess and hardcode your way forward?
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/72">
                      Strong
                    </span>
                  </div>

                  <div className="mt-5 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[84%] rounded-full bg-white/80" />
                  </div>
                </div>

                <div className="rounded-[20px] border border-white/10 bg-black/30 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Executable Modeling
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/58">
                        Did you turn the prompt into sensible entities, runnable
                        flows, and code that actually demonstrated the behavior being
                        discussed?
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/72">
                      Strong
                    </span>
                  </div>

                  <div className="mt-5 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[76%] rounded-full bg-white/72" />
                  </div>
                </div>

                <div className="rounded-[20px] border border-white/10 bg-black/30 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Adaptability Under Pivot
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/58">
                        When the requirements changed, did your architecture absorb
                        the shift cleanly, or did the solution start collapsing into
                        special-case logic?
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/58">
                      Mixed
                    </span>
                  </div>

                  <div className="mt-5 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[49%] rounded-full bg-white/45" />
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-white/44">
                Not just correctness. A clearer read on how you think, scope,
                model, and adapt.
              </p>
            </div>
          </div>
        </div>
      </section>
            <section className="border-t border-white/8">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/40">
                Who this is for
              </p>

              <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3rem]">
                Built for engineers preparing for harder backend interview loops
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
                BlankRepo is designed for candidates who are being evaluated on
                vague prompts, runnable code, business logic, and design
                adaptability — not just isolated algorithm recall.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/38">
                  Primary fit
                </p>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  Senior and staff backend candidates
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  Especially useful if your interview loops involve blank-editor
                  coding rounds, domain modeling, pricing logic, stateful flows,
                  or hybrid coding-plus-design discussions.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/38">
                  Strong secondary fit
                </p>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  Ambitious mid-level engineers
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  If you are preparing for more demanding backend interviews than
                  standard LeetCode-style prep covers, this is the kind of practice
                  environment that helps close that gap.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/38">
                  Best used when
                </p>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  You need realistic repetition
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  Use BlankRepo when you want to rehearse the transition from vague
                  prompt to working code, pressure-test your assumptions, and see
                  whether your design survives requirement changes.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/38">
                  Not the focus
                </p>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  Generic entry-level interview prep
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  This is not meant to replace foundational algorithm practice.
                  It is built for candidates who need a better way to practice the
                  more open-ended backend interview formats showing up later in the
                  hiring ladder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}