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

const sarah = new Intern("Sarah", 98765, "sarah@gmail.com", "UC Berkeley Extension");

sarah.getName();
sarah.getId();
sarah.getEmail();
sarah.getRole();
sarah.getSchool();

module.exports = Intern;