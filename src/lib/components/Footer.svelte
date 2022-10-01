<script lang="ts">
	import { locale, locales, languages } from "$lib/translations";
	import Container from "./Container.svelte";

	function changeTo(lang: string) {
		locale.set(lang);
	}

</script>

<div>
	<Container>
		<h2
			class="text-2xl"
		>
			Read in your language
		</h2>
		{#each locales.get() as lang}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a
				on:click={() => changeTo(lang)}
				href="#"
			>
				{languages[lang].charAt(0).toUpperCase() + languages[lang].slice(1)}
			</a>
			{#if locales.get().indexOf(lang) !== locales.get().length - 1}
				{" "}&middot;{" "}
			{/if}
		{/each}
	</Container>
</div>