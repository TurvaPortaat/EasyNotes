<script>
    //import {noteData} from '$lib/NoteStore.js'
    //import {courseData} from '$lib/NoteStore.js'
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from 'flowbite-svelte';
    import AddNotes from './AddNotes.svelte';
    import {Notes} from '$lib/NoteStore.js';
	  import { json } from '@sveltejs/kit';
  

</script>

<select>
    <!--<option value={courseName}></option>-->
</select>

<p><strong>Amount of all notes: ({$Notes.length})</strong></p>
<Table striped={true} hoverable={true}>
    <TableHead>
      <TableHeadCell>NoteID</TableHeadCell>
      <TableHeadCell>NoteText</TableHeadCell>
      <TableHeadCell>courseID</TableHeadCell>
      <TableHeadCell>courseName</TableHeadCell>
    </TableHead>
    <TableBody>
      <TableBodyRow>
        <TableBodyCell>5</TableBodyCell>
        <TableBodyCell>Olen esimerkki teksti</TableBodyCell>
        <TableBodyCell>2</TableBodyCell>
        <TableBodyCell>ruotsi</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
<!--
        <TableBodyCell>{noteID}</TableBodyCell>
        <TableBodyCell>{noteContent}</TableBodyCell>
        <TableBodyCell>{courseID}</TableBodyCell>
        <TableBodyCell>{courseName}</TableBodyCell>
-->
      </TableBodyRow>
      <TableBodyRow>
<!--
        <TableBodyCell>{noteID}</TableBodyCell>
        <TableBodyCell>{noteContent}</TableBodyCell>
        <TableBodyCell>{courseID}</TableBodyCell>
        <TableBodyCell>{courseName}</TableBodyCell>
-->

      </TableBodyRow>
    </TableBody>
  </Table>