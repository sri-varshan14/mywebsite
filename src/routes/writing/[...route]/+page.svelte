<script lang="ts">
	import type { PageServerData } from './$types';
	import { marked } from 'marked';

	export let data: PageServerData;
</script>

<main class="flex flex-col gap-3 py-20 sm:py-5 writing_content">
	{@html marked(data.content)}
</main>
