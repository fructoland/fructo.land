<script lang="ts">
	import { t } from "$lib/translations";
	import Team from "./Team.svelte";
	import Container from "$lib/components/Container.svelte";
	import Card from "../lib/components/Card.svelte";
	import Header from "./Header.svelte";
</script>

<Header />

<Container
	class="grid grid-cols-1 grid-flow-cols sm:grid-cols-2 justify-center gap-4"
>
	<div>
		<h2 class="text-2xl">
			{$t("home.our_mission.title")}
		</h2>
		<p>
			{$t("home.our_mission.text")}
		</p>
	</div>
	<div>
		<h2 class="text-2xl">
			{$t("home.how_are_we_doing_it.title")}
		</h2>
		<p>
			{$t("home.how_are_we_doing_it.text")}
		</p>
	</div>
</Container>
<Container>
	<h2 class="text-2xl">
		{$t("home.our_projects.title")}
	</h2>
	<div
		class="grid grid-cols-1 grid-flow-cols sm:grid-cols-2 justify-center gap-4"
	>
		<a 
			class="flex-1"
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
		<a 
			class="flex-1"
			href="https://marker.fructo.land"
			target="_blank"
			alt="Marker App"
		>
			<Card
				class="relative h-64"
			>
				<img 
					src="/projects/marker.png" 
					alt="Marker"
					class="w-full h-full object-contain"
				/>
				<div
					class="absolute w-full h-1/2 top-32 left-0 bg-gradient-to-b from-transparent via-black/25 to-black/50"
				>
					<h3 class="absolute bottom-4 left-4 text-3xl text-white">
						Marker
					</h3>
				</div>
			</Card>
		</a>
	</div>
</Container>

<Team />
