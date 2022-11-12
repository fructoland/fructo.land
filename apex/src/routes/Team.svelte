<script lang="ts">
	import { team } from "$lib/data/team";
</script>

<div
	class="max-w-lg mx-auto p-4 text-center"
>
	<h2
		class="text-2xl"
	>
		Our members
	</h2>

	<div
		class="flex flex-row flex-wrap gap-4 justify-center"
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
</div>
