var addToDoButton = document.getElementById('addToDo');
var toDocontainer  = document.getElementById('toDoContainer');
var inputFile  = document.getElementById('inputFile');

addToDoButton.onclick = function (){
    // vérifier si l'input n'est pas vide
    if(inputFile.value != ""){
        // si l'input n'est pas vide , créer un paragraphe
        var paragraph = document.createElement('p')
    }
    // valorisé ce paragraphe avec le contenu de l'input
    paragraph.innerText = inputFile.value;

    // stylisé le paragraphe
    paragraph.classList.add('paragraph_style');

    // insérer le paragraphe dans l'élement toDoContainer
    toDocontainer.appendChild(paragraph); 

    // vidé l'input quand le paragraphe est ajouté
    inputFile.value = "";
}

