const phoneNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(phoneNumberArray) {
    if (phoneNumberArray.length !== 10) {
        return 'Error'
    } else {
        var phoneNumber = '';
        
        for (let i = 0; i < phoneNumberArray.length; i++) {
            phoneNumber += phoneNumberArray[i];
            if (i === 2) { phoneNumber += ' '; }
            if (i === 5) { phoneNumber += '-'; }
        }

        return '(' + phoneNumber.slice(0, 3) + ')' + phoneNumber.slice(3, 12)
    }
}

// const phoneNumber = createPhoneNumber(phoneNumberArray)
// console.log(phoneNumber)
// or

console.log(createPhoneNumber(phoneNumberArray))