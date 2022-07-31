<script>
import Reviews from "./fragments/Reviews.svelte";

	const customerReviews = [
		{
			logo: "LQE",
			name: "Loo Qin En",
			podcast: "Parents in Tech",
			feedback:
				"My experience with Podmahcine has been nothing short of stellar. They rallied a strong team of podcast managers, audio engineers, designers and writers to deliver a great podcast. Their fast turnarounds with accurate edits make them an excellent partner",
		},
		{
			logo: "KE",
			name: "Kenny Embry",
			podcast: "Balancing the Christian Life",
			feedback:
				"I cannot believe you will do 4 episodes for $50. That's extremely reasonable. I would like to develop a relationship with the person who edit my episodes. Again, whoever did the edit came VERY close to the spirit of podcast. My guest sounded good, like he should.",
		},
		{
			logo: "TH",
			name: "Toni Henson",
			podcast: "Black Family Table Talk",
			feedback:
				"Spoke with a podcast consultant who introduce me to Podmachine. The platform was absolutely phenomenal!",
		},
	];
</script>

<section
	class="w-full h-auto md:h-[100vh] space-y-5 md:space-y-16 xl:space-y-10 flex flex-col bg-emerald-300"
>
	<div class="w-full flex justify-center mt-10 h-16">
		<h2 class="text-4xl font-bold">Our Customers Love Us</h2>
	</div>
	<div class="flex justify-center">
		<div class="flex w-full md:mt-10">
			{#each customerReviews as { feedback, logo, name, podcast }, i}
				<Reviews {feedback} {logo} {name} {podcast}/>
			{/each}
		</div>
	</div>
</section>
