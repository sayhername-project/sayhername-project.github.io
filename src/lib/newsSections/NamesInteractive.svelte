<script>
    import { onMount } from 'svelte';
  
  let namesData = [];
  let selectedName = null;
  let maxMentions = 0;
  let hoveredPoint = null;

  onMount(async () => {
    // Fetch the JSON data
    const response = await fetch('news-charts/interactive_names_data.json');
    namesData = await response.json();
    
    // Find max mentions for opacity calculation
    maxMentions = Math.max(...namesData.map(n => n.total_mentions));
  });

  function getOpacity(mentions) {
    // All names at 0.7 opacity, hover makes them fully opaque
    return 0.7;
  }

  function selectName(name) {
    selectedName = selectedName?.name === name.name ? null : name;
    if (selectedName) {
      document.body.style.overflow = 'hidden';
    }
  }

  function closeTimeline() {
    selectedName = null;
    document.body.style.overflow = '';
  }
</script>

<br /><br />

<h1 class="text-xl font-bold text-white">Explore the coverage of Black women killed by police</h1>

<div class="names-container">
  <div class="names-grid">
    {#each namesData as name}
      <button
        class="name-button"
        style="opacity: 0.7"
        on:click={() => selectName(name)}
        on:mouseenter={(e) => e.currentTarget.style.opacity = '1'}
        on:mouseleave={(e) => e.currentTarget.style.opacity = '0.7'}
      >
        <span class="name-text">{name.name}</span>
        <span class="mention-count">{name.total_mentions}</span>
      </button>
    {/each}
  </div>

  {#if selectedName}
    <div 
      class="timeline-overlay" 
      on:click={closeTimeline}
      on:keydown={(e) => e.key === 'Escape' && closeTimeline()}
      role="button"
      tabindex="0"
    >
      <!-- svelte-ignore a11y_interactive_supports_focus -->
      <div 
        class="timeline-modal" 
        on:click|stopPropagation
        on:keydown|stopPropagation
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button class="close-button" on:click={closeTimeline}>×</button>
        
        <h3 id="modal-title">{selectedName.name}</h3>
        <p class="total-mentions">{selectedName.total_mentions} total mentions</p>

        <div class="timeline-section">
          <h4>Coverage Timeline</h4>
          <svg class="timeline-chart" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid meet">
            <!-- Y-axis labels -->
            {#if selectedName.timeline.length > 0}
              {@const maxCount = Math.max(...selectedName.timeline.map(d => d.count))}
              {@const sortedTimeline = [...selectedName.timeline].sort((a, b) => new Date(a.publish_date) - new Date(b.publish_date))}
              {@const minDate = new Date(sortedTimeline[0].publish_date)}
              {@const maxDate = new Date(sortedTimeline[sortedTimeline.length - 1].publish_date)}
              {@const dateRange = maxDate.getTime() - minDate.getTime() || 1}
              
              <!-- Grid lines -->
              {#each [0, 0.25, 0.5, 0.75, 1] as tick}
                <line 
                  x1="50" 
                  y1={20 + (160 * (1 - tick))} 
                  x2="580" 
                  y2={20 + (160 * (1 - tick))} 
                  stroke="rgba(255,255,255,0.1)" 
                  stroke-width="1"
                />
                <text 
                  x="45" 
                  y={20 + (160 * (1 - tick)) + 4} 
                  text-anchor="end" 
                  fill="#999" 
                  font-size="10"
                >
                  {Math.round(maxCount * tick)}
                </text>
              {/each}
              
              <!-- Line path -->
              <path
                d={sortedTimeline.map((day, i) => {
                  const dayDate = new Date(day.publish_date);
                  const x = 50 + ((dayDate.getTime() - minDate.getTime()) / dateRange) * 530;
                  const y = 180 - ((day.count / maxCount) * 160);
                  return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                }).join(' ')}
                fill="none"
                stroke="url(#lineGradient)"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              
              <!-- Gradient definition -->
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#726e97;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#7a9376;stop-opacity:1" />
                </linearGradient>
              </defs>
              
              <!-- Data points -->
              {#each sortedTimeline as day, idx}
                {@const dayDate = new Date(day.publish_date)}
                {@const x = 50 + ((dayDate.getTime() - minDate.getTime()) / dateRange) * 530}
                {@const y = 180 - ((day.count / maxCount) * 160)}
                <circle
                  cx={x}
                  cy={y}
                  r="5"
                  fill="#d98c8c"
                  stroke="white"
                  stroke-width="2"
                  class="data-point"
                  on:mouseenter={() => hoveredPoint = { date: dayDate, count: day.count, x, y }}
                  on:mouseleave={() => hoveredPoint = null}
                  role="img"
                  aria-label="{dayDate.toLocaleDateString()} - {day.count} articles"
                >
                </circle>
              {/each}
              
              <!-- Hover tooltip -->
              {#if hoveredPoint}
                {@const tooltipX = hoveredPoint.x}
                {@const tooltipY = hoveredPoint.y - 20}
                {@const tooltipText = `${hoveredPoint.count} article${hoveredPoint.count !== 1 ? 's' : ''}`}
                {@const tooltipDate = hoveredPoint.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                
                <!-- Tooltip background -->
                <rect
                  x={tooltipX - 40}
                  y={tooltipY - 28}
                  width="80"
                  height="32"
                  rx="4"
                  fill="#1a1a1a"
                  stroke="#7a9376"
                  stroke-width="1.5"
                />
                
                <!-- Tooltip text -->
                <text
                  x={tooltipX}
                  y={tooltipY - 15}
                  text-anchor="middle"
                  fill="white"
                  font-size="11"
                  font-weight="600"
                >
                  {tooltipText}
                </text>
                <text
                  x={tooltipX}
                  y={tooltipY - 4}
                  text-anchor="middle"
                  fill="#999"
                  font-size="9"
                >
                  {tooltipDate}
                </text>
              {/if}
              
              <!-- X-axis date labels -->
              {#each [0, 0.5, 1] as tick}
                {@const date = new Date(minDate.getTime() + (dateRange * tick))}
                {@const x = 50 + (530 * tick)}
                <text 
                  x={x} 
                  y="195" 
                  text-anchor="middle" 
                  fill="#999" 
                  font-size="10"
                >
                  {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </text>
              {/each}
            {/if}
          </svg>
        </div>

        {#if selectedName.sample_headlines.length > 0}
          <div class="headlines-section">
            <h4>Sample Headlines</h4>
            <ul>
              {#each selectedName.sample_headlines as article}
                <li>
                  <div class="headline-text">{article.title}</div>
                  <div class="headline-meta">
                    <span class="publisher">{article.media_url}</span>
                    <span class="date">{new Date(article.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
  .names-container {
    width: 100%;
    padding: 2rem;
  }

  .names-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
  }

  .name-button {
    background: rgba(232, 217, 195, 0.1);
border: 2px solid rgba(232, 217, 195, 0.5);
    border-radius: 12px;
    padding: 1rem 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .name-button:hover {
    transform: translateY(-4px);
    border-color: #e8d9c3;
    background: rgba(232, 217, 195, 0.2);
    box-shadow: 0 8px 24px rgba(232, 217, 195, 0.4);
  }

  .name-text {
    color: white;
    font-size: clamp(0.8rem, 2vw, 1rem);
    font-weight: 600;
    text-align: center;
    line-height: 1.3;
    min-height: 2.6em;
    display: flex;
    align-items: center;
    text-align: center;
    }


  .mention-count {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.85rem;
    font-weight: 400;
  }

  /* Timeline Modal */
  .timeline-overlay {
    position: fixed;
    top: 50%;
    left: 1%;
    right: 55%;
    bottom: 50%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
  }

  .timeline-modal {
    background: #1a1a1a;
    border-radius: 16px;
    padding: 2rem;
    max-width: 800px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    color: white;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    animation: slideUp 0.3s ease;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background 0.2s;
  }

  .close-button:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .timeline-modal h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #d98c8c;
  }

  .total-mentions {
    color: #7a9376;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .timeline-section {
    margin-bottom: 2rem;
  }

  .timeline-section h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #e8d9c3;
  }

  .timeline-chart {
    width: 100%;
    height: auto;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 1rem;
  }

  .data-point {
    cursor: pointer;
    transition: r 0.2s;
  }

  .data-point:hover {
    r: 7;
  }

  .headlines-section {
    margin-top: 2rem;
  }

  .headlines-section h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #e8d9c3;
  }

  .headlines-section ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .headlines-section li {
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: 6px;
    border-left: 3px solid #7a9376;
  }

  .headline-text {
    font-size: 0.95rem;
    line-height: 1.5;
    color: #e8e8e8;
    margin-bottom: 0.5rem;
  }

  .headline-meta {
    display: flex;
    gap: 1rem;
    font-size: 0.8rem;
    color: #999;
  }

  .publisher {
    font-weight: 600;
    color: #7a9376;
  }

  .date {
    color: #999;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>