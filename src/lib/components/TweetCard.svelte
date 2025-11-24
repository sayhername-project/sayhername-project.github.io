<script>
  let { text = "", timestamp = "" } = $props();
</script>

<div class="tweet-card">
    <img src="../twit-charts/twit-logo.png" alt="Twitter logo" class="tweet-photo" />
    
    <p class="tweet-text">
        <strong>
            {text}
        </strong>
    </p>

    <div class="tweet-timestamp">
        {timestamp}
    </div>
</div>

<style>
    .tweet-card {
        background: #ffffff10;               /* translucent card */
        backdrop-filter: blur(6px);
        padding: 1.2rem 1.4rem;
        border-radius: 16px;
        border: 1px solid #ffffff20;
        color: #fff;
        width: 100%;
        min-height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        padding-bottom: 2.2rem;
    }   

    .tweet-photo {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        width: 40px;    
        height: 35px;
        border-radius: 6px;     
    }

    .tweet-text {
        font-size: 1rem;
        line-height: 1.5;
        opacity: 0.95;
    }

    .tweet-timestamp {
        position: absolute;
        bottom: 0.8rem;
        left: 1.4rem;
        font-size: 0.8rem;
        opacity: 0.7;
        color: #d1d5db; /* light gray */
    }
</style>