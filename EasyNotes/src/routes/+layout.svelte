<script>
    import '../app.css'
</script>

<main class="grid justify-evenly p-2 w-4/6 bg-gradient-to-br from-green-400 to-blue-400">
    <header class="flex space-x-6">
        <nav class="flex items-center hover:underline border w-min p-1.5 font-semibold">
            <a class="p-1" href= "./">Home</a>
        </nav>
        <nav class="flex items-center text-center hover:underline border w-min p-1.5 font-semibold">
            <a class="p-1" href= "/addNotes">Add Notes</a>
        </nav>
        <nav class="flex items-center text-center hover:underline border w-min p-1.5 font-semibold">
            <a class="p-1" href= "/addCourses">Add Courses</a>
        </nav>
        <br>
    </header>
</main>

<slot />


<footer class="border-2 grid justifycontent-center w-4/6 bg-gradient-to-br from-green-400 to-blue-400"> 
    <br>
    <h3 class="underline font-semibold">Yhteystiedot:</h3>
   <p> y-tunnus: 9-3841283 </p>
   <p> puh: + 358 40 123 456 78</p>
   <p> email: easynote@example.com</p>
    <br>
<!--    <enhanced:img src="./images/FakeAd.jpg" alt="A Fake Add" /> -->
</footer>