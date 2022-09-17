<script lang="ts">
	import Team from "$lib/components/Team.svelte"
	import GitHubIcon from 'svelte-icons/go/GoMarkGithub.svelte';
	import InstagramIcon from 'svelte-icons/fa/FaInstagram.svelte';
	import TwitterIcon from 'svelte-icons/fa/FaTwitter.svelte';
</script>

<div
	class="w-full text-center bg-gradient-to-tr from-red-200 via-yellow-200 to-green-200 p-4 rounded-b-3xl"
>
	<img 
		src="/logo-512x512.png" 
		alt="Fructo logo"
		class="w-64 h-64 mx-auto rounded-full"
	/>
	<h1
		class="text-3xl mt-2"
	>
		Fructo
	</h1>
	<p class="opacity-75">
		We make useful things
	</p>
	<div class="flex justify-center items-center gap-2 mt-4 opacity-75">
		<a
			href="https://github.com/fructoland"
			alt="GitHub"
			class="w-8 h-8"
		>
			<GitHubIcon />
		</a>
		<a
			href="https://instagram.com/fructoland"
			alt="Instagram"
			class="w-8 h-8"
		>
			<InstagramIcon />
		</a>
		<a
			href="https://twitter.com/fructoland"
			alt="Instagram"
			class="w-8 h-8"
		>
			<TwitterIcon />
		</a>
	</div>
</div>

<div
	class="grid grid-cols-1 grid-flow-cols max-w-lg mx-auto sm:grid-cols-2 justify-center gap-4 p-4"
>
	<div>
		<h2 class="text-2xl">
			Our mission
		</h2>
		<p>
			Fructo is a company that wants to bring back the original objective
			of technology - to bring information at our fingertips. 
			Our objective is to bring useful information at a glance.
		</p>
	</div>
	<div>
		<h2 class="text-2xl">
			How are we doing it?
		</h2>
		<p>
			We believe in the future of web technology and web apps
			and the possibilities it brings.
			That's why we are working hard to bring you useful tech
			using the future of web.
		</p>
	</div>
</div>

<Team />