<script lang="ts">
	export let cssClasses: string;
	export let rect: string;
	export let logo: string;
</script>

<svg class={cssClasses} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
	<rect class={rect} width="200" height="200" rx="40" />
	<path
		class={logo}
		d="M175 25L44.0828 78.3333L102.219 128.333L25 175L170.118 141.667L104.882 85.4762L175 25Z"
	/>
</svg>
