import { media, stats } from '@/data/catalogue';

export function MediaStrip() {
	return (
		<section aria-label="Foundry pour and company figures" className="relative">
			<img
				src={media.pour}
				alt="Molten aluminium poured from a crucible into a casting mould"
				className="h-[52vh] w-full object-cover sm:h-[64vh]"
				width={2048}
				height={878}
				loading="lazy"
			/>
			<div className="bg-primary text-primary-foreground">
				<div className="mx-auto grid w-full max-w-[88rem] grid-cols-1 px-5 sm:grid-cols-3 sm:px-8">
					{stats.map((stat, i) => (
						<div
							key={stat.label}
							className={`py-8 sm:py-10 ${i > 0 ? 'border-t border-primary-foreground/25 sm:border-l sm:border-t-0 sm:pl-8' : ''}`}
						>
							<p className="font-display text-5xl font-medium tracking-tight">{stat.value}</p>
							<p className="pt-2 font-tech text-[11px] uppercase tracking-widest text-primary-foreground/70">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
