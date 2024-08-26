<script>
    import Element from "$lib/components/element.svelte";
</script>


<div class="h-screen w-full flex overflow-x-auto">
    {#each Array(20).fill(1) as i} 
    <div class="h-full min-w-[300px] flex-shrink-0 flex flex-col overflow-y-auto border-8">
        {#each Array(100).fill(1) as i} 
        <Element>
            hello
        </Element>
        {/each}
    </div>
    {/each}
</div>
