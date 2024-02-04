<script>
    import AddNotes from "../AddNotes.svelte";
</script>

<main class="w-4/6 inline-block bg-gradient-to-br from-green-400 to-blue-400">
    <h1 class="font-bold text-5xl p-5">EasyNotes</h1>

    <div id="container1">
        <h2>Here you can add new notes for any course of your chose!</h2>
        <h2>From below you can first select your course.</h2>
        <h2>And we will take care of the rest, just remember to</h2> 
    </div>
    <div class="flex" id="container2">    
        <h2 class="font-bold mr-1">save</h2> <h2>your work! :)</h2>
    </div>
        <div>
        <select class="rounded-lg m-2" name="Course">
            <option>Javascript</option>
            <option>Versionhallinta</option>
            <option>Ohjelmointi</option>
        </select>
    </div>

    <AddNotes/>

    <div class="flex">
        <p class=" p-2 border">Tänne saattaa tulla kurkkausikkuna viimeisimpään</p>
        <p class=" p-2 border">Tai mainoksia :D</p>
    </div>
    <br>
</main>