<<<<<<< Updated upstream
Täällä ei oo mitään sitte juho vielä :D
=======
Welcome to EasyNotes!

A few things in the beginning that should be mentioned.
This project is still WIP.

You will need NodeJS version 16.14 to run this.
!!! Make sure you are at the correct file when running npm run dev!!!
The correct file /EasyNotes/EasyNotes

To use imported data I recommend usin Netlify adapter
\bash
npm i -D @sveltejs/adapter-netlify

and add the adapter to your svelte.config.js:
svelte.config.js
import adapter from '@sveltejs/adapter-netlify';

export default {
    kit: {
        //default options are shown
        adapter: adapter({
            //if true, will create a Netlify Edge Function rather
            //than using starndard Node-based functions
            edge: false,
            
            //if true, will split your app into multiple functions
            //instead of creating a single one for the entire app.
            //if 'edge' is true, this option cannot be used
            split: false
        })
    }
};

I also decided to use Flowbite for svelte. 
\bash
pnpm i -D flowbite-svelte flowbite
update also your tailwind.congif.cjs file
like in https://flowbite-svelte.com/docs/pages/introduction


Description what the app does:
From Home-page you are able to navigate to 
adding new courses or adding new notes.


If you have more complicated problems, please
contact our support at support@example.com.

This project was build with svelte kit js
After this you will have everything you need to know how to 
build a Svelte project. 

>>>>>>> Stashed changes

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
