function deleteNote(noteId){
    
    fetch('/note',{
        method:'DELETE',
        body:JSON.stringify({noteId:noteId})
    } ).then((_res) =>{
        window.location.href="/";
    });
}