<script lang="ts">
	import Team from "./Team.svelte";
	import Container from "$lib/components/Container.svelte";
	import Card from "../lib/components/Card.svelte";
	import Header from "./Header.svelte";
    import HighlightCard from "$lib/components/HighlightCard.svelte";
</script>

<Header />

<Container>
	<a href="https://blog.fructo.land" target="_blank">
		<HighlightCard>
			<b class="text-xl">NEW</b>
			<br/>
			We have a new blog! Check it out!
			This is where we will post about our progress, achievements, and more!
		</HighlightCard>
	</a>
</Container>

<Container
	class="grid grid-cols-1 grid-flow-cols sm:grid-cols-2 justify-center gap-4"
>
	
	<div>
		<h2 class="text-2xl">
			Our mission
		</h2>
		<p>
			Fructo is an organization that wants to bring back the original
			objective of technology - to bring information at our fingertips.
			Our objective is to bring useful information at a glance.
		</p>
	</div>
	<div>
		<h2 class="text-2xl">
			How are we doing it?
		</h2>
		<p>
			We believe in the future of web technology and web apps and the possibilities
			it brings. That's why we are working hard to bring you useful tech using the
			future of web.
		</p>
	</div>
</Container>
<Container>
	<h2 class="text-2xl">
		Our projects
	</h2>
	<div
		class="grid grid-cols-1 grid-flow-cols sm:grid-cols-2 justify-center gap-4"
	>
		<a 
			class="flex-1"
			href="https://paquet.fructo.land"
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
