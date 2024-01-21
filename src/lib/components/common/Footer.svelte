<script lang="ts">
	import LogoLinkSlot from '../assets/slots/LogoLinkSlot.svelte';
	import Github from '../assets/svg/Github.svelte';
	import LinkedIn from '../assets/svg/LinkedIn.svelte';
	import Rss from '../assets/svg/RSS.svelte';
	import TwitterX from '../assets/svg/TwitterX.svelte';
	import Youtube from '../assets/svg/Youtube.svelte';
</script>

<footer class="w-full flex items-center justify-between">
	<p class="text-sm">&copy; 2024 Srivarshan Geetha</p>
	<div class="flex items-center gap-1 sm:gap-0">
		<LogoLinkSlot link="/rss.xml">
			<Rss cssClasses="w-4 aspect-square fill-ctp-text hover:opacity-50" />
		</LogoLinkSlot>
		<LogoLinkSlot link="https://github.com/sri-varshan14">
			<Github cssClasses="social_link" />
		</LogoLinkSlot>
		<LogoLinkSlot link="https://twitter.com/Sri4574">
			<TwitterX cssClasses="social_link" />
		</LogoLinkSlot>
		<LogoLinkSlot link="">
			<LinkedIn cssClasses="social_link" />
		</LogoLinkSlot>
		<LogoLinkSlot link="https://www.youtube.com/@sri-varshan14">
			<Youtube cssClasses="social_link" />
		</LogoLinkSlot>
	</div>
</footer>
