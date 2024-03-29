export const SITE = {
	title: 'hungrimind',
	description: 'for curious builders',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/tadaspetra/hungrimind/tree/main/public/ytbanner.png?raw=true',
		alt:
			'hungrimind.com' +
			' for curious builders',
	},
	twitter: 'hungrimind',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/tadaspetra/hungrimind/tree/main`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/nz8kFDm7gN`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Get Started': [
			{ text: 'Introduction', link: 'flutter/introduction' },
			{ text: 'What is Flutter?', link: 'flutter/introduction_flutter' },
			{ text: 'Install Flutter', link: 'https://docs.flutter.dev/get-started/install' },
		],
		'Learn': [
			{ text: 'Widget Tree', link: 'flutter/widget_tree' },
			{ text: 'What is a Widget?', link: 'flutter/widget' },
			{ text: 'Hot Reload & Hot Restart', link: 'flutter/hot_r' },
			{ text: 'BuildContext', link: 'flutter/buildcontext' },
			{ text: 'Keys', link: 'flutter/keys' },
			{ text: 'Apple Pay', link: 'flutter/apple_pay' },
		],
		'Build': [
			{ text: 'Coming Soon', link: 'flutter/comingsoon' },
		],
		'Resources': [
			{ text: 'Flutter Roadmap', link: 'https://tadaspetra.ck.page/products/flutter-roadmap' },
		],
	},
};
