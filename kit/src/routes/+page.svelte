<script lang="ts">
    import Element from "$lib/components/element.svelte";
</script>

<div class="h-screen w-full flex overflow-x-auto snap-x snap-mandatory">
    {#each Array(20).fill(1) as _}
        <div class="h-full min-w-[300px] flex-shrink-0 flex flex-col overflow-y-auto border-8 snap-start">
        {#each Array(100).fill(1) as _, rowIndex}
            <Element selected={false}>
            Row {rowIndex + 1}
            </Element>
        {/each}
        </div>
    {/each}
</div>
