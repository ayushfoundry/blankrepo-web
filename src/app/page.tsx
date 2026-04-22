export default function Home() {
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
    </main>
  );
}