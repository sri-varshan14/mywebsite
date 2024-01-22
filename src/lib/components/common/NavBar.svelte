<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '../assets/svg/Logo.svelte';
	let nav_links = [
		{ name: 'About', link: '/' },
		{ name: 'Writing', link: '/writing' },
		{ name: 'Misc', link: '/misc' }
	];

	$: selectroute = '/' + $page.route.id?.split('/')[1];
</script>

<div class="w-40 sm:w-full md:w-full sticky sm:static md:static top-[5rem] max-h-60">
	<div class="pb-20 sm:pb-4 md:pb-4">
		<a href="/">
			<Logo
				cssClasses="w-10 border-2 border-ctp-green rounded-full p-1"
				logo="fill-ctp-green"
				rect="fill-ctp-base"
			/>
		</a>
	</div>
	<nav class="flex flex-col sm:flex-row md:flex-row sm:gap-4 md:gap-4">
		{#each nav_links as { name, link }}
			<a href={link} class="flex relative">
				<svg
					class="w-5 absolute left-[-2ch] {selectroute == link
						? 'fill-ctp-green opacity-100'
						: 'fill-transparent'} sm:opacity-0 md:opacity-0"
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
					class="{selectroute == link
						? 'text-ctp-green'
						: 'text-ctp-surface2 hover:text-ctp-subtext0'} "
				>
					{name}
				</li>
			</a>
		{/each}
	</nav>
</div>
