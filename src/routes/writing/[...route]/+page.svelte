<script lang="ts">
	import type { PageServerData } from './$types';
	import { marked } from 'marked';
	import hljs from 'highlight.js';
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { markedHighlight } from 'marked-highlight';

	export let data: PageServerData;

	marked.use(gfmHeadingId());
	marked.use(
		markedHighlight({
			langPrefix: 'hljs language-',
			highlight(code, lang) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				return hljs.highlight(code, { language }).value;
			}
		})
	);
	let render_content = marked(data.markdown_content, {
		async: true,
		gfm: true
	});
</script>

<main class="flex flex-col gap-3 py-20 sm:py-5 writing_content">
	{#await render_content}
		<p>Loading...</p>
	{:then value}
		{@html value}
	{/await}
</main>
