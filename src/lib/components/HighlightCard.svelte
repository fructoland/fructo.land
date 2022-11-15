<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<div class="bg-gradient-to-tr from-red-200 via-yellow-200 to-green-200 rounded-2xl p-1">
	<Card class="bg-white p-4">
		<slot />
	</Card>
</div>
