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

    // Display Contact Details
    displayContact() {
        return `
        Name: ${this.firstName} ${this.lastName}
        Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}
        Phone: ${this.phone}
        Email: ${this.email}`;
    }
}

// Example Usage
const contact1 = new AddressBookContact(
    "Sarthak", "Rastogi", "123 Street", "Meerut", "UP", "250002", "9876543210", "sarthak@example.com"
);

console.log(contact1.displayContact());
