<script lang="ts">
	export let link: string;
</script>

<a href={link} target="_blank">
	<slot />
</a>
