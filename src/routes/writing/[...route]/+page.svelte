<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<main class="flex flex-col gap-3 py-20 sm:py-5 writing_content">
	{@html data.render_content}
</main>
