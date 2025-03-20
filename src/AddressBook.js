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

    countByCity() {
        const cityCount = this.contacts.reduce((acc, contact) => {
            acc[contact.city] = (acc[contact.city] || 0) + 1;
            return acc;
        }, {});

        console.log("\n📌 Count of Contacts by City:");
        Object.entries(cityCount).forEach(([city, count]) => {
            console.log(`🏙️ ${city}: ${count} contact(s)`);
        });
    }

    countByState() {
        const stateCount = this.contacts.reduce((acc, contact) => {
            acc[contact.state] = (acc[contact.state] || 0) + 1;
            return acc;
        }, {});

        console.log("\n📌 Count of Contacts by State:");
        Object.entries(stateCount).forEach(([state, count]) => {
            console.log(`🌍 ${state}: ${count} contact(s)`);
        });
    }
}

// ✅ Example Usage
try {
    let addressBook = new AddressBook();

    let contact1 = new AddressBookContact(
        "Sarthak", "Rastogi", "123 Street", "Meerut", "Uttar Pradesh",
        "250002", "9876543210", "sarthak@example.com"
    );

    let contact2 = new AddressBookContact(
        "John", "Doe", "456 Avenue", "Delhi", "Delhi",
        "110001", "9988776655", "john.doe@example.com"
    );

    let contact3 = new AddressBookContact(
        "Jane", "Smith", "789 Road", "Meerut", "Uttar Pradesh",
        "250003", "9123456789", "jane.smith@example.com"
    );

    let contact4 = new AddressBookContact(
        "Alice", "Johnson", "101 Block", "Noida", "Uttar Pradesh",
        "201301", "9876512345", "alice.johnson@example.com"
    );

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);
    addressBook.addContact(contact3);
    addressBook.addContact(contact4);

    // ✅ Count by City
    addressBook.countByCity();

    // ✅ Count by State
    addressBook.countByState();

} catch (error) {
    console.error("❌ Error:", error.message);
}
