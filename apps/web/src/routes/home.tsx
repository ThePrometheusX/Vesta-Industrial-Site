import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { media } from '@/data/catalogue';
import { Hero } from '@/components/home/hero';
import { Range } from '@/components/home/range';
import { MediaStrip } from '@/components/home/media-strip';
import { Grades } from '@/components/home/grades';
import { Quality } from '@/components/home/quality';
import { Contact } from '@/components/home/contact';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Vesta Industrial — Alloying materials for aluminium smelters',
		description:
			'Metallurgical silicon, magnesium, manganese, master alloys (AlTi10, AlSr10, AlTi5B1) and smelting fluxes — assayed, certified and delivered to potrooms worldwide.',
		image: media.hero,
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Vesta Industrial Ltd',
			description:
				'Supplier of metallurgical silicon, magnesium, manganese, aluminium master alloys and smelting fluxes to primary aluminium producers.',
			email: 'sales@vesta-industrial.com',
			telephone: '+47 22 41 88 30',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Belgrade',
				addressCountry: 'RS',
			},
		},
	});
}

export default function HomePage() {
	return (
		<main className="relative z-10">
			<Hero />
			<Range />
			<MediaStrip />
			<Grades />
			<Quality />
			<Contact />
		</main>
	);
}
