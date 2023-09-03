<script>
import TailwindCss from './lib/TailwindCSS.svelte';

  import { routes } from "../.routify/routes";
  import { Router } from '@roxi/routify';
</script>
<TailwindCss/>
<Router {routes} />
<!-- <main>
  <p class="underline decoration-wavy ">The quick brown fox...</p>
</main> -->

<style>

</style>
