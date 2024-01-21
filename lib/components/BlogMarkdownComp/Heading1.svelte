<script lang="ts">
	let data: any;
	$: id_value = data?.innerText;
</script>

<h1 class="py-2 text-ctp-green" id={id_value} bind:this={data}>
	<slot />
</h1>
