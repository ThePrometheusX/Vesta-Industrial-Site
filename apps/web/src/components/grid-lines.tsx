/**
 * Fixed vertical alignment lines — the visible modular grid the whole page
 * snaps to. Purely decorative, sits behind all content.
 */
export function GridLines() {
	return (
		<div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 flex justify-center">
			<div className="grid h-full w-full max-w-[88rem] grid-cols-2 border-x border-foreground/10 sm:grid-cols-4 lg:grid-cols-6">
				<div className="border-r border-foreground/10" />
				<div className="border-r border-foreground/10" />
				<div className="hidden border-r border-foreground/10 sm:block" />
				<div className="hidden border-r border-foreground/10 sm:block" />
				<div className="hidden border-r border-foreground/10 lg:block" />
				<div className="hidden lg:block" />
			</div>
		</div>
	);
}
