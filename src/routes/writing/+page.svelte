<script lang="ts">
	import BlogListSlot from '$lib/components/assets/slots/BlogListSlot.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	let blogs = data.post;
</script>

<svelte:head>
	<title>Blogs | Srivarshan</title>
</svelte:head>

<div class="py-[14vh] max-w-2xl">
	{#each blogs as blog_info}
		<BlogListSlot blog={blog_info} />
	{/each}
</div>
