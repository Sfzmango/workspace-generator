const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }
}

Intern.prototype.getSchool = function () {
    console.log("School: " + this.school);
};

module.exports = Intern;