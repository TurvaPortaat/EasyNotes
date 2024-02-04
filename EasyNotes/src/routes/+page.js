// @ts-nocheck
export async function load({fetch}) {
    const API_KEY = 'hyssalaisuus';
    const res = await fetch('https//luentomuistiinpano-api.netlify.app/.netlify/functions/courses')
    const data = await res.json();
    return {courses: data};
}

// @ts-nocheck
export async function load({fetch}) {
    const API_KEY = 'hyshyssalaisuus';
    const res = await fetch('https//luentomuistiinpano-api.netlify.app/.netlify/functions/notes')
    const data = await res.json();
    return {notes: data};
}