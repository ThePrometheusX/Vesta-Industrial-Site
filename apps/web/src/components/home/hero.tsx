import { media } from '@/data/catalogue';
export function Hero() {
  return <section className="relative">
			<div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
				<div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-y border-foreground/15 py-3 font-tech text-[11px] uppercase tracking-widest text-muted-foreground">
					<span>Est. 2026 — Belgrade - Ljubljana</span>
					<span className="hidden sm:inline">ISO 9001 : 2015 certified</span>
					<span>12 400 MT / year</span>
				</div>

				<h1 className="max-w-5xl pt-14 font-display text-[clamp(3rem,8.5vw,7.5rem)] font-medium leading-[0.95] tracking-tight sm:pt-20">
					Elements that make <em className="italic text-primary">aluminium</em> perform.
				</h1>

				<div className="grid gap-10 pb-16 pt-10 sm:pb-24 sm:pt-14 lg:grid-cols-12">
					<p className="max-w-md text-base leading-relaxed text-muted-foreground lg:col-span-5">
						Vesta Industrial supplies metallurgical silicon, magnesium, manganese, master alloys and
						smelting fluxes to primary aluminium producers and casthouses — assayed, certified and
						delivered to the potroom door.
					</p>
					<div className="flex flex-wrap items-start gap-4 lg:col-span-7 lg:justify-end">
						<a href="mailto:sales@vesta-industrial.com?subject=Quotation%20request" className="bg-primary px-8 py-4 font-tech text-xs uppercase tracking-widest text-primary-foreground transition-transform active:scale-[0.98]">
							Request a quote
						</a>
						<a href="#range" className="border border-foreground/30 px-8 py-4 font-tech text-xs uppercase tracking-widest transition-colors hover:border-foreground">
							View the range
						</a>
					</div>
				</div>
			</div>

			<div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
				<div className="trace-track h-px bg-foreground/20">
					<div className="trace-runner">
						<span className="trace-dot" />
					</div>
				</div>
				<div className="flex items-center justify-between py-2 font-tech text-[10px] uppercase tracking-widest text-muted-foreground">
					<span>Potline B — tapping</span>
					<span className="text-primary">962 °C</span>
				</div>
			</div>

			<figure className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
				<img src={media.hero} alt="Worker in a heat suit tapping molten aluminium in a smelter potroom" className="aspect-[21/9] w-full object-cover" width={2048} height={878} fetchPriority="high" />
				<figcaption className="flex items-center justify-between border-b border-foreground/15 py-2 font-tech text-[10px] uppercase tracking-widest text-muted-foreground">
					<span>Fig. 01 — Potroom, reduction cells</span>
					<span>Hall-Héroult process</span>
				</figcaption>
			</figure>
		</section>;
}