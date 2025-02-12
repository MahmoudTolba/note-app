const notesContainer = document.querySelector('.note-container'); 
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes'); 
}
showNotes();
function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
    let inputbox = document.createElement('p');
    let img = document.createElement('img');
    inputbox.className = 'input-box';
    inputbox.setAttribute('contenteditable','true');
    img.src = 'images/delete.png';
    notesContainer.appendChild(inputbox).appendChild(img); 
});

// notesContainer.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         let inputbox = document.createElement('p');
//         let img = document.createElement('img');
//         inputbox.className = 'input-box';
//         inputbox.setAttribute('contenteditable','true');
//         img.src = 'images/delete.png';
//         notesContainer.appendChild(inputbox).appendChild(img);}
//     });

notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentNode.remove();
        updateStorage();
    }
    else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(note => {
            note.onkeyup =function() {
                updateStorage();
            }
            
        });

    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        document.execCommand('insertlinebreak');
        e.preventDefault();
    }
});
