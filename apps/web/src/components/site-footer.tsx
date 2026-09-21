export function SiteFooter() {
	return (
		<footer className="relative z-10 border-t border-foreground/15">
			<div className="mx-auto flex w-full max-w-[88rem] flex-col gap-3 px-5 py-8 font-tech text-[11px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
				<span>© 2026 Vesta Industrial Ltd</span>
				<span className="text-foreground">Si · Mg · Mn · AlTi · AlSr · Fluxes</span>
				<span>Belgrade — Ploče — Rijeka — Trieste</span>
			</div>
		</footer>
	);
}
