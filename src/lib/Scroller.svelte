<div class="scroller">
  <div class="sticky">
    <slot name="sticky" />
  </div>

  <div class="scrolly">
    <slot name="scrolly" />
  </div>
</div>

<style>
    .scroller {
        display: flex;
        height: 100vh;
        overflow: hidden;
    }

    .sticky {
        flex: 1;
        position: sticky;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #111;
        color: white;
        padding: 2rem;
    }

    .scrolly {
        flex: 1;
        height: 100vh;
        overflow-y: scroll;
        background: #fafafa;
        padding: 4rem 2rem;
        color: black;
    }
</style>