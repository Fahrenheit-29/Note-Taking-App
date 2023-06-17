// Select the modal

let modal = document.querySelector(".modalView");
let closeBtn = document.querySelector(".close");


// Select inputField value


let noteTitle = document.getElementById('noteTitle');
let notesInput = document.getElementById('note');



// Select the note-taking content to appendchild

let noteLayout = document.querySelector(".noteLayout");


// Select addBtn

let addNotesBtn = document.getElementById('addBtn');
let col;


// use LocalStorage

const saveNoteData = () => {

    localStorage.setItem("noteData", noteLayout.innerHTML);


}
const getNoteData = () => {


    noteLayout.innerHTML = localStorage.getItem("noteData");

}

// Use click event listener

addNotesBtn.addEventListener('click', (e) => {


    if (checkInputField(noteTitle) || checkInputField(notesInput)) {

        alert("Input all fields");

    } else {




        let title = noteTitle.value;
        let noteData = notesInput.value;



        // create a col div
        col = document.createElement('div');
        col.classList.add('col-notes', 'my-3');

        noteLayout.appendChild(col);
        col.innerHTML = `

    <h4 class="titleNote">${title}</h4>

    <p class="notes">${trimContent(noteData)}</p>


    <div class="Btn-data my-3 text-center">
        <button class="btn btn-sm btn-dark viewDetail">View Detail</button>
        <button class="btn btn-sm btn-danger deleteBtn">Delete</button>
    </div>

        `;

        // target View Detail button
        col.addEventListener('click', (e) => {

            if (e.target.classList.contains("viewDetail")) {

                showModal(noteData);
            }

        });
        saveNoteData();


        // clear input & textArea value
        noteTitle.value = "";
        notesInput.value = "";
    }


});

//localstorage to get Data

getNoteData();

// delete Note Data
noteLayout.addEventListener("click", function(e) {


    if (e.target.innerText === "Delete") {

        e.target.parentElement.parentElement.remove();
        saveNoteData();


    }
});



// closeBtn modal function
closeBtn.addEventListener("click", () => {

    modal.style.display = "none";


});


document.addEventListener("click", (e) => {

    if (!e.target.classList.contains("viewDetail")) {

        modal.style.display = "none";
    }

});



// all functions


const checkInputField = (noteData) => {


    return noteData.value === '' || noteData.value.trim().length === 0;


}


// trim Data function
const trimContent = (data) => {


    let trimData = data.slice(0, 20);
    return trimData += "...";

}

// showModal function
const showModal = (noteValue) => {
    let noteContent = document.querySelector(".noteContent");
    modal.style.display = "block";

    // Note Content Inside Modal
    noteContent.innerText = `${noteValue}`;


}