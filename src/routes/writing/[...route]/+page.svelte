<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import type { PageServerData } from './$types';
	import Heading1 from '$lib/components/BlogMarkdownComp/Heading1.svelte';

	export let data: PageServerData;
</script>

<main class="flex flex-col gap-3 py-20 content_area">
	<SvelteMarkdown source={data.content} />
</main>
