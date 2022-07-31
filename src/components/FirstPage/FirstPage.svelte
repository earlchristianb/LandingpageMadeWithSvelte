<script>
import HeroPicture from "./fragments/HeroPicture.svelte";
import HeroTextAndButton from "./fragments/HeroTextAndButton.svelte";
import LogoAndButtons from "./fragments/LogoAndButtons.svelte";


</script>

<section class="h-auto md:h-[100vh] w-full space-y-5 md:space-y-6 xl:space-y-10 bg-sky-300">
        <LogoAndButtons/>
        <div class="flex flex-col md:flex-row space-y-5 md:space-y-5 md:space-x-3">
        <HeroTextAndButton/>
		<HeroPicture/>
        </div>
</section>