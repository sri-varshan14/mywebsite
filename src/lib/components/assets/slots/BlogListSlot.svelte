<script lang="ts">
	import type { Blog } from '$lib/db/scheme';
	import RightArrow from '../svg/RightArrow.svelte';

	export let blog: Blog;
	let on_hover = false;

	function mouse_enter() {
		on_hover = true;
	}

	function mouse_leave() {
		on_hover = false;
	}

	function getDateString(date_str: string): string {
		let monthName = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];
		let result = '';
		const date = new Date(date_str);
		result =
			result +
			monthName[date.getMonth()] +
			', ' +
			date.getDay().toString() +
			' ' +
			date.getFullYear().toString();
		return result;
	}
</script>

<a href={'/writing' + blog.route}>
	<div on:mouseenter={mouse_enter} on:mouseleave={mouse_leave}>
		<div class="flex items-center justify-between py-5">
			<span class="flex items-center gap-2 {on_hover ? 'opacity-50' : 'opacity-100'}">
				<h3 class="font-semibold">{blog.title}</h3>
				<RightArrow
					cssClasses="arrow {on_hover ? 'opacity-50' : 'opacity-0 translate-x-[-0.5rem]'}"
				/>
			</span>
			<p>{getDateString(blog.date)}</p>
		</div>
		<div class="w-full h-[1px] bg-ctp-text opacity-20"></div>
	</div>
</a>
