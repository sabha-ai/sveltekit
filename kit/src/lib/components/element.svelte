<script>
    export let selected = false;
</script>

<div 
    class="p-5 border border-spacing-10 border-b-black snap-start" 
    class:bg-blue-100={selected}
    class:bg-opacity-70={selected}
>
    <slot/>
</div>