import { contact } from '@/data/catalogue';

export function Contact() {
	return (
		<section id="contact" className="relative bg-foreground text-background">
			<div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28">
				<div className="flex items-baseline justify-between border-b border-background/20 pb-3">
					<span className="font-tech text-[11px] uppercase tracking-widest text-primary-foreground/80">
						04 — Contact
					</span>
					<span className="hidden font-tech text-[11px] uppercase tracking-widest text-background/50 sm:inline">
						Incoterms 2020 · FOB / CIF / DAP
					</span>
				</div>

				<h2 className="max-w-4xl pt-12 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-tight">
					Furnaces don't wait. <em className="italic text-primary-foreground/80">Neither do we.</em>
				</h2>

				<div className="mt-14 grid gap-10 lg:grid-cols-12">
					<div className="lg:col-span-7">
						<div className="grid gap-x-8 border-t border-background/20 py-6 sm:grid-cols-[8rem_1fr]">
							<span className="font-tech text-[10px] uppercase tracking-widest text-background/50">Sales desk</span>
							<a
								href={`mailto:${contact.email}`}
								className="font-tech text-lg text-background underline decoration-primary decoration-2 underline-offset-8 hover:decoration-background"
							>
								{contact.email}
							</a>
						</div>
						<div className="grid gap-x-8 border-t border-background/20 py-6 sm:grid-cols-[8rem_1fr]">
							<span className="font-tech text-[10px] uppercase tracking-widest text-background/50">Duty phone</span>
							<a href={`tel:${contact.phone.replaceAll(' ', '')}`} className="font-tech text-lg">
								{contact.phone}
							</a>
						</div>
						<div className="grid gap-x-8 border-y border-background/20 py-6 sm:grid-cols-[8rem_1fr]">
							<span className="font-tech text-[10px] uppercase tracking-widest text-background/50">Warehouses</span>
							<span className="font-tech text-lg">{contact.addresses.join(' · ')}</span>
						</div>
					</div>
					<div className="flex flex-col items-start gap-6 lg:col-span-5 lg:items-end">
						<a
							href={`mailto:${contact.email}?subject=Quotation%20request`}
							className="bg-primary px-10 py-5 font-tech text-xs uppercase tracking-widest text-primary-foreground transition-transform active:scale-[0.98]"
						>
							Request a quote
						</a>
						<p className="max-w-xs text-sm leading-relaxed text-background/60 lg:text-right">
							Send a grade, a tonnage and a delivery port — a trader replies within one working day
							with assay data and a firm offer.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
