<script>
    import AddNotes from "../AddNotes.svelte";
    
</script>
<main class=" w-4/6 p-6 bg-gradient-to-br from-green-400 to-blue-400">
    
    <h1 class="font-bold text-5xl p-5">Easy Notes</h1>

        <div class="p-1">
            <button class="hover:underline border-2 border-green-300">
                <a href="/addNotes" class="p-2">Create notes for class</a>
            </button>
        </div>
        <div class="p-1">
            <button class="hover:underline border-2 border-green-300">
                <a href="/list" class="p-2">List notes</a>
            </button>
        </div>
        <div class="p-1">
            <button class="hover:underline border-2 border-green-300">
                <a href="/addCourses" class="p-2">Add courses</a>
            </button>
        </div>
</main>