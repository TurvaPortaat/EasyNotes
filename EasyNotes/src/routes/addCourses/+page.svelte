<script>
    //import AddNotes from "../AddNotes.svelte";
    
</script>

<main class="bg-gradient-to-br from-green-400 to-blue-400 w-4/6">

    <h1 class="font-bold text-5xl p-5">Easy Notes</h1>

    <div class="p-2" id="container0">
        <h3>Here you can add new courses to your existing courses</h3>
        <h3>Just fill out the asked information and remember to click</h3>
        <h3 class="font-bold">save</h3>
        <h3>:)</h3>
    </div>

    <div class="m-2" id="container1">
        <input class="m-2 border-2" type="number" min="1" max="99" placeholder="Course ID" >
        <input class="m-2 border-2" type="text" placeholder="Course Name">
        <div class="p-3" id="container2">
            <br>
            <button class="hover:underline border-2 p-1.5 mr-2">Save</button>
            <button class="hover:underline border-2 p-1.5">Back</button>
        </div>
    </div>
</main>

