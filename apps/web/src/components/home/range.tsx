import { range } from '@/data/catalogue';

export function Range() {
	return (
		<section id="range" className="relative py-20 sm:py-28">
			<div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
				<div className="flex items-baseline justify-between border-b border-foreground/15 pb-3">
					<span className="font-tech text-[11px] uppercase tracking-widest text-primary">01 — The range</span>
					<span className="hidden font-tech text-[11px] uppercase tracking-widest text-muted-foreground sm:inline">
						Five product families
					</span>
				</div>
				<h2 className="max-w-3xl pt-8 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
					A narrow catalogue, held to a wide tolerance of zero.
				</h2>

				<div className="mt-14">
					{range.map(category => (
						<article
							key={category.index}
							className="group grid grid-cols-1 gap-4 border-t border-foreground/15 px-4 py-9 transition-colors last:border-b hover:bg-primary hover:text-primary-foreground sm:-mx-4 sm:grid-cols-12 sm:gap-6 sm:px-8"
						>
							<span className="font-tech text-xs tracking-widest text-primary group-hover:text-primary-foreground sm:col-span-1">
								{category.index}
							</span>
							<div className="sm:col-span-4">
								<h3 className="font-display text-3xl font-medium leading-none tracking-tight">
									{category.name}
								</h3>
								<p className="pt-3 font-tech text-[11px] uppercase tracking-widest text-muted-foreground group-hover:text-primary-foreground/70">
									{category.tagline}
								</p>
							</div>
							<p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/85 sm:col-span-4">
								{category.description}
							</p>
							<div className="sm:col-span-3">
								<p className="font-tech text-xs leading-loose">{category.grades.join(' · ')}</p>
								<p className="pt-3 font-tech text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary-foreground/70">
									{category.packing}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
