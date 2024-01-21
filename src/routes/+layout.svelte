<script lang="ts">
	import Footer from '$lib/components/common/Footer.svelte';
	import NavBar from '$lib/components/common/NavBar.svelte';
	import '../app.css';
</script>

<svelte:body class="ctp-mocha" />
<div class="bg-ctp-crust text-ctp-text w-screen">
	<div
		class="min-h-screen flex justify-center py-[14vh] sm:py-[6vh] md:py-[6vh] sm:flex-col md:flex-col px-3 md:px-16"
	>
		<NavBar />
		<div class="w-[42rem] sm:w-full md:w-full sm:py-4 md:py-4">
			<a href="/">
				<h1 class="text-3xl font-bold text-ctp-green uppercase">Srivarshan</h1>
			</a>
			<slot />
			<Footer />
		</div>
	</div>
</div>
