<script lang="ts">
	import { t } from "$lib/translations";
	import InstagramIcon from "svelte-icons/fa/FaInstagram.svelte";
	import FacebookIcon from "svelte-icons/fa/FaFacebook.svelte";
	import GitHubIcon from "svelte-icons/fa/FaGithub.svelte";
	import TwitterIcon from "svelte-icons/fa/FaTwitter.svelte";
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
		{$t("home.moto")}
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