<script lang="ts">
	import InstagramIcon from "svelte-icons/fa/FaInstagram.svelte";
	import GitHubIcon from "svelte-icons/fa/FaGithub.svelte";
	import TwitterIcon from "svelte-icons/fa/FaTwitter.svelte";
	import DiscordIcon from "svelte-icons/fa/FaDiscord.svelte";
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
		Fructoland
	</h1>
		<p class="opacity-75">
			We make useful things
		</p>
	<div class="flex justify-center items-center gap-2 mt-4 opacity-75">
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
		<a
			href="https://discord.gg/DXKe9aSZh6"
			alt="Discord"
			class="w-8 h-8"
			target="_blank"
		>
			<DiscordIcon />
		</a>
	</div>
</div>
