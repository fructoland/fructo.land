<script lang="ts">
	import { team } from "../lib/team";
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
		class="flex flex-row justify-center"
	>
		{#each team as member}
			<div>
				<img 
					src={member.avatar}
					alt={member.name}
					class="w-32 h-32 rounded-full mx-auto"
				/>
				<p>
					{member.name}
				</p>
				<a 
					href={`mailto:${member.email}`}
					class="opacity-50"
				>
					{member.email}
				</a>
			</div>
		{/each}
	</div>
</div>