export const SITE = {
	title: 'hungrimind',
	description: 'A place for learning',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/tadaspetra/hungrimind/tree/main`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/nz8kFDm7gN`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'hungrimind',
	appId: '2S1CA35SC2',
	apiKey: '32d165dd0602d9d58e432e8df472742a',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Getting Started': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Install Flutter for Mac', link: 'en/install_flutter_macos' },
		],
		'Learn': [{ text: 'Widget Tree', link: 'en/widget_tree' }],
		'Build': [{ text: 'Coming Soon', link: 'en/comingsoon' }],
		'Resources': [{ text: 'Flutter Roadmap', link: 'https://tadaspetra.gumroad.com/l/flutterroadmap' }],
	},
};
