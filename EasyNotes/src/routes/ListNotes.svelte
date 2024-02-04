<script>
    import {notes} from '$lib/NoteStore.js';
    import Note from './Note.svelte';
    
    async function getNotes(){
        const res = await fetch('https//luentomuistiinpano-api.netlify.app/.netlify/functions/courses')
        const data = await res.json();
        courses: data;
    
        if(res.ok) {
            return data;
        } else {
            throw new Error('No data found!');
        }
    }

    getNotes
</script>

<p><strong>Amount of all notes: ({$notes.length})</strong></p>

{#each $notes as note}
    <Note {...note} />
{/each}