<script lang="ts">
	import Container from "./Container.svelte";

	const links: { href: string; text: string }[] = [
		{
			href: "https://blog.fructo.land",
			text: "Blog",
		}
	];
</script>

<Container>
	<h3 class="text-2xl">
		Links
	</h3>
	{#each links as link, i}
		<a class="underline" href="{link.href}" rel="noopener noreferrer">
			{link.text}
		</a>
		{#if i < links.length - 1}
			&middot;{" "}
		{/if}
	{/each}
</Container>
