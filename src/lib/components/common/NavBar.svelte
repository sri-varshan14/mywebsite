<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '../assets/svg/Logo.svelte';
	let nav_links = [
		{ name: 'About', link: '/' },
		{ name: 'Writing', link: '/writing' },
		{ name: 'Misc', link: '/misc' }
	];
</script>

<div class="w-40 sticky top-[5rem] max-h-60">
	<div class="pb-20">
		<a href="/">
			<Logo
				cssClasses="w-10 border-2 border-ctp-green rounded-full p-1"
				logo="fill-ctp-green"
				rect="fill-ctp-base"
			/>
		</a>
	</div>
	<nav class="">
		{#each nav_links as { name, link }}
			<a href={link} class="flex relative">
				<svg
					class="w-5 absolute left-[-2ch] {$page.route.id == link
						? 'fill-ctp-green opacity-100'
						: 'fill-transparent'} "
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g><g id="SVGRepo_iconCarrier">
						<path
							d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
						></path>
					</g></svg
				>
				<li
					class="{$page.route.id == link
						? 'text-ctp-green'
						: 'text-ctp-surface2 hover:text-ctp-subtext0'} "
				>
					{name}
				</li>
			</a>
		{/each}
	</nav>
</div>
