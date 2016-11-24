var wordBoard = document.getElementById("wordBoardTr");
var wordInput = document.getElementById("setWord");


function display(initialElement, whatToDisplay) {
    initialElement.innerHTML = "<p>" + whatToDisplay + "</p>" + initialElement.innerHTML;
}

function displayInTab(elementId, whatToDisplay) {
    document.getElementById(elementId).innerHTML = whatToDisplay;
}

function invertWord(word) {
    var wordInverted = "";
    for (var i = word.length - 1; i >= 0; i--) {
        wordInverted += word[i];
    }
    return wordInverted;
}

function numberOfVoyelles(word) {
    word = word.toLowerCase();
    var nbVoyelles = 0;
    var voyelles = ['a', 'e', 'i', 'o', 'u', 'y', 'é', 'è', 'à', 'ë', 'ê', 'ä', 'â', 'ü', 'û', 'ù', 'ô', 'ö', 'î', 'ï'];
    for (var v = 0; v < voyelles.length; v++) {
        for (var w = 0; w < word.length; w++) {
            if (word[w] == voyelles[v]) {
                nbVoyelles++;
            }
        }
    }
    return nbVoyelles;
}

function start() {
    var story = document.getElementById("story");
    var word = wordInput.value;
    displayInTab("gras", word);
    displayInTab("maj", word.toUpperCase());
    displayInTab("min", word.toLowerCase());
    var nbConsonnes = word.length - numberOfVoyelles(word);
    displayInTab("nbVoy", numberOfVoyelles(word));
    displayInTab("nbCons", nbConsonnes);
    displayInTab("inverse", invertWord(word));
    if (invertWord(word).toLowerCase() == word.toLowerCase()) {
        displayInTab("palin", "Oui!");

    } else {
        displayInTab("palin", "Non!");
    }
    display(story, word);
    wordInput.value = "";
}
