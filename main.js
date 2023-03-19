//Dom elements
const inputNote = document.getElementById('note');
const saveNote = document.querySelector('.save-notes-table');
const saveBtn = document.getElementById('save-note-btn');


saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputNote.value == "" || inputNote.value == " ") {
        return alert('Please enter a valid value');
    }
    if (localStorage[inputNote.value.toLowerCase()]) {
        return alert("La nota ya existe");
    }

    //const trNote = document.createElement('tr');
    saveNote.innerHTML = `<td data-set="${inputNote.value.toLowerCase().replace(/[" "]/gi, "-")}"><input type="radio">${inputNote.value}</td><td><button data-set="${inputNote.value.toLowerCase().replace(/[" "]/gi, "-")}" class="delete"><img src="assets/images/trash.png" data-set="${inputNote.value.toLowerCase().replace(/[" "]/gi, "-")}" class="delete" alt="icon delete" width="25" /></button><button class="edit"><img src="assets/images/edit.png" alt="icon edit" width="25" /></button></td>`;

    let data = { tr: `<td data-set="${inputNote.value.toLowerCase().replace(/[" "]/gi, "-")}"><input type="radio">${inputNote.value}</td><td><button class="delete" data-set="${inputNote.value.toLowerCase().replace(/[" "]/gi, "-")}"><img src="assets/images/trash.png" data-set="${inputNote.value.toLowerCase().replace(/[" "]/gi, "-")}" class="delete" alt="icon delete" width="25" /</button><button class="edit"><img src="assets/images/edit.png" alt="icon edit" width="25" /></button></td>` };
    data = JSON.stringify(data);
    localStorage.setItem(inputNote.value.toLowerCase(), data);
    //trNote.setAttribute("data-sed", inputNote.value.toLowerCase().replace(/[" "]/gi, "-"));
    //saveNote.appendChild(trNote);
    inputNote.value = '';
    location.reload();
});

/* if (localStorage["Actualizar Apache NetBeas"]) {
    console.log("El item existe");
} else {
    console.log("El item no existe");
}
console.log(localStorage["Actualizar Apache NetBeans"]); */

function desplegarInf() {
    let data = Object.keys(localStorage).map(k => JSON.parse(localStorage.getItem(k)));
    //console.log(Object.keys(localStorage));
    //console.log(localStorage)
    //console.log("---------------------------");
    //console.log(data);
    data.forEach((e) => {
        //console.log(e.tr);
        let trNote = document.createElement('tr');
        trNote.innerHTML = e.tr;
        //console.log(trNote);
        //trNote.setAttribute("data-sed", Object.keys(localStorage).replace(/[" "]/g, "-"));
        saveNote.appendChild(trNote);
    });
}

desplegarInf();

/* let string = "Actualizar MySQL Workbench";
console.log(string);
string = string.toLowerCase().replace(/[" "]/gi, "-");
console.log(string); */

document.addEventListener("click", (e) => {
    if (e.target.matches(".delete")) {
        localStorage.removeItem(e.target.getAttribute("data-set").replace(/[=-]/gi, " "));
        location.reload();
        //console.log(e.target.getAttribute("data-set").replace(/[=-]/gi, " "));
        //return console.log(e.target.getAttribute("data-set"));
    } else {
        return //console.log("no")
    }
});