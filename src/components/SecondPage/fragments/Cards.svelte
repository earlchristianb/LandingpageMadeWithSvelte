<script>
	export let logo,title,description;
	
</script>

<div class="w-full flex flex-col items-center text-center space-y-4">
	<div
		class="bg-gray-500 text-white rounded-full h-28 w-28 flex items-center justify-center"
	>
		<h5>{logo}</h5>
	</div>
	<p class="font-bold w-60">{title}</p>
	<p class="w-72 text-gray-700">
		{description}
	</p>
</div>
