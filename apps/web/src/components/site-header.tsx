const LOGO_URL =
	'https://horizons-cdn.hostinger.com/2d21994a-bbc5-43c2-98c9-5eb71bcb5f37/vesta-industrial-fullres-nB3rD.png';

const navItems = [
	{ index: '01', label: 'Range', href: '#range' },
	{ index: '02', label: 'Grades', href: '#grades' },
	{ index: '03', label: 'Quality', href: '#quality' },
	{ index: '04', label: 'Contact', href: '#contact' },
];

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-30 border-b border-foreground/15 bg-background/90 backdrop-blur-sm">
			<div className="mx-auto flex h-16 w-full max-w-[88rem] items-stretch justify-between px-5 sm:px-8">
				<a href="/" className="flex items-center gap-3 self-center">
					<img
						src={LOGO_URL}
						alt="Vesta Industrial"
						className="h-10 w-auto object-contain sm:h-11"
						width={176}
						height={44}
					/>
					<span className="sr-only">Vesta Industrial Ltd</span>
				</a>
				<nav className="hidden items-stretch md:flex" aria-label="Primary">
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="flex items-center gap-2 border-l border-foreground/15 px-5 font-tech text-[11px] uppercase tracking-widest transition-colors hover:bg-primary hover:text-primary-foreground"
						>
							<span className="text-primary">{item.index}</span>
							{item.label}
						</a>
					))}
				</nav>
				<a
					href="mailto:sales@vesta-industrial.com?subject=Quotation%20request"
					className="flex items-center self-center bg-primary px-4 py-2.5 font-tech text-[11px] uppercase tracking-widest text-primary-foreground transition-transform active:scale-[0.98]"
				>
					Request a quote
				</a>
			</div>
		</header>
	);
}
