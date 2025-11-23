<script>
  let { children } = $props();
</script>

<div class="fullwidth-wrapper">
  <div class="fullwidth-box">
    {@render children()}
  </div>
</div>

<style>
  .fullwidth-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }

  .fullwidth-box {
    background: linear-gradient(135deg, #726e97 0%, #7a9376 100%);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    max-width: 600px;
    text-align: center;
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: white;
    line-height: 1.4;
    font-weight: 600;
  }
</style>