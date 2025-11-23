<script>
  let { number, label } = $props();
</script>

<div class="big-stat-wrapper">
  <div class="big-stat-box">
    <div class="stat-number">{number}</div>
    <div class="stat-label">{label}</div>
  </div>
</div>

<style>
  .big-stat-wrapper {
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    margin: 3rem 0;
  }

  .big-stat-box {
    background: linear-gradient(135deg, #726e97 0%, #7a9376 100%);
    border-radius: 16px;
    padding: 3rem 2rem;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    /* max-width: 400px; */
    width: 100%;
    min-height: 20vh;
  }

  .stat-number {
    font-size: clamp(3rem, 8vw, 5rem);
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
    line-height: 1;
  }

  .stat-label {
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    color: rgba(255, 255, 255, 0.9);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 500;
  }
</style>