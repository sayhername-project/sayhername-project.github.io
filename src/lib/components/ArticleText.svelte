<script>
  let { children } = $props();
</script>

<div class="article-text">
  <p>
    {@render children()}
  </p>
</div>

<style>
  .article-text {
    width: 100%;
    min-height: 30vh;
    padding: 20px;
    margin: 0 auto 2rem auto;
    color: #111;
  }

  .article-text p {
    font-size: large;
    line-height: 1.7;
    opacity: 0.9;
  }
</style>