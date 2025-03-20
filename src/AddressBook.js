class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddress(address, "Address");
        this.city = this.validateAddress(city, "City");
        this.state = this.validateAddress(state, "State");
        this.zip = this.validateZip(zip);
        this.phone = this.validatePhone(phone);
        this.email = this.validateEmail(email);
    }

    validateName(name, fieldName) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        if (!namePattern.test(name)) {
            throw new Error(`${fieldName} must start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    validateAddress(value, fieldName) {
        if (value.length < 4) {
            throw new Error(`${fieldName} must have at least 4 characters.`);
        }
        return value;
    }

    validateZip(zip) {
        const zipPattern = /^[1-9][0-9]{5}$/;
        if (!zipPattern.test(zip)) {
            throw new Error("Invalid ZIP code. It must be a 6-digit number.");
        }
        return zip;
    }

    validatePhone(phone) {
        const phonePattern = /^[6-9][0-9]{9}$/;
        if (!phonePattern.test(phone)) {
            throw new Error("Invalid phone number. It must be 10 digits starting with 6-9.");
        }
        return phone;
    }

    validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            throw new Error("Invalid email format.");
        }
        return email;
    }

    displayContact() {
        return `Name: ${this.firstName} ${this.lastName} | Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip} | Phone: ${this.phone} | Email: ${this.email}`;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (this.contacts.some(c => c.email === contact.email)) {
            console.log(`❌ Contact with email ${contact.email} already exists!`);
            return;
        }
        this.contacts.push(contact);
        console.log("✅ Contact added successfully!");
    }

    findContact(name) {
        return this.contacts.find(contact => contact.firstName === name || contact.lastName === name);
    }

    deleteContact(name) {
        const index = this.contacts.findIndex(contact => contact.firstName === name || contact.lastName === name);
        if (index === -1) {
            console.log(`❌ Contact with name '${name}' not found!`);
            return;
        }
        this.contacts.splice(index, 1);
        console.log(`✅ Contact '${name}' deleted successfully!`);
    }

    countContacts() {
        return this.contacts.length;
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("📂 Address Book is empty!");
            return;
        }
        console.log(`📜 Address Book Contacts (Total: ${this.countContacts()})`);
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.displayContact()}`);
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

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    // Display total number of contacts
    console.log(`\n📊 Total Contacts: ${addressBook.countContacts()}`);

    // Delete a contact
    console.log("\n🗑️ Deleting John's Contact...");
    addressBook.deleteContact("John");

    // Display updated contacts
    addressBook.displayContacts();

    // Show updated count
    console.log(`\n📊 Updated Total Contacts: ${addressBook.countContacts()}`);

} catch (error) {
    console.error("❌ Error:", error.message);
}
