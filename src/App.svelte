<script>
  import TailwindCss from './lib/TailwindCSS.svelte';
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>
<TailwindCss/>
<Router {routes}/>
<!-- <main>
  <p class="underline decoration-wavy ">The quick brown fox...</p>
</main> -->

<style>

</style>
