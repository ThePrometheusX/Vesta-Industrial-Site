export const media = {
	hero: 'https://images.hostinger.com/4600933c-1be7-4316-acf6-5a07b5d3fa9e.png',
	silicon: 'https://images.hostinger.com/542d2030-d2ff-4ffd-9318-1f8c43cf027d.png',
	alloys: 'https://images.hostinger.com/0f2de96e-b73e-4141-a5ef-1df0b712ba2b.png',
	pour: 'https://images.hostinger.com/0e414ce6-fccf-4b28-bfba-3d486c536b61.png',
};

export type RangeCategory = {
	index: string;
	name: string;
	tagline: string;
	description: string;
	grades: string[];
	packing: string;
};

export const range: RangeCategory[] = [
	{
		index: '01',
		name: 'Metallurgical Silicon',
		tagline: 'Si 553 · 441 · 3303 · 2202 · 1101',
		description:
			'Lumpy metallurgical-grade silicon for Al-Si casting alloys and wrought series. Consistent sizing 10–100 mm, low-fines, each lot assayed before dispatch.',
		grades: ['Si 553', 'Si 441', 'Si 3303', 'Si 2202', 'Si 1101'],
		packing: '1 MT big bags · 25 kg bags on pallets · bulk',
	},
	{
		index: '02',
		name: 'Magnesium',
		tagline: 'Mg 99.80 · Mg 99.90 · granules',
		description:
			'Primary magnesium ingots from 300 g to 7.5 kg and passivated granules for 5xxx-series alloying and desulphurisation. Tight oxide control, dry-warehouse stored.',
		grades: ['Mg 99.80 ingot', 'Mg 99.90 ingot', 'Mg granules 0.2–2 mm'],
		packing: 'Wooden cases · shrink-wrapped pallets · steel drums',
	},
	{
		index: '03',
		name: 'Manganese',
		tagline: 'Mn flakes 99.7 · briquettes 75/25 · 80/20',
		description:
			'Electrolytic manganese flakes and Al-Mn briquettes for controlled manganese additions in 3xxx can-stock and architectural extrusion billets.',
		grades: ['Mn flakes 99.7', 'Mn briquette 75/25', 'Mn briquette 80/20'],
		packing: '1 MT big bags · 50 kg steel drums',
	},
	{
		index: '04',
		name: 'Master Alloys',
		tagline: 'AlTi10 · AlSr10 · AlTi5B1 · AlMn20 · AlCu50',
		description:
			'Grain refiners, modifiers and hardeners cast as waffle, rod and cut bar. Full dissolution curves supplied; strontium recovery guaranteed per addition rate.',
		grades: ['AlTi10', 'AlSr10', 'AlTi5B1 rod', 'AlMn20', 'AlCu50', 'AlFe20', 'AlB3'],
		packing: 'Palletised waffle · coiled rod Ø 9.5 mm · cut bar in cases',
	},
	{
		index: '05',
		name: 'Fluxes',
		tagline: 'Covering · refining · drossing · Na/K-free',
		description:
			'Chloride-based covering, refining and drossing fluxes for crucible and reverberatory furnaces. Low-fume granulated grades, sodium- and potassium-free on request.',
		grades: ['Cover flux CV-2', 'Refining flux RF-6', 'Drossing flux DX-1', 'Na/K-free series'],
		packing: '20 kg PE-lined bags · 500 kg big bags',
	},
];

export type SiliconSpec = {
	grade: string;
	si: string;
	fe: string;
	al: string;
	ca: string;
};

export const siliconSpecs: SiliconSpec[] = [
	{ grade: 'Si 553', si: '≥ 98.5', fe: '≤ 0.50', al: '≤ 0.50', ca: '≤ 0.30' },
	{ grade: 'Si 441', si: '≥ 99.0', fe: '≤ 0.40', al: '≤ 0.40', ca: '≤ 0.10' },
	{ grade: 'Si 3303', si: '≥ 99.3', fe: '≤ 0.30', al: '≤ 0.30', ca: '≤ 0.03' },
	{ grade: 'Si 2202', si: '≥ 99.5', fe: '≤ 0.20', al: '≤ 0.20', ca: '≤ 0.02' },
	{ grade: 'Si 1101', si: '≥ 99.7', fe: '≤ 0.10', al: '≤ 0.10', ca: '≤ 0.01' },
];

export type MasterAlloy = {
	alloy: string;
	addition: string;
	form: string;
	use: string;
};

export const masterAlloys: MasterAlloy[] = [
	{ alloy: 'AlTi10', addition: 'Ti 9.0–11.0', form: 'Waffle · rod · cut bar', use: 'Grain refinement' },
	{ alloy: 'AlSr10', addition: 'Sr 9.0–11.0', form: 'Waffle · rod', use: 'Modification of Al-Si eutectic' },
	{ alloy: 'AlTi5B1', addition: 'Ti 4.5–5.5 · B 0.9–1.1', form: 'Rod Ø 9.5 mm · coil', use: 'Continuous grain refinement' },
	{ alloy: 'AlMn20', addition: 'Mn 18–22', form: 'Waffle · briquette', use: 'Mn correction, 3xxx series' },
	{ alloy: 'AlCu50', addition: 'Cu 48–52', form: 'Waffle', use: 'Cu addition, 2xxx series' },
	{ alloy: 'AlFe20', addition: 'Fe 18–22', form: 'Waffle', use: 'Fe correction' },
	{ alloy: 'AlB3', addition: 'B 2.5–3.5', form: 'Rod · waffle', use: 'Electrical-conductor grades' },
];

export type QualityStep = {
	index: string;
	title: string;
	description: string;
};

export const qualitySteps: QualityStep[] = [
	{
		index: 'Q1',
		title: 'Sourcing & pre-assay',
		description:
			'Material is bought against producer certificates, then re-sampled at our own warehouse before any lot is accepted into stock.',
	},
	{
		index: 'Q2',
		title: 'Spectrometric analysis',
		description:
			'Every outgoing lot is verified by OES and XRF to EN 573 and EN 1789. Certificates of analysis travel with the shipment, lot by lot.',
	},
	{
		index: 'Q3',
		title: 'Packing & marking',
		description:
			'Big bags, drums and cases are marked with grade, lot number and net weight. Moisture-barrier liners are standard on fluxes and magnesium.',
	},
	{
		index: 'Q4',
		title: 'Logistics & documentation',
		description:
			'Bonded stock across Belgrade, Ploče, Rijeka and Trieste. FOB, CIF or DAP under Incoterms 2020, with MSDS, CoA and customs documentation in one pack.',
	},
];

export const stats = [
	{ value: '38', label: 'Smelters supplied' },
	{ value: '14', label: 'Countries served' },
	{ value: '99.2 %', label: 'Lots on spec, 5-yr average' },
];

export const contact = {
	email: 'sales@vesta-industrial.com',
	phone: '+47 22 41 88 30',
	addresses: ['Belgrade', 'Ploče', 'Rijeka', 'Trieste'],
};
