<script>
    import {Notes} from "$lib/NoteStore.js"
    export {Notes} //to "$lib/NoteStore.js"?;

    let noteID= 0;
    let noteContent ="";
    let courseID ="";
    let courseName ="";
    let timestamp = 0;


    function saveNote() {
        let note = {noteID,noteContent,courseID,courseName,timestamp};

        notes = [...notes, note];
        
    }
</script>


<div class=" m-1" id="container1">
    <input class="rounded m-1" type="number" placeholder="NoteID" bind:value={noteID} min="0" max="99"/>
    <input class="rounded m-1" placeholder="Notes Headline" bind:value={courseName}/>
    <input class="rounded m-1 w-24" type="number" placeholder="Course ID" min="0" max="20"/>
    <div class="grid justify-items-center justify-content-space-evenly" id="container1.2">
        <textarea class=" text-left mt-4  w-80 h-80 rounded" placeholder="  Write your notes here" bind:value={noteContent} />    
    </div>
    <br>
    <div id="container1.3">
        <button class="hover:underline shadow-lg rounded font-semibold border p-1.5 mr-6 ml-6 mt-0" on:click={saveNote}>Save</button>   
        <button class="hover:underline shadow-lg rounded font-semibold border p-1.5">Back</button> 
    </div>
</div>
<br/>

