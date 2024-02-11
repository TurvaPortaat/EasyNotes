import { onMount } from 'svelte';
import { writable } from 'svelte/store';

function createNotes() {

    //calling writable function and passing it with empty array 
    //the beginning of data.
    //returns an object with sub, set and update functions
    // rename if you will, on your own cost.
    //@ts-ignore
    const{subscribe, set, update} = writable([]); 
 
    return {
        subscribe,
        //@ts-ignore
        add: (note) => update((notes) => [...notes, note]),
        reset: () => set([])

    };

}
createNotes();

export const Notes = createNotes();  //named export

//@ts-ignore
let courseData = [
    {courseID: 4, courseName: 'Data-analytiikka'}
]

//@ts-ignore
let noteData = [
    {noteID: 4, noteContent: 'Data-analytiikassa on paljon matikkaa.', timestamp: {Date} }
]


const getCourseData = async() => 
    {
        const res1 = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses')
        const courseData = await res1.json();
        console.log(courseData)
        return courseData 
        
        //pikane tarkistus palikka
        if(res1.ok) {
            return courseData;
        } else {
            throw new Error('No data found!');
        }
    }

getCourseData();


const getNoteData = async () =>
{
    const res2 = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes');
    const noteData = await res2.json();
    console.log(noteData)

    //toine pikane tarkistus palikka
    if(res2.ok) {
        return noteData;
    } else {
        throw new Error('No data found!');
    }
    
}

getNoteData();



