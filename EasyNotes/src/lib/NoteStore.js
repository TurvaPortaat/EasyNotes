import {writable } from 'svelte/store';

function createNotes() {

    //calling writable function and passing it with empty array 
    //-the beginning of data.
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

export const notes = createNotes();  //named export