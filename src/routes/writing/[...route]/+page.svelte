<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<main class="flex flex-col gap-3 py-20">
	<SvelteMarkdown source={data.content} />
</main>
