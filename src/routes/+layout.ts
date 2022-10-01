import { locale, loadTranslations } from '$lib/translations';
import type { LoadEvent } from "@sveltejs/kit"

export const load = async ({ url, data }: LoadEvent) => {
    const { pathname } = url;

    const defaultLocale = data?.lang ?? 'en';
    const initLocale = locale.get() || defaultLocale;

    await loadTranslations(initLocale, pathname);

    return {};
}
