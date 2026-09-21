import { media, qualitySteps } from '@/data/catalogue';

export function Quality() {
	return (
		<section id="quality" className="relative py-20 sm:py-28">
			<div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
				<div className="flex items-baseline justify-between border-b border-foreground/15 pb-3">
					<span className="font-tech text-[11px] uppercase tracking-widest text-primary">03 — Quality & logistics</span>
					<span className="hidden font-tech text-[11px] uppercase tracking-widest text-muted-foreground sm:inline">
						Lot-by-lot traceability
					</span>
				</div>

				<div className="grid gap-12 pt-12 lg:grid-cols-12">
					<figure className="lg:col-span-5">
						<img
							src={media.silicon}
							alt="Metallurgical silicon chunks in a steel container at the Rotterdam warehouse"
							className="aspect-[3/2] w-full object-cover"
							width={1536}
							height={1024}
							loading="lazy"
						/>
						<figcaption className="flex items-center justify-between border-b border-foreground/15 py-2 font-tech text-[10px] uppercase tracking-widest text-muted-foreground">
							<span>Fig. 02 — Si 553, pre-dispatch assay</span>
							<span>Rotterdam</span>
						</figcaption>
						<img
							src={media.alloys}
							alt="Stacked aluminium master alloy waffle ingots on pallets"
							className="mt-10 aspect-[3/2] w-full object-cover"
							width={1536}
							height={1024}
							loading="lazy"
						/>
						<figcaption className="flex items-center justify-between border-b border-foreground/15 py-2 font-tech text-[10px] uppercase tracking-widest text-muted-foreground">
							<span>Fig. 03 — AlTi10 waffle, palletised</span>
							<span>Oslo</span>
						</figcaption>
					</figure>

					<div className="lg:col-span-7">
						<h2 className="max-w-xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
							Every lot assayed. Every certificate traceable.
						</h2>
						<div className="mt-10">
							{qualitySteps.map(step => (
								<div
									key={step.index}
									className="grid grid-cols-[3rem_1fr] gap-6 border-t border-foreground/15 py-7 last:border-b sm:grid-cols-[4rem_12rem_1fr]"
								>
									<span className="font-tech text-xs tracking-widest text-primary">{step.index}</span>
									<h3 className="font-display text-2xl font-medium tracking-tight">{step.title}</h3>
									<p className="col-span-2 text-sm leading-relaxed text-muted-foreground sm:col-span-1">
										{step.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
