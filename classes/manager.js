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

module.exports = Manager;