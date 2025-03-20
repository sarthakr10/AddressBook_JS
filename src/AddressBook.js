class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    // Override toString() for readable output
    toString() {
        return `👤 ${this.firstName} ${this.lastName}, 📍 ${this.address}, ${this.city}, ${this.state} - ${this.zip}, 📞 ${this.phone}, 📧 ${this.email}`;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        const isDuplicate = this.contacts.some(
            c => c.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
                 c.lastName.toLowerCase() === contact.lastName.toLowerCase()
        );

        if (isDuplicate) {
            console.log(`❌ Duplicate entry: Contact with name ${contact.firstName} ${contact.lastName} already exists!`);
            return;
        }

        this.contacts.push(contact);
        console.log("✅ Contact added successfully!");
    }

    sortByName() {
        this.contacts.sort((a, b) => {
            let nameA = a.firstName.toLowerCase();
            let nameB = b.firstName.toLowerCase();
            return nameA.localeCompare(nameB);
        });

        console.log("\n📌 Sorted Address Book (by Name):");
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

// ✅ Example Usage
try {
    let addressBook = new AddressBook();

    let contact1 = new AddressBookContact("Sarthak", "Rastogi", "123 Street", "Meerut", "Uttar Pradesh", "250002", "9876543210", "sarthak@example.com");
    let contact2 = new AddressBookContact("John", "Doe", "456 Avenue", "Delhi", "Delhi", "110001", "9988776655", "john.doe@example.com");
    let contact3 = new AddressBookContact("Jane", "Smith", "789 Road", "Meerut", "Uttar Pradesh", "250003", "9123456789", "jane.smith@example.com");
    let contact4 = new AddressBookContact("Alice", "Johnson", "101 Block", "Noida", "Uttar Pradesh", "201301", "9876512345", "alice.johnson@example.com");

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);
    addressBook.addContact(contact3);
    addressBook.addContact(contact4);

    // ✅ Sort by Name
    addressBook.sortByName();

} catch (error) {
    console.error("❌ Error:", error.message);
}
