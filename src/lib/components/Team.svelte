<script lang="ts">
	import { team } from "$lib/data/team";
	import Button from "./Button.svelte";
</script>

<div
	class="max-w-lg mx-auto p-4 text-center"
>
	<h2
		class="text-2xl"
	>
		Our team
	</h2>

	<div
		class="flex flex-row gap-4 justify-center"
	>
		{#each team as member}
			<div>
				<img 
					src={member.avatar}
					alt={member.name}
					class="w-32 h-32 rounded-full mx-auto"
				/>
				<p class="mt-2">
					{member.name}
				</p>
				<a 
					href={`mailto:${member.email}`}
					class="opacity-50 text-sm"
				>
					{member.email}
				</a>
			</div>
		{/each}
	</div>
	<a
		href="/join"
	>
		<Button class="mt-2">
			Join us
		</Button>
	</a>
</div>
