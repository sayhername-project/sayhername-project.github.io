<section class="py-30 px-6 bg-linear-to-b from-black to-blue-950">
    <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl mb-8 text-center">
            Analyzing Twitter Conversations
        </h2>
        <div class="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
                Here, we present the major findings from this analysis:
            </p>

            <div class="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
                {#each [
                    { num: 1, color: 'bg-purple-800', title: 'The Rise of #SayHerName', desc: "How the hashtag first gained traction during AAPF’s 2015 webinar series Her Dream Deferred..." },
                    { num: 2, color: 'bg-pink-800', title: 'The Evolution of #SayHerName', desc: "Tracing how the movement grew into sustained digital resistance..." },
                    { num: 3, color: 'bg-purple-800', title: 'The Users Behind #SayHerName', desc: "Exploring the emotional and motivational dimensions of participation..." }
                ] as item}
                <div class="flex gap-6 items-start">
                    <div class={`shrink-0 w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-2xl`}>
                        {item.num}
                    </div>
                    <div>
                        <h3 class="text-2xl mb-2 text-white">{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                </div>
                {/each}
            </div>

            <p>
                Together, these insights offer a data-driven portrait of digital activism as interconnected stories, 
                emotions, and calls for justice shaping the online visibility of Black women in 2015.
            </p>
        </div>
    </div>
</section>