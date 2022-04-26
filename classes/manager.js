const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super();
        this.name = name
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
}

const bill = new Manager("Bill", 54321, "Bill@gmail.com", 69);

bill.getName();
bill.getId();
bill.getEmail();
bill.getRole();
console.log(bill.officeNumber);

module.exports = Manager;