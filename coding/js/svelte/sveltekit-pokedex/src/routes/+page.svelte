<script>
    import { pokemon } from '../stores/pokestore.js'
    import PokemonCard from '../components/PokemonCard.svelte';
</script>

<svelte:head>
    <title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
{#each $pokemon as pokeman}
    <PokemonCard {pokeman}/>
{/each}
</div>


