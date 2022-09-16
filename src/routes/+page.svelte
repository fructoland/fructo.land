<script lang="ts">
	import GoMarkGithub from 'svelte-icons/go/GoMarkGithub.svelte';
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
</script>

<div
	class="w-full text-center"
>
	<img 
		src="/logo-512x512.png" 
		alt="Fructo logo"
		class="w-64 h-64 mx-auto"
	/>
	<h1
		class="text-3xl"
	>
		Fructo
	</h1>
	<p>
		Premium doesn't mean expensive
	</p>
	<div class="flex justify-center items-center gap-2 mt-4">
		<a
			href="https://github.com/fructoland"
			alt="GitHub"
			class="w-8 h-8"
		>
			<GoMarkGithub />
		</a>
		<a
			href="https://instagram.com/fructoland"
			alt="Instagram"
			class="w-8 h-8"
		>
			<FaInstagram />
		</a>
	</div>
</div>