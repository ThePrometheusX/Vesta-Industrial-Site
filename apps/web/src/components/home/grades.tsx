import { masterAlloys, siliconSpecs } from '@/data/catalogue';

export function Grades() {
	return (
		<section id="grades" className="relative py-20 sm:py-28">
			<div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
				<div className="flex items-baseline justify-between border-b border-foreground/15 pb-3">
					<span className="font-tech text-[11px] uppercase tracking-widest text-primary">02 — Grades & chemistry</span>
					<span className="hidden font-tech text-[11px] uppercase tracking-widest text-muted-foreground sm:inline">
						Values in wt %
					</span>
				</div>

				<div className="grid gap-16 pt-12 lg:grid-cols-2 lg:gap-12">
					<div>
						<h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
							Metallurgical silicon
						</h2>
						<table className="mt-8 w-full border-collapse font-tech text-sm">
							<thead>
								<tr className="text-left text-[10px] uppercase tracking-widest text-muted-foreground">
									<th className="pb-3 pr-4 font-medium">Grade</th>
									<th className="pb-3 pr-4 font-medium">Si</th>
									<th className="pb-3 pr-4 font-medium">Fe</th>
									<th className="pb-3 pr-4 font-medium">Al</th>
									<th className="pb-3 font-medium">Ca</th>
								</tr>
							</thead>
							<tbody>
								{siliconSpecs.map(spec => (
									<tr key={spec.grade} className="border-t border-foreground/15">
										<td className="py-3.5 pr-4 text-primary">{spec.grade}</td>
										<td className="py-3.5 pr-4">{spec.si}</td>
										<td className="py-3.5 pr-4">{spec.fe}</td>
										<td className="py-3.5 pr-4">{spec.al}</td>
										<td className="py-3.5">{spec.ca}</td>
									</tr>
								))}
							</tbody>
						</table>
						<p className="pt-4 font-tech text-[10px] uppercase tracking-widest text-muted-foreground">
							Tighter impurity windows on request · sizing 10–100 mm
						</p>
					</div>

					<div>
						<h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
							Master alloys
						</h2>
						<table className="mt-8 w-full border-collapse font-tech text-sm">
							<thead>
								<tr className="text-left text-[10px] uppercase tracking-widest text-muted-foreground">
									<th className="pb-3 pr-4 font-medium">Alloy</th>
									<th className="pb-3 pr-4 font-medium">Addition</th>
									<th className="hidden pb-3 pr-4 font-medium sm:table-cell">Form</th>
									<th className="pb-3 font-medium">Typical use</th>
								</tr>
							</thead>
							<tbody>
								{masterAlloys.map(alloy => (
									<tr key={alloy.alloy} className="border-t border-foreground/15">
										<td className="py-3.5 pr-4 text-primary">{alloy.alloy}</td>
										<td className="py-3.5 pr-4">{alloy.addition}</td>
										<td className="hidden py-3.5 pr-4 sm:table-cell">{alloy.form}</td>
										<td className="py-3.5">{alloy.use}</td>
									</tr>
								))}
							</tbody>
						</table>
						<p className="pt-4 font-tech text-[10px] uppercase tracking-widest text-muted-foreground">
							Certificate of analysis with every lot · EN 573 / EN 1789
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
