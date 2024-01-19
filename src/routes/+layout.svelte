<script lang="ts">
	import Footer from '$lib/components/common/Footer.svelte';
	import NavBar from '$lib/components/common/NavBar.svelte';
	import '../app.css';
</script>

<svelte:body class="ctp-mocha" />
<div class="bg-ctp-crust text-ctp-text">
	<div class="min-h-screen flex justify-center py-[14vh]">
		<NavBar />
		<div class="w-[42rem]">
			<a href="/">
				<h1 class="text-3xl font-bold text-ctp-green uppercase">Srivarshan</h1>
			</a>
			<slot />
			<Footer />
		</div>
	</div>
</div>
