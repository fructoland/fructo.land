import i18n, { type Config } from "sveltekit-i18n";

const config: Config = {
	loaders: [
		{
			locale: "en",
			key: "home",
			routes: ["/"],
			loader: async () => (await import("./i18n/en/home.json")).default
		},
		{
			locale: "en",
			key: "common",
			loader: async () => (await import("./i18n/en/common.json")).default
		},
		{
			locale: "ru",
			key: "home",
			routes: ["/"],
			loader: async () => (await import("./i18n/ru/home.json")).default
		},
		{
			locale: "ru",
			key: "common",
			loader: async () => (await import("./i18n/ru/common.json")).default
		},
		{
			locale: "uk",
			key: "home",
			routes: ["/"],
			loader: async () => (await import("./i18n/uk/home.json")).default
		},
		{
			locale: "uk",
			key: "common",
			loader: async () => (await import("./i18n/uk/common.json")).default
		}
	]
}

export const languages: Record<string, string> = {
	"en": "english",
	"ru": "russian",
	"uk": "ukrainian"
}

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);