<!-- <script>
    export let selected = true;
</script>

<div class="p-5 border border-spacing-10 border-b-black" class:bg-light-blue-200={selected}>
    <slot/>
</div> -->

<script>
    export let selected = false;
</script>

<div 
    class="p-5 border border-spacing-10 border-b-black" 
    class:bg-blue-100={selected}
    class:bg-opacity-70={selected}
>
    <slot/>
</div>