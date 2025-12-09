<script>
  let showModal = $state(false);

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  let { title, content } = $props();
</script>

<!-- Preview Box -->
<div class="table-preview">
  <p style="color: white; font-size: 15">{title}</p>

  <button class="full-btn" onclick={openModal}>
    Full size table →
  </button>
</div>

<!-- Modal Overlay -->
{#if showModal}
  <div
    class="modal-overlay"
    role="button"
    tabindex="0"
    onclick={closeModal}
    onkeydown={(e) => e.key === 'Enter' && closeModal()}
  >
    <div class="modal-content" onclick={(event) => event.stopPropagation()}>
      <h2 class="modal-title">{title}</h2>
      
      {@render content()}

      <button class="close-btn" onclick={closeModal}>
        Close
      </button>
    </div>
  </div>
{/if}

<style>
  /* Preview container */
  .table-preview {
    border: 4px solid transparent;
    background: rgba(0, 0, 0, 0.6); /* black with opaqueness */
    padding: 2rem;
    border-radius: 10px;

    /* Blue → Purple outline */
    background-image:
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      linear-gradient(45deg, #4e6bff, #a855f7);
    background-origin: border-box;
    background-clip: padding-box, border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 1rem;
  }

  .full-btn {
    background: #e8f1ff;
    border: 2px solid #b7c6ff;
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #1f4fcc;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
  }

  .full-btn:hover {
    background: #dce7ff;
    transform: scale(1.03);
  }

  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    cursor: pointer;
  }

  .modal-content {
    background: #0d0d0d;
    padding: 2rem;
    border-radius: 10px;
    width: 80%;
    max-width: 900px;
    max-height: 90vh;
    overflow-y: auto;
    cursor: default;
    border: 2px solid #3b82f6; /* optional subtle outline */
  }

  .modal-title {
    color: white;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .close-btn {
    margin-top: 1.5rem;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    background: #333;
    color: white;
    cursor: pointer;
    border: none;
    font-size: 1rem;
    transition: background 0.2s;
  }

  .close-btn:hover {
    background: #555;
  }
</style>