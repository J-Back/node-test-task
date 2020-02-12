const word = 'cwAt';

function accucom(word) {
    var nWord = '';

    for (let i = 0; i < word.length; i++) {
        nWord += word[i].toUpperCase() + word[i].repeat(i).toLowerCase();

        if (i !== word.length - 1) {
            nWord += nWord + '-'
        }
    }

    return nWord;
}

console.log(accucom(word));