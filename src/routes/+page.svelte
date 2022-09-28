<script lang="ts">
	import Team from "$lib/components/Team.svelte";
	import Container from "$lib/components/Container.svelte";
	import GitHubIcon from 'svelte-icons/go/GoMarkGithub.svelte';
	import InstagramIcon from 'svelte-icons/fa/FaInstagram.svelte';
	import FacebookIcon from 'svelte-icons/fa/FaFacebook.svelte';
	import TwitterIcon from 'svelte-icons/fa/FaTwitter.svelte';
	import Card from "../lib/components/Card.svelte";
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
			href="https://facebook.com/fructoland"
			alt="Facebook"
			class="w-8 h-8"
			target="_blank"
		>
			<FacebookIcon />
		</a>
		<a
			href="https://instagram.com/fructoland"
			alt="Instagram"
			class="w-8 h-8"
			target="_blank"
		>
			<InstagramIcon />
		</a>
		<a
			href="https://twitter.com/fructoland"
			alt="Instagram"
			class="w-8 h-8"
			target="_blank"
		>
			<TwitterIcon />
		</a>
		<a
			href="https://github.com/fructoland"
			alt="GitHub"
			class="w-8 h-8"
			target="_blank"
		>
			<GitHubIcon />
		</a>
	</div>
</div>

<Container
	class="grid grid-cols-1 grid-flow-cols sm:grid-cols-2 justify-center gap-4"
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
</Container>
<Container>
	<h2 class="text-2xl">
		Our projects
	</h2>
	<a 
		href="https://paquet.shop"
		target="_blank"
		alt="Paquet App"
	>
		<Card
			class="relative h-64"
		>
			<img 
				src="/projects/paquet.png" 
				alt="Paquet"
				class="w-full h-full object-contain"
			/>
			<div
				class="absolute w-full h-1/2 top-32 left-0 bg-gradient-to-b from-transparent via-black/25 to-black/50"
			>
				<h3 class="absolute bottom-4 left-4 text-3xl text-white">
					Paquet
				</h3>
			</div>
		</Card>
	</a>
</Container>

<Team />
