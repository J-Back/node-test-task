// const str = 'aabBcdeaBbCa';

// function findDuplicates(str) {
//     var tempStr = str.toLowerCase()
//     var duplicates = ''
//     var tempChar = str[0]

//     for (let i = 0; i < tempStr.length; i++) {
//         var tempChar = tempStr[i];

//         for (let j = i + 1; j < tempStr.length; j++) {
            
//             if (tempChar === tempStr[j]) {
//                 counter = tempStr.split(tempChar).length - 1;

//                 if (duplicates.includes(tempChar)) {
//                     break
//                 } else {
//                     duplicates += tempChar + counter
//                 }
//             }
//         }
//     }

//     return duplicates
// }

// console.log(findDuplicates(str))

// or

const str = 'aabBcdeaBbCa';

function findDuplicates(str) {
    var tempStr = str.toLowerCase();
    var duplicates = '';

    for (let i = 0; i < tempStr.length; i++) {
        var counter = 0;
        tempChar = tempStr[i];

        if (duplicates.includes(tempChar)) {
            continue;
        } else {
            if (tempStr.split(tempChar).length - 1 !== 1) {
                counter = tempStr.split(tempChar).length - 1;
                duplicates += tempChar + ' = ' + counter + ', ';
            }
        }
    }

    return duplicates;
}

console.log(findDuplicates(str))