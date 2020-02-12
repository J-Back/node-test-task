const fs = require('fs');

function parsing() {
    const contacts = fs.readFile('contacts.csv', (error, data) => {
        const listContacts = data.toString().split(/\r?\n/);

        const contactsList = new Map;

        listContacts.forEach(element => {
            const contact = element.split(',');

            const object = {
                nameContact: contact[4],
                phoneNumber: []
            }

            contactsList.set(contact[1], object);
        })

        contactsList.delete('location_id');
        console.log(contactsList);
    })
}

parsing();
