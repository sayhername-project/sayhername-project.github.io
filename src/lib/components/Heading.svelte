<script>
  let { scene = "", title = "", subtitle = "", source = "" } = $props();
</script>

<section class="scene-heading">
  <div class="heading-wrapper">
    {#if scene}
      <h2>{scene}</h2>
    {/if}
    <h3>{title}</h3>
    {#if subtitle}
      <p class="subtitle">{subtitle}</p>
    {/if}
    {#if source}
      <p class="source"><cite>{source}</cite></p>
    {/if}
  </div>
</section>

<style>
  .scene-heading {
    background: #fafafa;
    border-left: 4px solid #726e97;
    border-radius: 8px;
    padding: 2rem;
    margin: 2rem auto;
    width: 600px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    text-align: left;
  }

  h2 {
    font-family: "Courier New", monospace;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #726e97;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    color: #111;
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 1.1rem;
    color: #333;
    line-height: 1.6;
  }

  .source {
    margin-top: 1rem;
  }

  cite {
    font-size: 0.9rem;
    color: #666;
    font-style: italic;
  }
</style>