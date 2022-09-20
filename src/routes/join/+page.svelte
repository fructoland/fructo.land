<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />
<img
	src="/illustrations/hire.svg"
	class="max-w-screen-sm mx-auto"
	alt=""
/>
<Container>
	<h1
		class="text-3xl font-bold"
	>
		Our open positions:
	</h1>
	<ul class="list-disc list-inside">
		<li>
			Hardware engineer
		</li>
		<li>
			Software engineer
		</li>
		<li>
			Designer
		</li>
		<li>
			Documentation
		</li>
		<li>
			Translator
		</li>
		<li>
			Tester
		</li>
	</ul>
	<div>
		For more information: <a href="https://instagram.com/fructoland" class="text-red-500">Instagram</a>, <a href="https://twitter.com/fructoland" class="text-blue-500">Twitter</a> or <a href="mailto:savin@fructo.land" class="text-yellow-500">Email</a>
	</div>
</Container>