const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
}

Manager.prototype.getOfficeNumber = function () {
    console.log("Office Number: " + this.officeNumber);
};

// const bill = new Manager("Bill", 54321, "Bill@gmail.com", 69);

// bill.getName();
// bill.getId();
// bill.getEmail();
// bill.getRole();
// bill.getOfficeNumber();

module.exports = Manager;