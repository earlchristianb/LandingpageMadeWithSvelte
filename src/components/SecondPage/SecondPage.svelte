<script>
	import Cards from "./fragments/Cards.svelte";

	const arrayToDisplay = [
		{
			logo: "Clock",
			title: "48 hours turnaround time",
			description:
				"Just drop the files and we'll send them back to you within 48 hours.",
		},
		{
			logo: "CS",
			title: "24/7 Chat Support",
			description:
				"Got Questions? Just message us on Podmachine chat and we will be there.",
		},
		{
			logo: "Hand",
			title: "Dedicated podcast manager",
			description:
				"Our podcast managers will lock after your podcast day in and day out.",
		},
	];
</script>

<section
	class="w-full h-auto md:h-[100vh] space-y-5 md:space-y-16 xl:space-y-10 flex flex-col bg-orange-300"
>
	<div class="w-full flex justify-center mt-10 h-16">
		<h2 class="text-4xl font-bold">How can we help your podcast</h2>
	</div>
	<div class="flex justify-center">
		<div class="flex w-full md:mt-16">
			{#each arrayToDisplay as { logo, description, title }, index}
				<Cards {logo} {description} {title} />
			{/each}
		</div>
	</div>
</section>
