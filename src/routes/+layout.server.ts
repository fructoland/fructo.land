import { locales } from "$lib/translations";
import type { ServerLoadEvent } from "@sveltejs/kit";

export function load({ request }: ServerLoadEvent) {
	const language = request.headers.get("Accept-Language")?.slice(0, 2);

	if (language && locales.get().includes(language)) {
		return {
			lang: language
		}
	}
}  