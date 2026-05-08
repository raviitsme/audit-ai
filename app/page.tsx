import SpendForm from "./components/form/SpendForm";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="border-b-[6px] border-border py-20">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* Left side */}
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.3em] font-body text-red">
              AI Spend Audit
            </p>
            <h1 className="font-headline leading-none text-[clamp(4rem,8vw,10rem)] uppercase ">
              Your AI Stack Is overpriced
            </h1>
            <p className="max-w-2xl text-lg text-black">
              Discover wasted AI spend across ChatGPT, Claude, Cursor, Gemini,
              and more.
            </p>
            <button className="border-2 border-border bg-black px-8 py-4 uppercase tracking-widest cursor-pointer text-bg transition-all duration-200 hover:bg-white hover:text-black">
              Start Audit
            </button>
          </div>

          {/* Right Side */}
          <div className="relative border-[3px] border-border bg-paper p-8">
            {/* TOP LABEL */}
            <div className="mb-8 flex items-center justify-between border-b-2 border-border pb-4">
              <p className="text-sm uppercase tracking-[0.3em]">
                AI SPEND REPORT
              </p>

              <p className="bg-red px-3 py-1 text-xs uppercase text-bg">
                LIVE AUDIT
              </p>
            </div>

            {/* TABLE */}
            <div className="space-y-6 font-mono font-black text-sm uppercase">
              <div className="flex justify-between border-b border-border pb-2">
                <span>CHATGPT TEAM</span>
                <span>$240</span>
              </div>

              <div className="flex justify-between border-b border-border pb-2">
                <span>CLAUDE PRO</span>
                <span>$120</span>
              </div>

              <div className="flex justify-between border-b border-border pb-2">
                <span>CURSOR BUSINESS</span>
                <span>$80</span>
              </div>
            </div>

            {/* MASSIVE SAVINGS */}
            <div className="mt-12">
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-red">
                POTENTIAL SAVINGS
              </p>

              <h2 className="font-headline text-[clamp(2rem,8vw,7rem)] leading-none">
                $310
              </h2>

              <p className="text-xl uppercase">PER MONTH</p>
            </div>

            {/* ROTATED STAMP */}
            <div className="absolute -right-6 bottom-4 rotate-12 border-4 border-red px-6 py-2 text-2xl font-black uppercase text-red">
              OVERPAYING
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="border-b-[6px] border-border py-20">
        <div className="mb-16 flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red">
            INPUT YOUR STACK
          </p>
          <h2 className="font-headline text-[clamp(3rem,7vw,6rem)] leading-none uppercase">
            Enter your AI tools
          </h2>
        </div>

        <div className="space-y-8">
          <SpendForm />
        </div>
      </section>

      {/* Results */}
      <section className="border-b-[6px] border-border py-20">
        <div className="mb-16">
          <p className="text-xs uppercase font-bold tracking-[0.3rem] text-red mb-4">
            Audit Results
          </p>
          <h2 className="font-headline text-[clamp(3rem,8vw,7rem)] mb-8 leading-none uppercase">
            Your Ai spend breakdown
          </h2>

          {/* Grid for breakdown summary */}
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Total spend */}

            <div className="border-2 border-border bg-paper p-8">
              <p className="text-xs uppercase tracking-[0.3rem]">Total Spend</p>

              <h3 className="mt-6 font-headline text-6xl">$560</h3>
              <p className="mt-2 text-sm uppercase text-black">
                per month (estimated)
              </p>
            </div>

            {/* Optimised spend */}
            <div className="border-2 border-border bg-paper p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-red">
                Optimized Spend
              </p>

              <h3 className="mt-6 font-headline text-6xl">$250</h3>
              <p className="mt-2 text-sm uppercase text-black">
                after consolidation
              </p>
            </div>

            {/* Savings */}
            <div className="border-2 border-border bg-paper p-8 relative">
              <p className="text-xs uppercase tracking-[0.3rem] text-red">
                Monthly Savings
              </p>

              <h3 className="mt-6 font-headline text-6xl">$310</h3>

              <p className="text-sm uppercase mt-2 text-black">
                wasted ai spend recovery
              </p>
              {/* Stamp */}

              <div className="absolute -top-4 right-4 rotate-12 border-2 border-red px-3 py-1 text-xl font-black uppercase text-red">
                Leak detected
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="border-4 border-border bg-black p-12 text-center text-bg relative">
          <p className="text-xs uppercase tracking-[0.3rem] text-warning">
            Stop Overspending
          </p>
          <h2 className="mt-6 font-headline text-[clamp(3rem,6vw,6rem)] leading-none uppercase">
            Fix Your AI Stack Now
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-light">
            Most teams waste 20–40% on overlapping AI tools. Audit yours and
            reclaim your budget in minutes.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center">
            <button className="bg-red px-10 py-4 text-white uppercase tracking-widest font-bold hover:text-black hover:bg-white transition">
              Run Full Audit
            </button>

            <button className="border-2 border-bg px-10 py-4 uppercase tracking-widest hover:text-black hover:bg-white transition">
              Export Report
            </button>
          </div>

          {/* Footer */}
          <p className="mt-10 text-xs uppercase tracking-[0.3em] text-black">
            No signup required • Instant analysis
          </p>

          {/* Stamp */}
          <div className="absolute right-5 bottom-5 -rotate-12 text-warning text-3xl border-warning border-4 px-3 py-2">Trusted</div>
        </div>
      </section>
    </main>
  );
}
