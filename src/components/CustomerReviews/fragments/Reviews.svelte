<script>
export let logo, name,podcast,feedback;
</script>

<div class="w-full flex flex-col items-center text-center space-y-4">
                    
					<div
						class="bg-gray-500 text-white rounded-full h-28 w-28 flex items-center justify-center"
					>
						<h5>{logo}</h5>
					</div>
                    <div class="flex flex-col justify-center">
                        <p class="font-bold w-60">{name}</p>
                    <p class="italic w-60">{podcast}</p>
                    </div>
					<p class="w-72 text-gray-700">
						{feedback}
					</p>
				</div>